import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface Character {
    id: number,
    name: string,
    gender: string,
    image: string,
    origin: object,
    location :object,
    episode: object,
    url: string

}

interface initialType {
    characters: Character[]
    loading: boolean
    favoritesList: Character[]
    inputSearch: string
}

export const getCharacters = createAsyncThunk(
    'gallery/character',
    async (page: number) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const parseRes = await res.json()
        return parseRes.results
    }
)

export const getFilteredCharacters = createAsyncThunk(
    'gallery/filteredChars',
    async (name: string) => {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
        const parseRespuesta = await respuesta.json();
        return parseRespuesta.results;
    }
);

const initialState: initialType = {
    characters: [],
    loading: false,
    favoritesList: [],
    inputSearch: ""
}

const characterGallery = createSlice({
    name: 'character',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            if(!state.favoritesList.find(favorite => favorite.id === action.payload.id)){
                state.favoritesList.push(action.payload);
            } else{
                state.favoritesList = state.favoritesList.filter(favorite => favorite.id !== action.payload.id);
            }
        },
        deleteFavorites: (state) => {
            state.favoritesList = initialState.favoritesList;
        },
        searchCharacter: (state, action) => {
            state.inputSearch = action.payload;
        },
        deleteCharacter: (state) => {
            state.inputSearch = initialState.inputSearch;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCharacters.pending, (state) => {
                state.loading = true
            })
            .addCase(getCharacters.fulfilled, (state, action) => {
                state.loading = false
                state.characters = action.payload
            })
            .addCase(getCharacters.rejected, (state, action) => {
                state.loading = false
            })
            .addCase(getFilteredCharacters.pending, (state) => {
                state.loading = true
            })
            .addCase(getFilteredCharacters.fulfilled, (state, action) => {
                state.loading = false
                state.characters = action.payload
            })
            .addCase(getFilteredCharacters.rejected, (state, action) => {
                state.loading = false
            })

    }
})

export const { toggleFavorite, deleteFavorites,searchCharacter,deleteCharacter} = characterGallery.actions;
export default characterGallery.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface Character {
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
    favorite: number[]
    favoritesList: Character[]
}

export const getCharacters = createAsyncThunk(
    'gallery/character',
    async (page: number) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const parseRes = await res.json()
        return parseRes.results
    }
)
export const getCharactersById = createAsyncThunk(
    'gallery/character',
    async (ids: number) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${ids}`)
        const parseRes = await res.json()
        return parseRes.results
    }
)

const initialState: initialType = {
    characters: [],
    loading: false,
    favorite: [],
    favoritesList: []
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

        
    }
})

export const { toggleFavorite, deleteFavorites} = characterGallery.actions;
export default characterGallery.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface Character {
    id: number,
    favorite: boolean
}

interface initialType {
    characters: Character[]
}


const initialState: initialType = {
    characters: [{id:1, favorite:true},{id:4, favorite:true},{id:8, favorite:true},{id:5, favorite:true}],
}


const addFavorite = createSlice({
    name: 'favoritesChars',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const id = action.payload;

            const characterIndex = state.characters.findIndex((character) => character.id === id);
            if (characterIndex !== -1) {
              
                // Remove character from favorites
                state.characters.splice(characterIndex, 1);
               
            } else {
                // Add new character to favorites
                state.characters.push({ id, favorite: true });
            }
        }
    }
})

export const { toggleFavorite } = addFavorite.actions;
export default addFavorite.reducer

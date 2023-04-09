import { configureStore } from '@reduxjs/toolkit'
import characterGalleryReducer from '../reducers/characterGallery'

export const store = configureStore({
  reducer: {
    gallery: characterGalleryReducer,
  },
})

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
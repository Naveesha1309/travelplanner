import { configureStore } from '@reduxjs/toolkit';
// import galleryReducer from './gallerySlice';
import galleryReducer from './gallerySliceapi';  //api

const store = configureStore({
    reducer: {
        gallery: galleryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;

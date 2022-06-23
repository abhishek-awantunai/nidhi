import { configureStore } from "@reduxjs/toolkit";
import imageSlice from './reducers/imageSlice';

const store = configureStore({
    reducer: {
        imagePosts: imageSlice
    }
});

export default store;
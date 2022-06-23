import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "thunk";
import imageSlice from './reducers/imageSlice';

const store = configureStore({
    reducer: {
        imagePosts: imageSlice
    }
}, applyMiddleware(thunk));

export default store;
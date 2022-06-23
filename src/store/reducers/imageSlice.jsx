import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoader: false,
    posts: []
}

const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        updatePosts(state, action) {
            state.posts = action.payload;
        },
        showLoader(state) {
            const date = new Date();
            console.log('showing loader ' + date.getSeconds());
            state.isLoader = true;
        },
        hideLoader(state) {
            const date = new Date();
            console.log('hiding loader ' + date.getSeconds());
            state.isLoader = false;
        }
    }
})

export const imageAction = imageSlice.actions;
export default imageSlice.reducer;
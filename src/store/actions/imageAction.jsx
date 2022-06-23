import { imageAction } from "../reducers/imageSlice";

export const updatePosts = () => dispatch => {
    dispatch(imageAction.updatePosts());
}

export const hideLoader = () => dispatch => {
    setTimeout(() => dispatch(imageAction.hideLoader()), 5000);
}
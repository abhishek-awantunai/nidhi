import React, { Fragment, useEffect } from 'react'
import List from './List';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { imageAction } from '../store/reducers/imageSlice'; 
import { hideLoader } from '../store/actions/imageAction';
import Loader from './Loader';
import { Input } from './Input';

let url = 'https://jsonplaceholder.typicode.com/photos';
const Demo = () => {
    const dispatch = useDispatch();
    const imagePosts = useSelector(e => e.imagePosts);

    useEffect(() => {
        dispatch(imageAction.showLoader());        

        axios.get(url).then(res => {
            dispatch(hideLoader());
            dispatch(imageAction.updatePosts(res.data));
        }).catch(() => {
            dispatch(imageAction.updatePosts([]));
        });
    }, []);

    const searchTitle = (val) => {
        dispatch(imageAction.showLoader());
        axios.get(url + '?title=' + (val ? val : '')).then(res => {
            dispatch(hideLoader());
            dispatch(imageAction.updatePosts(res.data));
        }).catch(() => {
            dispatch(imageAction.updatePosts([]));
        })
    }

    return (
        <Fragment> 
            <Input searchTitle={searchTitle} />
            { imagePosts.isLoader && <Loader /> }
            <div className="conatiner-fluid">
                <div className="row">
                    <List imagePosts={imagePosts.posts} />
                </div>
            </div>
        </Fragment>
    )
}

export default Demo;
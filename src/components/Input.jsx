import React, { useCallback } from 'react';
import styledComponent from 'styled-components';

const InputBox = styledComponent.input`
    height: 45px;
    width:  300px;
    padding: 10px 25px;
    margin: 30px 0px;
`;

export const Input = ({searchTitle}) => {
    let timer;
    const debounce = (cb, time) => (args) => {
        clearTimeout(timer);
        timer = setTimeout(() => cb(args), time);
    }

    const searchTitleFromApi = (e) => {
        searchTitle(e.target.value);
    }

    const inputChangeHandler = useCallback(debounce(searchTitleFromApi, 1000), []);


    return (
        <InputBox types="text" onChange={inputChangeHandler} />
    )
}

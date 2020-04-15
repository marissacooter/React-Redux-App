import React, {useEffect} from 'react';
import {fetchMovie} from '../actions/MovieActions';

const Movie = props => {
    useEffect(() => {
        props.fetchMovie();
    }, []);
}


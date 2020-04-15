import React, {useEffect} from 'react';
import {fetchMovie} from '../actions/MovieActions';
import Movie from './Movie'
import {useSelector} from 'react-redux';

const MovieList = props => {
    const movies = useSelector(state => state.movies)
    // useEffect(() => {
    //     props.fetchMovie();
    // }, []);
    return (
    <div>{movies.map( movie => <Movie movie={movie}/>)}</div>
    )
}
export default MovieList;


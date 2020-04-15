import React, {useState} from 'react';
import './Movie.css';

const Movie = (props) => {
    return (
        <div class='body'>
            <div class='movies'>
                <p>Movie: {props.movie.title}</p>
                <p>Description: {props.movie.description}</p>
                <p>Director: {props.movie.director}</p>
            </div>
        </div>
    )
}

export default Movie;
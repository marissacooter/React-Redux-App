import axios from 'axios';

export const FETCH_MOVIES_START = 'FETCH_MOVIES_START'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE'

export const fetchMovies = () => {
    return dispatch => {
        console.log('fetching')
        dispatch({type: FETCH_MOVIES_START})
    axios 
        .get('https://ghibliapi.herokuapp.com/films')
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCH_MOVIES_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_MOVIES_FAILURE, payload: err.response.statusText})
        })
    }
}


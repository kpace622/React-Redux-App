import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_INFO = 'UPDATE_INFO';
export const SET_ERROR = 'SET_ERROR';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get('https://api.magicthegathering.io/v1/cards')
        .then(res => {
            console.log(res);
            dispatch({ type: UPDATE_INFO, payload: res.data.cards })
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: SET_ERROR, payload: 'error fetching data' });
        });
};
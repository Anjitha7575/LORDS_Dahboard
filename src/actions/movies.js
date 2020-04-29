import {
    FETCH_ALL_MOVIES, FETCH_ALL_QUOTES_MOVIEID, FETCH_ALL_CHARACTERS,
    FETCH_ALL_QUOTE_CHARID, FETCH_ALL_QUOTES
} from '../actionTypes';

export const fetchAllMovies = (status, data) => ({
    type: FETCH_ALL_MOVIES,
    payload: { 'status': status, 'data': data }
});

export const fetchAllQuotesByMovieId = (status, data) => ({
    type: FETCH_ALL_QUOTES_MOVIEID,
    payload: { 'status': status, 'data': data }
});

export const fetchAllCharacters = (status, data) => ({
    type: FETCH_ALL_CHARACTERS,
    payload: { 'status': status, 'data': data }
});

export const fetchAllQuotesByChar = (status, data) => ({
    type: FETCH_ALL_QUOTE_CHARID,
    payload: { 'status': status, 'data': data }
});

export const fetchAllQuotes = (status, data) => ({
    type: FETCH_ALL_QUOTES,
    payload: { 'status': status, 'data': data }
});

export function getAllMovies() {
    return dispatch => {
        dispatch(fetchAllMovies('loading'));
        fetch('https://the-one-api.herokuapp.com/v1/movie', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'EG3TEqzemX-Fngtazuii',
                'Host': 'the-one-api.herokuapp.com'
            }
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                dispatch(fetchAllMovies('success', response));
            }).catch(error => {
                dispatch(fetchAllMovies('error', {}));
            })
    }
}

export function getMovieByIdQuote(id) {
    return dispatch => {
        dispatch(fetchAllQuotesByMovieId('loading'));
        fetch('https://the-one-api.herokuapp.com/v1/movie/' + id + '/quote', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'EG3TEqzemX-Fngtazuii',
                'Host': 'the-one-api.herokuapp.com'
            }
        }).then(res => res.json())
            .then(response => {
                console.log(response);
                dispatch(fetchAllQuotesByMovieId('success', response));
            }).catch(error => {
                dispatch(fetchAllQuotesByMovieId('error', {}));
            })
    }
}

export function getMovieById(id) {
    return dispatch => {
        dispatch(fetchAllQuotesByMovieId('loading'));
        fetch('https://the-one-api.herokuapp.com/v1/movie/' + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'EG3TEqzemX-Fngtazuii',
                'Host': 'the-one-api.herokuapp.com'
            }
        }).then(res => res.json())
            .then(response => {
                console.log(response);
                dispatch(fetchAllQuotesByMovieId('success', response));
            }).catch(error => {
                dispatch(fetchAllQuotesByMovieId('error', {}));
            })
    }
}

export function getAllCharacters() {
    return dispatch => {
        dispatch(fetchAllCharacters('loading'));
        fetch('https://the-one-api.herokuapp.com/v1/character', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'EG3TEqzemX-Fngtazuii',
                'Host': 'the-one-api.herokuapp.com'
            }
        }).then(res => res.json())
            .then(response => {
                console.log(response);
                dispatch(fetchAllCharacters('success', response));
            }).catch(error => {
                dispatch(fetchAllCharacters('error', {}));
            })
    }
}

export function getAllQuotesByChar(id) {
    return dispatch => {
        dispatch(fetchAllQuotesByChar('loading'));
        fetch('https://the-one-api.herokuapp.com/v1/character/' + id + '/quote', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'EG3TEqzemX-Fngtazuii',
                'Host': 'the-one-api.herokuapp.com'
            }
        }).then(res => res.json())
            .then(response => {
                console.log(response);
                dispatch(fetchAllQuotesByChar('success', response));
            }).catch(error => {
                dispatch(fetchAllQuotesByChar('error', {}));
            })
    }
}

// export function getCharacterByIdQuote() {
//     return dispatch => (
//         fetch('https://the-one-api.herokuapp.com/v1/character//quote', {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + 'EG3TEqzemX-Fngtazuii',
//                 'Host': 'the-one-api.herokuapp.com'
//             }
//         })
//             .then(res => res.json())
//             .then(response => {
//                 console.log(response);
//             })
//     )
// }

export function getAllQuotes() {
    return dispatch => {
        dispatch(fetchAllQuotes('loading'));
        fetch('https://the-one-api.herokuapp.com/v1/quote', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'EG3TEqzemX-Fngtazuii',
                'Host': 'the-one-api.herokuapp.com'
            }
        }).then(res => res.json())
            .then(response => {
                console.log(response);
                dispatch(fetchAllQuotes('success', response));
            }).catch(error => {
                dispatch(fetchAllQuotes('error', {}));
            })
    }
}

export function getQuoteById(id) {
    return dispatch => {
        dispatch(fetchAllQuotesByChar('loading'));
        fetch('https://the-one-api.herokuapp.com/v1/character/' + id + '/quote', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'EG3TEqzemX-Fngtazuii',
                'Host': 'the-one-api.herokuapp.com'
            }
        }).then(res => res.json())
            .then(response => {
                console.log(response);
                dispatch(fetchAllQuotesByChar('success', response));
            }).catch(error => {
                dispatch(fetchAllQuotesByChar('error', {}));
            })
    }
}
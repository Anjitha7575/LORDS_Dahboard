import { combineReducers } from 'redux';
import bookReducer from './booksReducer';
import {
    FETCH_ALL_CHAPTER_BOOKID, FETCH_ALL_MOVIES,
    FETCH_ALL_QUOTES_MOVIEID, FETCH_ALL_CHARACTERS,
    FETCH_ALL_QUOTE_CHARID, FETCH_ALL_QUOTES,
    LOGIN_PROCESS_LOADING, SUBMIT_PROCESS_LOADING
} from '../actionTypes';


const chaptersOfBookId = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_CHAPTER_BOOKID:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
const allMovies = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_MOVIES:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
const allQuotesofMovieId = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_QUOTES_MOVIEID:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
const allCharacters = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_CHARACTERS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
const allQuotesofChar = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_QUOTE_CHARID:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
const allDataQuotes = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_QUOTES:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

const loginResponse = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_PROCESS_LOADING:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

const submitUserResponse = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_PROCESS_LOADING:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default combineReducers({
    booksInfo: bookReducer,
    chaptersOfBookId: chaptersOfBookId,
    allMovies: allMovies,
    allQuotesofMovieId: allQuotesofMovieId,
    allCharacters: allCharacters,
    allQuotesofChar: allQuotesofChar,
    allDataQuotes: allDataQuotes,
    loginResponse: loginResponse,
    submitUserResponse: submitUserResponse
});
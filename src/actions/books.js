import { FETCH_ALL_BOOKS, FETCH_ALL_CHAPTER_BOOKID } from '../actionTypes';

export const fetchAllBooks = (status, data) => ({
    type: FETCH_ALL_BOOKS,
    payload: { 'status': status, 'data': data }
});

export const fetchAllChaptersByBookId = (status, data) => ({
    type: FETCH_ALL_CHAPTER_BOOKID,
    payload: { 'status': status, 'data': data }
});

export function getAllBooks() {
    return dispatch => {
        dispatch(fetchAllBooks('loading'));
        fetch('https://the-one-api.herokuapp.com/v1/book', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                dispatch(fetchAllBooks('success', response));

            }).catch(error => {
                dispatch(fetchAllBooks('error', {}));
            })
    }
}

export function getOneBook() {
    return dispatch => {

        fetch('https://the-one-api.herokuapp.com/v1/book/5cf5805fb53e011a64671582', {
            method: 'GET',
            query: 'hello'
        })
            .then(res => res.json())
            .then(response => {
                // console.log(response);
                // dispatch(fetchAllChaptersByBookId('success', response));
            }).catch(error => {
                dispatch(fetchAllChaptersByBookId('error', {}));
            })
    }
}

export function getAllChaptersOfBook(bookId) {
    return dispatch => {
        dispatch(fetchAllChaptersByBookId('loading'));
        fetch('https://the-one-api.herokuapp.com/v1/book/' + bookId + '/chapter', {
            method: 'GET',
            query: 'hello'
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                dispatch(fetchAllChaptersByBookId('success', response));
            }).catch(error => {
                dispatch(fetchAllChaptersByBookId('error', {}));
            })
    }
}

export function getChapter() {
    return dispatch => (
        fetch('https://the-one-api.herokuapp.com/v1/chapter/5cdc25d5bc17e929cf2461fc', {
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
            })
    )
}


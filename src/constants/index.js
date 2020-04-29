export const HeaderImage = require('../assets/lord.png');

export const BooksImg = require('../assets/book.jpg');
export const LordImage10 = require('../assets/lord10.jpg');
export const LordImage6 = require('../assets/lord9.jpg');
export const LordImage13 = require('../assets/lord13.jpg');
export const LoadingIcon = require('../assets/loading.gif');
export const MovieIcon = require('../assets/movie.jpg');
export const SortMovieItems = [
    { name: 'Year', key: '_id', order: 'asc' },
    { name: 'Most Award Wins', key: 'academyAwardWins', order: 'asc' },
    { name: 'Most Award Nominations', key: 'academyAwardNominations', order: 'asc' },
    { name: 'High Budget', key: 'budgetInMillions', order: 'asc' },
    { name: 'More Box Office Success', key: 'boxOfficeRevenueInMillions', order: 'asc' },
    { name: 'More Duration', key: 'runtimeInMinutes', order: 'asc' },
    { name: 'Name', key: 'name', order: 'asc' }
]

export const SortCharsItems = [
    { name: 'Year', key: '_id', order: 'asc' },
    { name: 'Birth', key: 'birth', order: 'asc' },
    { name: 'Height', key: 'height', order: 'asc' },
    { name: 'Death', key: 'death', order: 'asc' },
]

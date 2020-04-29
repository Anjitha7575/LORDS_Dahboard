import { connect } from 'react-redux';
import SearchBar from './component';
// import { getAllBooks, getOneBook, getAllChaptersOfBook, getChapter, getAllMovies } from '../../actions/books';
// import { getAllCharacters } from '../../actions/movies';

const mapDispatchToProps = (dispatch) => ({
    // getAllbooks: () => dispatch(getAllBooks()),
    // getOneBook: () => dispatchEvent(getOneBook()),
    // getAllChaptersOfBook: () => dispatch(getAllChaptersOfBook()),
    // getChapter: () => dispatch(getChapter()),
    // getAllMovies: () => dispatch(getAllMovies()),
    // getAllCharacters :()=>dispatch(getAllCharacters())
})

export default connect(null, {})(SearchBar);
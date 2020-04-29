import { connect } from 'react-redux';
import Books from './component';
import { getAllBooks, getOneBook, getAllChaptersOfBook, getChapter } from '../../../actions/books';
// import { getAllCharacters } from '../../actions/movies';

const mapStateToProps = (state) => ({
    booksInfo: state.booksInfo,
    chaptersInfo: state.chaptersOfBookId,
})

const mapDispatchToProps = (dispatch) => ({
    getAllbooks: () => dispatch(getAllBooks()),
    // getOneBook: () => dispatchEvent(getOneBook()),
    getAllChaptersOfBook: (bookId) => dispatch(getAllChaptersOfBook(bookId)),
    // getChapter: () => dispatch(getChapter()),
    // getAllMovies: () => dispatch(getAllMovies()),
    // getAllCharacters :()=>dispatch(getAllCharacters())
})

export default connect(mapStateToProps, mapDispatchToProps)(Books);
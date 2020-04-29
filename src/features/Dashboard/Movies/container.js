import { connect } from 'react-redux';
import Movies from './component';
import { getAllMovies, getMovieByIdQuote } from '../../../actions/movies';

const mapStateToProps = (state) => ({
    allMovies: state.allMovies,
    allQuotesofMovieId: state.allQuotesofMovieId
})

const mapDispatchToProps = (dispatch) => ({
    getAllMovies: () => dispatch(getAllMovies()),
    getMovieByIdQuote: (id) => dispatch(getMovieByIdQuote(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
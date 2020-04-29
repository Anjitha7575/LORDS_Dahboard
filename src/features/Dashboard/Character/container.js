import { connect } from 'react-redux';
import Character from './component';
import { getAllCharacters, getAllQuotesByChar  } from '../../../actions/movies';

const mapStateToProps = (state) => ({
    allCharacters: state.allCharacters,
    allQuotesofChar: state.allQuotesofChar
})

const mapDispatchToProps = (dispatch) => ({
    getAllCharacters: () => dispatch(getAllCharacters()),
    getAllQuotesByChar: (movieId) => dispatch(getAllQuotesByChar(movieId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Character);
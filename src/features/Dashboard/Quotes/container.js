import { connect } from 'react-redux';
import Quotes from './component';
import { getAllQuotes, getAllQuotesByChar  } from '../../../actions/movies';

const mapStateToProps = (state) => ({
    allDataQuotes: state.allDataQuotes,
    allQuotesofChar: state.allQuotesofChar
})

const mapDispatchToProps = (dispatch) => ({
    getAllQuotes: () => dispatch(getAllQuotes()),
    getAllQuotesByChar: (movieId) => dispatch(getAllQuotesByChar(movieId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
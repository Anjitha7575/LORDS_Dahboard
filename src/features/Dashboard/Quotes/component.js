import React, { Component, Fragment } from 'react';
import {
    MainBlock, DocBox, BookImg, BookBox, Sub2,
    BookName, BookLink, LoadingImg, Sub1, Panel,
    InfoVals, QuoteBox, BtnPag,
} from './styles';
import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import SearchBar from '../SearchBar/container';
import { MovieIcon, LoadingIcon, SortCharsItems } from '../../../constants';

class Quotes extends Component {
    constructor() {
        super();
        this.state = {
            showId: '',
            activePage: 10,
            currentPage: 1,
            perPage: 10,
            sortCategory: { name: '', value: '' },
            SortCharsItems: SortCharsItems,
            childData: '',
            startPage: 0,
            endPage: 0,
            gender: ''
        }
    }

    componentDidMount() {
        const { activePage, endPage } = this.state;
        this.props.getAllQuotes();
        this.setState({ endPage: activePage });
    }

    getQuotesBychrId = (chrId, index) => {
        this.setState({ 'showId': index });
        this.props.getAllQuotesByChar(chrId);
    }

    showChaptersData = (quoteData) => {
        if (_isEmpty(quoteData)) {
            return <div><i className="fas fa-star-half-alt" style={{ 'color': 'orange' }}></i> Oops, No Information ...</div>;
        } else {
            return (
                <Fragment>
                    {!_isEmpty(quoteData) && quoteData.map((chp, ind) =>
                        <QuoteBox key={ind}><p className="q">{chp.dialog}</p></QuoteBox>
                    )}
                </Fragment>
            )
        }
    }

    showChpDataStatus = (quoteStatus, quoteData) => {
        switch (quoteStatus) {
            case 'success':
                return <Fragment>{this.showChaptersData(quoteData)}</Fragment>;
            case 'loading':
                return <LoadingImg src={LoadingIcon} alt="Loading..." />;
            case 'error':
                return <div>Something went wrong!!</div>;
            default:
                return null;
        }
    }

    showQuoteStatus = (quoteStatus) => {
        switch (quoteStatus) {
            case 'success':
                return null;
            case 'loading':
                return <LoadingImg src={LoadingIcon} alt="Loading..." />;
            case 'error':
                return <div>Something went wrong!!</div>;
            default:
                return null;
        }
    }

    handleChange = (ev) => {
        const { name, value } = ev.target;
        this.setState({ [name]: value });
    }

    sortBookData = () => {
        const { allDataQuotes } = this.props;
        const { childData } = this.state;
        let moviesInfo = _get(allDataQuotes, 'data.docs', []);
        let moviesData =[];
        moviesData = moviesInfo.filter((obj) => {
            if (!_isEmpty(obj.dialog) && ((obj.dialog.toLowerCase()).includes(childData.toLowerCase()))) {
                return obj;
            }
        });
        return moviesData;
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    renderMoviesDetails = (character) => {
        return (
            <Fragment>
                <QuoteBox ><p className="q">{character.dialog}</p></QuoteBox>
            </Fragment>
        )
    }

    handleSearchChange = (data) => {
        this.setState({ childData: data });
    }

    prevPage = () => {
        let { startPage, endPage, activePage } = this.state;
        if (startPage < activePage || endPage < activePage) {
            this.setState({ startPage: 0 });
            this.setState({ endPage: activePage });
        } else {
            this.setState({ startPage: startPage - activePage });
            this.setState({ endPage: endPage - activePage });
        }
    }

    nextPage = () => {
        const { allDataQuotes } = this.props;
        let { startPage, endPage, activePage } = this.state;
        let moviesInfo = _get(allDataQuotes, 'data.docs', []);
        let dataLen = moviesInfo.length;
        if (endPage < dataLen && startPage < dataLen) {
            this.setState({ startPage: startPage + activePage });
            this.setState({ endPage: endPage + activePage });
        } else if (endPage > dataLen) {
            this.setState({ startPage: dataLen - activePage });
            this.setState({ endPage: dataLen });
        }
    }

    renderPageNumbers = (pageNo) => {
        const { startPage, endPage } = this.state;
        const pageNumbers = pageNo.slice(startPage, endPage);
        return (
            <Fragment>
                <BtnPag disabled={startPage <= 0} onClick={this.prevPage}>Prev</BtnPag>
                {pageNumbers.map(number => {
                    return (
                        <li
                            key={number}
                            id={number}
                            className={(number === this.state.currentPage) ? 'active' : ''}
                            onClick={this.handleClick}
                        >
                            {number}
                        </li>
                    );
                })}
                <BtnPag disabled={endPage >= (pageNo.length)} onClick={this.nextPage}>Next</BtnPag>
                <div style={{ 'fontSize': '12px', 'marginTop': '10px', color: '#08a7e8' }}>({pageNo.length} Pages)</div>
            </Fragment>
        )
    }

    render() {

        const { allDataQuotes } = this.props;
        const allDataQuotesStatus = _get(allDataQuotes, 'status', []);
        const { showId } = this.state;
        let moviesData = this.sortBookData();
        const quoteStatus = _get(allDataQuotes, 'status', []);
        const quoteData = _get(allDataQuotes, 'data.docs', []);
        const { currentPage, perPage } = this.state;
        const indexOfLastTodo = currentPage * perPage;
        const indexOfFirstTodo = indexOfLastTodo - perPage;
        const currentTodos = moviesData.slice(indexOfFirstTodo, indexOfLastTodo);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(moviesData.length / perPage); i++) {
            pageNumbers.push(i);
        }
        return (

            <MainBlock>
                <Sub2>
                    <Fragment>
                        <BookBox>
                            <div style={{ 'margin': '18px -30px 0 0px' }}></div>
                            <div>  <ul id="page-numbers">
                                {this.renderPageNumbers(pageNumbers)}
                            </ul></div>
                            <SearchBar title={"Search your favorite quotes..."} sendData={this.handleSearchChange} />
                        </BookBox>
                    </Fragment>
                    <Fragment>
                        {!_isEmpty(currentTodos) && currentTodos.map((character, index) =>
                            <DocBox key={index}>
                                <BookBox>
                                    <BookImg src={MovieIcon} alt={character.dialog} />
                                    <BookName>
                                        {this.renderMoviesDetails(character)}
                                        {/* <BookLink onClick={() => this.getQuotesBychrId(character._id, index)}>
                                            Check your favorite quotes...
                                    </BookLink>
                                        {(showId === index) && <Panel>
                                            {this.showChpDataStatus(quoteStatus, quoteData)}
                                        </Panel>} */}
                                    </BookName>
                                </BookBox>
                            </DocBox>)
                        }
                    </Fragment>
                    <Fragment>
                        {this.showQuoteStatus(allDataQuotesStatus)}
                    </Fragment>
                </Sub2>

            </MainBlock>
        )
    }
}

export default Quotes;
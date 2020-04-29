import React, { Component, Fragment } from 'react';
import {
    MainBlock, DocBox, BookImg, BookBox, Sub2,
    BookName, BookLink, LoadingImg, Sub1, Panel,
    InfoVals, QuoteBox, InfoText,
} from './styles';
import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import SearchBar from '../SearchBar/container';
import { MovieIcon, LoadingIcon, SortMovieItems } from '../../../constants';
import { debounce } from '../../../utils';

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            showId: '',
            activePage: 5,
            currentPage: 1,
            perPage: 3,
            sortCategory: { name: '', value: '' },
            SortMovieItems: SortMovieItems,
            childData: ''
        }
    }

    componentDidMount() {
        this.props.getAllMovies();
    }

    getQuotesByMovieId = (movieId, index) => {
        this.setState({ 'showId': index });
        this.props.getMovieByIdQuote(movieId);
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

    handleCategoryChange1 = (target) => {
        let SortMovieItems = [...this.state.SortMovieItems];
        let sortCategory = { ...this.sortCategory };
        const { name, value } = target;
        sortCategory['name'] = name;
        sortCategory['value'] = value;
        SortMovieItems.map((item) => {
            if (item.name === name) {
                item['order'] = value;
            }
        })
        this.setState({ SortMovieItems });
        this.setState({ sortCategory });
    }

    getSortingEle1 = () => {
        const { SortMovieItems } = this.state;
        return (
            <Fragment>
                {SortMovieItems.map((item, index) =>
                    <DocBox key={index} id={index} style={{ 'display': 'flex' }}>
                        <div style={{ 'flex': '1' }}>{item.name}</div>
                        <div>
                            <select name={item.name} value={item.order} onChange={event => this.handleCategoryChange1(event.target)}>
                                <option id="0" key="asc" name="asc" value="asc" >Low to High</option>
                                <option id="1" key="des" name="des" value="des" >High to Low</option>
                            </select>
                        </div>
                    </DocBox>
                )}
            </Fragment>
        )
    }

    sortBookData = () => {
        const { allMovies } = this.props;
        const { sortCategory, SortMovieItems, childData } = this.state;
        let moviesInfo = _get(allMovies, 'data.docs', []);
        let moviesData = [];
        moviesData = moviesInfo.filter((obj) => {
            if ((obj.name.toLowerCase()).includes(childData.toLowerCase())) {
                return obj;
            }
        });
        SortMovieItems.map((obj) => {
            if (sortCategory.name === obj.name) {
                moviesData = (sortCategory.value === 'asc') ? moviesData.sort((a, b) => (a[obj.key] > b[obj.key] ? 1 : -1)) :
                    moviesData.sort((a, b) => (a[obj.key] > b[obj.key] ? -1 : 1));
            }
        });
        return moviesData;
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    renderMoviesDetails = (movie) => {
        return (
            <Fragment>
                <InfoVals>{movie.name}</InfoVals>
                <InfoVals>Duration: {movie.runtimeInMinutes} minutes</InfoVals>
                <InfoVals>Academy Award Nominations: {movie.academyAwardNominations}</InfoVals>
                <InfoVals><i className="fas fa-award" style={{ 'color': 'orange' }}></i> Academy Award Wins: {movie.academyAwardWins}</InfoVals>
                <InfoVals>Box Office Revenue: {movie.boxOfficeRevenueInMillions} millions</InfoVals>
                <InfoVals>Budget: {movie.budgetInMillions} millions</InfoVals>
            </Fragment>
        )
    }

    handleSearchChange = (data) => {
        this.setState({ childData: data });
    }

    showMainStatus = (status) => {
        switch (status) {
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

    render() {

        const { allQuotesofMovieId, allMovies } = this.props;
        const allDataMoviesStatus = _get(allMovies, 'status', []);
        const { showId } = this.state;
        let moviesData = this.sortBookData();
        const quoteStatus = _get(allQuotesofMovieId, 'status', []);
        const quoteData = _get(allQuotesofMovieId, 'data.docs', []);
        const { currentPage, perPage } = this.state;
        const indexOfLastTodo = currentPage * perPage;
        const indexOfFirstTodo = indexOfLastTodo - perPage;
        const currentTodos = moviesData.slice(indexOfFirstTodo, indexOfLastTodo);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(moviesData.length / perPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
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
        });

        return (
            <Fragment><InfoText>* Quotes available only for last two movies...</InfoText>
                <MainBlock>
                    <Sub1><DocBox>Sort Your Favorites {this.getSortingEle1()}</DocBox>
                    </Sub1>
                    <Sub2>
                        <Fragment>
                            <BookBox>
                                <div style={{ 'margin': '18px -30px 0 10px' }}>Pages: </div>
                                <div>  <ul id="page-numbers">
                                    {renderPageNumbers}
                                </ul></div>
                                <SearchBar title={"Search your favorite movies..."} sendData={this.handleSearchChange} />
                            </BookBox>
                        </Fragment>
                        <Fragment>
                            {!_isEmpty(currentTodos) && currentTodos.map((movie, index) =>
                                <DocBox key={index}>
                                    <BookBox>
                                        <BookImg src={MovieIcon} alt={movie.name} />
                                        <div style={{ 'marginLeft': '10px' }}>Movie Name: </div>
                                        <BookName>
                                            {this.renderMoviesDetails(movie)}
                                            <BookLink onClick={() => this.getQuotesByMovieId(movie._id, index)}>
                                                Check your favorite quotes...
                                    </BookLink>
                                            {(showId === index) && <Panel>
                                                {this.showChpDataStatus(quoteStatus, quoteData)}
                                            </Panel>}
                                        </BookName>
                                    </BookBox>
                                </DocBox>)
                            }
                        </Fragment>
                        <Fragment>
                            {this.showMainStatus(allDataMoviesStatus)}
                        </Fragment>
                    </Sub2>

                </MainBlock>
            </Fragment>

        )
    }
}

export default Movies;
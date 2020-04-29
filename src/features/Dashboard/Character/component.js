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

class Character extends Component {
    constructor() {
        super();
        this.state = {
            showId: '',
            activePage: 5,
            currentPage: 1,
            perPage: 3,
            sortCategory: { name: '', value: '' },
            SortCharsItems: SortCharsItems,
            childData: '',
            startPage: 0,
            endPage: 0,
            gender:''
        }
    }

    componentDidMount() {
        const { activePage, endPage } = this.state;
        this.props.getAllCharacters();
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

    handleCategoryChange1 = (target) => {
        let SortCharsItems = [...this.state.SortCharsItems];
        let sortCategory = { ...this.sortCategory };
        const { name, value } = target;
        sortCategory['name'] = name;
        sortCategory['value'] = value;
        SortCharsItems.map((item) => {
            if (item.name === name) {
                item['order'] = value;
            }
        })
        this.setState({ SortCharsItems });
        this.setState({ sortCategory });
    }

    handleChange = (ev) =>{
        const {name, value} = ev.target;
        this.setState({[name]: value});
    }

    getSortingEle1 = () => {
        const { SortCharsItems } = this.state;
        return (
            <Fragment>
                <div>
                    <DocBox> Gender: 
                        <label className="k_label"><input type="radio" name="gender" value="All" className="k-radio" onChange={this.handleChange} />All</label>
                        <label className="k_label"><input type="radio" name="gender" value="Male" className="k-radio" onChange={this.handleChange} />Male</label>
                        <label className="k_label"><input type="radio" name="gender" value="Female" className="k-radio" onChange={this.handleChange} />Female</label>
                    </DocBox>
                </div>
                {SortCharsItems.map((item, index) =>
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
        const { allCharacters } = this.props;
        const { sortCategory, SortCharsItems, childData, gender } = this.state;
        let moviesInfo = _get(allCharacters, 'data.docs', []);
        let moviesData = [] , movieD1= [];
        if(gender.toLowerCase() === 'male' || gender.toLowerCase() === 'female' ){
            movieD1 = moviesInfo.filter((obj) => {
                if (!_isEmpty(obj.gender) && ((obj.gender.toLowerCase()).includes(gender.toLowerCase()))) {
                    return obj;
                }
            });
        }else{
            movieD1 = [...moviesInfo];
        }
        moviesData = movieD1.filter((obj) => {
            if (!_isEmpty(obj.name) && ((obj.name.toLowerCase()).includes(childData.toLowerCase()))) {
                return obj;
            }
        });
        SortCharsItems.map((obj) => {
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

    renderMoviesDetails = (character) => {
        return (
            <Fragment>
                <InfoVals>{character.name}</InfoVals>
                <InfoVals>Gender: {character.gender}</InfoVals>
                <InfoVals>Birth: {character.birth}</InfoVals>
                <InfoVals><i className="fas fa-hat-wizard" style={{ 'color': '#f5052fba', 'fontSize': '25px' }}></i>Race: {character.race}</InfoVals>
                <InfoVals>Spouse: {character.spouse}</InfoVals>
                <InfoVals>Height: {character.height}</InfoVals>
                <InfoVals>Hair: {character.hair}</InfoVals>
                <InfoVals>Death: {character.death}</InfoVals>
                <InfoVals>Realm: {character.realm}</InfoVals>
                <InfoVals>wikiUrl: <a href={character.wikiUrl} target="_blank">{character.wikiUrl}</a></InfoVals>
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
        const { allCharacters } = this.props;
        let { startPage, endPage, activePage } = this.state;
        let moviesInfo = _get(allCharacters, 'data.docs', []);
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
                <div style={{ 'fontSize': '12px','marginTop':'10px', color:'#08a7e8' }}>({pageNo.length} Pages)</div>
            </Fragment>
        )
    }

    showMainStatus = (status) => {
        switch (status) {
            case 'success':
                return null;
            case 'loading':
                return <LoadingImg src={LoadingIcon} alt="Loading..." />;
            case 'error':
                return <div>Something went wrong!!!</div>;
            default:
                return null;
        }
    }

    render() {

        const { allQuotesofChar, allCharacters } = this.props;
        const allMainStatus = _get(allCharacters, 'status', []);
        const { showId } = this.state;
        let moviesData = this.sortBookData();
        const quoteStatus = _get(allQuotesofChar, 'status', []);
        const quoteData = _get(allQuotesofChar, 'data.docs', []);
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
                <Sub1><DocBox>Sort Your Favorites {this.getSortingEle1()}</DocBox>
                </Sub1>
                <Sub2>
                    <Fragment>
                        <BookBox>
                            <div style={{ 'margin': '18px -30px 0 0px' }}></div>
                            <div>  <ul id="page-numbers">
                                {this.renderPageNumbers(pageNumbers)}
                            </ul></div>
                            <SearchBar title={"Search your favorite characters..."} sendData={this.handleSearchChange} />
                        </BookBox>
                    </Fragment>
                    <Fragment>
                        {!_isEmpty(currentTodos) && currentTodos.map((character, index) =>
                            <DocBox key={index}>
                                <BookBox>
                                    <BookImg src={MovieIcon} alt={character.name} />
                                    <div style={{ 'marginLeft': '10px' }}>Character Name: </div>
                                    <BookName>
                                        {this.renderMoviesDetails(character)}
                                        <BookLink onClick={() => this.getQuotesBychrId(character._id, index)}>
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
                            {this.showMainStatus(allMainStatus)}
                        </Fragment>
                </Sub2>

            </MainBlock>
        )
    }
}

export default Character;
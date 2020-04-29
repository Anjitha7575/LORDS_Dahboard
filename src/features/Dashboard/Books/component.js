import React, { Component, Fragment } from 'react';
import {
    MainBlock, DocBox, BookImg, BookBox, Sub2,
    BookName, BookLink, LoadingImg, Sub1, Panel,
} from './styles';
import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import { BooksImg, LoadingIcon } from '../../../constants';

class Books extends Component {
    constructor() {
        super();
        this.state = {
            showId: '',
            category: 'Name'
        }
    }

    componentDidMount() {
        this.props.getAllbooks();
        // this.props.getOneBook();
        // this.props.getAllChaptersOfBook();
        // this.props.getChapter();
        // this.props.getAllMovies();
        // this.props.getAllCharacters();
    }

    // componentWillReceiveProps() {
    // }

    getChapterByBookId = (bookId, index) => {
        this.setState({ 'showId': index });
        this.props.getAllChaptersOfBook(bookId);
    }

    showChaptersData = (chapterData) => {
        if (_isEmpty(chapterData)) {
            return null;
        } else {
            return (
                <Fragment>
                    {!_isEmpty(chapterData) && chapterData.map((chp, ind) =>
                        <p key={ind}>Chapter {ind + 1}</p>
                    )}
                </Fragment>
            )
        }
    }

    showChpDataStatus = (chapterStatus, chapterData) => {
        switch (chapterStatus) {
            case 'success':
                return <Fragment>{this.showChaptersData(chapterData)}</Fragment>;
            case 'loading':
                return <LoadingImg src={LoadingIcon} alt="Loading..." />;
            case 'error':
                return <div>Something went wrong!!</div>;
            default:
                return null;
        }
    }

    handleCategoryChange = (category) => {
        this.setState({'category': category});
        console.log('category', category);
    }

    getSortingEle = () => {
        const {category} = this.state;
        return (
            <Fragment>
                <select name="category" value={category} onChange={event => this.handleCategoryChange(event.target.value)}>
                    <option id="0" >Name</option>
                    <option id="1" >Year</option>
                </select>
            </Fragment>
        )
    }

    sortBookData = () =>{
        const { booksInfo} = this.props;
        const {category} = this.state;
        let booksData = _get(booksInfo, 'data.docs', []);
        if(category === 'Name'){
            booksData = booksData.sort((a, b)=>(a.name > b.name ? 1: -1));
        }else if(category === 'Year'){
            booksData = booksData.sort((a, b)=>(a._id > b._id ? 1: -1));
        }
        return booksData;
    }

    render() {
        const { chaptersInfo } = this.props;
        const { showId } = this.state;
        let booksData = this.sortBookData();
        const chapterStatus = _get(chaptersInfo, 'status', []);
        const chapterData = _get(chaptersInfo, 'data.docs', []);
        return (
            <MainBlock>
                <Sub1><DocBox>Sort: {this.getSortingEle()}</DocBox></Sub1>
                <Sub2>
                    {!_isEmpty(booksData) && booksData.map((book, index) =>
                        <DocBox key={index}>
                            <BookBox>
                                <BookImg src={BooksImg} alt={book.name} />
                                <div style={{ 'marginLeft': '10px' }}>Name: </div>
                                <BookName>
                                    <div style={{ 'fontSize': '18px' }}>{book.name}</div>
                                    <BookLink onClick={() => this.getChapterByBookId(book._id, index)}>
                                        Check Out The Chapters...
                                    </BookLink>
                                    {(showId === index) && <Panel>
                                        {this.showChpDataStatus(chapterStatus, chapterData)}
                                    </Panel>}
                                </BookName>
                            </BookBox>
                        </DocBox>)
                    }
                </Sub2>
            </MainBlock>
        )
    }
}

export default Books;
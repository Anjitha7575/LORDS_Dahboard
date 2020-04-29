import React, { Component } from 'react';
import { SearchBox, Icon } from './styles';

class SearchBar extends Component {
    constructor() {
        super();
        this.state={
            search :''
        }
    }
    handleSearchChange = (ev) =>{
        const {name, value} = ev.target;
        this.setState({[name]:value});
        this.props.sendData(value);
    }

    render() {
        const {title} =this.props;
        return (
            <SearchBox>
                <input type="text" id="search-bar" name="search" onChange={this.handleSearchChange} placeholder={title} />
                    <a href="#"><Icon><i className="fas fa-search"></i></Icon></a>
            </SearchBox>
        )
    }
}

export default SearchBar;
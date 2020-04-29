import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { ContentBox, Details } from './styles';

class Contents extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <ContentBox>
                    <Details><Link to='/movies'>Movies</Link></Details>
                    <Details><Link to='/character'>Characters</Link></Details>
                    <Details><Link to='/books'>Books</Link></Details>
                    <Details><Link to='/quotes'>Quotes</Link></Details>
                </ContentBox>
                {this.props.children}
            </div>
        )
    }
}

export default Contents;
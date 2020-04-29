import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainTitle } from './styles';
import Contents from './Contents/container';
import Books from './Books/container';
import Movies from './Movies/container';
import Character from './Character/container';
import Quotes from './Quotes/container';
import {Heading} from './styles';

class Dashboard extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <MainTitle><Heading>Lord of the rings</Heading>
                <Contents />
                <Switch>
                    <Route exact path='/' component={Movies} />
                    <Route path='/books' component={Books} />
                    <Route path='/movies' component={Movies} />
                    <Route path='/character' component={Character} />
                    <Route path='/quotes' component={Quotes} />
                </Switch>
            </MainTitle>
        )
    }
}

export default Dashboard;
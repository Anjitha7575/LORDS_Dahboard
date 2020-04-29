import React, {Component} from 'react';
import {HeaderMain, HeaderImg, Leftpanel, MainTitle} from './styles';
import {HeaderImage} from '../../constants';
import LoginApp from '../Login/container';

class Header extends Component{
    render(){
        return(
            <HeaderMain>
                <HeaderImg src={HeaderImage} />
                <Leftpanel>
                    <LoginApp/>
                </Leftpanel>
            </HeaderMain>
        )
    }
}

export default Header;
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import SignIn from './SignIn/container';
import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import {
    UserBlc, LoginBtn
} from './styles';

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class LoginApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
    }

    componentDidMount() {
        this.props.setLocalData();
    }

    openModalHandler() {
        this.setState({ isModalOpen: true });
    }

    logout =() =>{
        this.props.logout();
    }

    closeModalHandler() {
        this.setState({ isModalOpen: false });
    }

    render() {
        const { submitUserResponse } = this.props;
        const userObj = _get(submitUserResponse, 'obj', {});

        return (
            <div>
                <h2>{this.props.name}</h2>
                <div>{this.state.isModalOpen}</div>
                <UserBlc>Hello {(!_isEmpty(userObj) && userObj.userName) ? userObj.userName : "Friend"}</UserBlc>
                {(!_isEmpty(userObj) && userObj.loggedIn) ?
                    <LoginBtn onClick={this.logout}>Logout</LoginBtn> :
                    <LoginBtn onClick={this.openModalHandler.bind(this)}>Login</LoginBtn>
                }
                <ReactModal
                    isOpen={this.state.isModalOpen}
                    style={modalStyle}
                    ariaHideApp={false}
                    onRequestClose={this.closeModalHandler.bind(this)}>
                    <div><SignIn  closeModal={this.closeModalHandler.bind(this)}/></div>
                    <button onClick={this.closeModalHandler.bind(this)}>Close</button>
                </ReactModal>
            </div>
        )
    }
}

export default LoginApp;
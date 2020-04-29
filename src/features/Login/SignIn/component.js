import React, { Component, Fragment } from 'react';
import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import {
    MainBlock, ErrorField, Divider
} from './styles';

const styles = {
    buttonDisabled: {
      backgroundColor: "#ccc",
      color: "#999"
    }
  };

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { userName: '', pswd: '' }
    }

    login = () => {
        this.props.getLoginResponse(this.state);
    }

    signUp = () => {
        this.props.submitNewUsrs(this.state);
    }
    componentWillReceiveProps(nextProps) {
        if ((nextProps.loginData.status === 'success')) {
            this.props.closeModal();
        }
    }

    changeEvent = (ev) => {
        const { name, value } = ev.target;
        this.setState({ [name]: value });
    }

    showLoginStatus = (loginData) => {
        switch (loginData.status) {
            case 'success':
                return null;
            case 'loading':
                return 'loading...';
            case 'error':
                return <ErrorField>Username or Password Invalid!</ErrorField>;
            default:
                return null;
        }
    }

    checkValidation = () => {
        const { userName, pswd } = this.state;
        if (!_isEmpty(userName) && !_isEmpty(pswd)) {
            return false;
        }
        return true;
    }


    render() {
        const { loginData, submitUserResponse } = this.props;
        return (
            <MainBlock>
                <div className="form">
                    <div className="container">
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="userName" onChange={this.changeEvent} required />

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="pswd" onChange={this.changeEvent} required />
                        <div style={{ 'display': 'flex' }}>
                            <button onClick={this.login}>Login</button>
                            <Divider>/</Divider>
                            <button style={
                                (this.checkValidation())
                                    ? {...styles.buttonDisabled }
                                    : {}
                            } disabled={this.checkValidation()} onClick={this.signUp}>SignUp</button>
                        </div>

                    </div>
                    {!_isEmpty(loginData) && <Fragment>{this.showLoginStatus(loginData)}</Fragment>}
                </div>
            </MainBlock>
        )
    }
}

export default SignIn;
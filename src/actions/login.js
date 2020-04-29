import { LOGIN_PROCESS_LOADING, SUBMIT_PROCESS_LOADING } from '../actionTypes';

export const loginProcess = (status, obj) => ({
    type: LOGIN_PROCESS_LOADING,
    payload: { status: status, obj: obj }
})

export const submitProcess = (status, obj) => ({
    type: SUBMIT_PROCESS_LOADING,
    payload: { status: status, obj: obj }
})

export function setLocalData() {
    return (dispatch) => {
        let userLoginData = JSON.parse(localStorage.getItem('userLoginData'));
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        dispatch(submitProcess('success', currentUser));
        if (!userLoginData) {
            let userArr = [{ 'userName': 'anji', 'pswd': 'anji' }, { 'userName': 'asw', 'pswd': 'asw' }]
            localStorage.setItem('userLoginData', JSON.stringify(userArr));
        }
    }
}

export function getLoginResponse(vals) {
    const { userName, pswd } = vals;
    const obj = { 'userName': userName, 'pswd': pswd };
    let validUser = false;
    return (dispatch) => {
        dispatch(loginProcess('loading'));
        let userLoginData = JSON.parse(localStorage.getItem('userLoginData'));
        if (userLoginData) {
            userLoginData.map((user) => {
                if (user.userName === userName && user.pswd === pswd) {
                    validUser = true;
                    obj['loggedIn'] = true;
                    dispatch(loginProcess('success', obj));
                    localStorage.setItem('currentUser', JSON.stringify(obj));
                    dispatch(submitProcess('success', obj));
                    return;
                }
            });
        }
        if (!validUser) {
            dispatch(loginProcess('error', validUser));
        }
    }
}

export function submitNewUsrs(vals) {
    const { userName, pswd } = vals;
    const obj = { 'userName': userName, 'pswd': pswd };
    return (dispatch) => {
        dispatch(loginProcess('loading'));
        let userLoginData = JSON.parse(localStorage.getItem('userLoginData'));
        if(!userLoginData){
            userLoginData = [].concat(obj);
        }else{
            userLoginData.push(obj);
        }
        obj['loggedIn'] = true;
        localStorage.setItem('userLoginData', JSON.stringify(userLoginData));
        dispatch(loginProcess('success', obj));
        localStorage.setItem('currentUser', JSON.stringify(obj));
        dispatch(submitProcess('success', obj));
    }
}

export function logout() {
    return dispatch => {
        localStorage.setItem('currentUser', JSON.stringify(null));
        dispatch(submitProcess('success', null));
    }
}
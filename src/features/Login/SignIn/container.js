import { connect } from 'react-redux';
import SignIn from './component';
import { getLoginResponse, submitNewUsrs, setLocalData} from '../../../actions/login';

const mapStateToProps = (state) => ({
    loginData: state.loginResponse,
    submitUserResponse: state.submitUserResponse,

})

const mapDispatchToProps = (dispatch) => ({
    setLocalData: () =>dispatch(setLocalData()),
    getLoginResponse: (vals) => dispatch(getLoginResponse(vals)),
    submitNewUsrs: (vals) => dispatch(submitNewUsrs(vals)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
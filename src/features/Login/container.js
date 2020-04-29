import { connect } from 'react-redux';
import LoginApp from './component';
import {setLocalData, logout} from '../../actions/login';

const mapStateToProps = (state) => ({
    loginData: state.loginResponse,
    submitUserResponse: state.submitUserResponse,
})

const mapDispatchToProps = (dispatch) => ({
    setLocalData: () => dispatch(setLocalData()),
    logout:() => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginApp);
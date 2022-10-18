import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { handleLoginApi } from '../../services/userService';
// import { KeyCodeUtils, LanguageUtils } from "../utils";

// import userIcon from '../../src/assets/images/user.svg';
// import passIcon from '../../src/assets/images/pass.svg';
// import { FormattedMessage } from 'react-intl';

// import userService from '../services/userService';

class Login extends Component {
  constructor(props) {
    super(props);
    this.btnLogin = React.createRef();
  }
  state = {
    userName: '',
    password: '',
    isShowPassword: false,
    errMessage: '',
  }
  handleOnchangeUsername = (e) => {
    this.setState({
      userName: e.target.value
    })
  }
  handleOnchangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  handleLogin = async () => {
    // console.log("check state", this.state)
    this.setState({
      errMessage: ''
    })
    try {
      let data = await handleLoginApi(this.state.userName, this.state.password)
      if (data && data.errCode !== 0) {
        this.setState({ errMessage: data.message })
      }
      if (data && data.errCode === 0) {
        //login
        this.props.userLoginSuccess(data.user)
        // console.log('success')
      }
    } catch (err) {
      if (err.response) {
        if (err.response.data) {
          console.log(err.response.data.message)
          this.setState({
            errMessage: err.response.data.message
          })
        }
      }
      // console.log(err)
    }
  }
  handleShowPassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword
    })
  }
  render() {
    return (
      <div className="login-wrapper">
        <div className="login-container">
          <div className='login-content row'>
            <div className='col-12 text-login'>Login</div>
            <div className='col-12 form-group'>
              <label>Username:</label>
              <input
                type='text'
                className='form-control input-login'
                placeholder='Enter your name'
                value={this.state.userName}
                onChange={(e) => { this.handleOnchangeUsername(e) }}
              />
            </div>
            <div className='col-12 form-group'>
              <label>Password:</label>
              <div className='input-password'>
                <input
                  type={this.state.isShowPassword ? 'text' : 'password'}
                  className='form-control input-login'
                  placeholder='Enter your password'
                  value={this.state.password}
                  onChange={(e) => { this.handleOnchangePassword(e) }}
                />
                <span onClick={() => { this.handleShowPassword() }}>
                  {this.state.isShowPassword ?
                    <i className="fas fa-eye-slash"></i> :
                    <i className='fas fa-eye'></i>
                  }
                </span>
              </div>
            </div>
            <div className='col-12' style={{ color: 'red' }}>{this.state.errMessage}</div>
            <div className='col-12'>
              <button className='btn-login' onClick={() => { this.handleLogin() }} >Login</button>
            </div>
            <div className='col-12 fogot-password'>Fogot your password</div>
            <div className='col-12 socal-login'>
              <span className='text-socal'>Login with:</span>
              <div className='list-socal'>
                <i className="fab fa-google-plus-g google"></i>
                <i className="fab fa-facebook-f facebook"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.app.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    // userLoginFail: () => dispatch(actions.userLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

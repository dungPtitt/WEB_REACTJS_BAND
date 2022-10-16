import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header';
import './VerifyBooking.scss';
import { postVerifyBooking } from '../../../services/userService';

class VerifyBooking extends Component {
  constructor(props) {
    super(props)
    this.state = {
      verifyEmail: false
    }
  }
  componentDidMount = async () => {
    if (this.props.location && this.props.location.search) {
      let urlParams = new URLSearchParams(this.props.location.search);
      let token = urlParams.get("token")
      let tourId = urlParams.get("tourId")
      let res = await postVerifyBooking({ tourId: tourId, token: token })
      console.log("check res: ", res)
      if (res && res.errCode === 0) {
        this.setState({
          verifyEmail: true
        })
      }
      console.log("check prop: ", token)
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className='verify-booking-container'>
          {this.state.verifyEmail ?
            <div className='booking-status'>Ban da xac nhan dat ve thanh cong </div> :
            <div className='booking-status'>Viec dat ve da xay ra loi</div>
          }
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyBooking);



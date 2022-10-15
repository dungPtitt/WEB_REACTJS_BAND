import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emmiter';
import './ModalBuyTicket.scss';
import { add } from 'lodash';
import { handleBookingTicket } from '../../services/tourService';

class ModalBuyTicket extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      email: '',
      tourId: '',
      date: '',
      fullName: '',
      address: '',
      phoneNumber: ''
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (JSON.stringify(this.props.tour) !== JSON.stringify(prevProps.tour)) {
      let tour = this.props.tour
      this.setState({
        tourId: tour.id,
        date: "12/12/2022",
      })
    }
  }
  handelOnchangeInput = (event, id) => {
    let data = event.target.value
    this.setState({
      [id]: data
    })
  }
  handleBuyTicket = async () => {
    //validate
    // console.log("check state: ", this.state)
    let ids = ['fullName', 'email', 'address', 'phoneNumber'];
    for (let i = 0; i < ids.length; i++) {
      if (!this.state[ids[i]]) {
        alert(`Missing input ${ids[i]}`)
        return;
      }
    }
    let res = await handleBookingTicket({
      statusId: 'S1',
      tourId: this.state.tourId,
      email: this.state.email,
      date: this.state.date,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address
    })
    console.log(res)
    if (res.errCode === 0) {
      alert("Dat ve thanh cong vui long cho email xac nhan")
    } else {
      alert("Vui long su dung email khac")
    }
  }
  toggle = () => {
    this.props.toggleModal();
  }
  render() {
    let { email, phoneNumber, address, fullName, quantity } = this.state;
    return (
      <Modal
        isOpen={this.props.isOpen} className='modal-booking'
        size='lg'
        centered
      >
        <div className='modal-booking-container'>
          <div className='booking-header'>
            <span className='left'>Thong tin dat ve</span>
            <span className='right'
              onClick={this.toggle}
            ><i className='fas fa-times'></i></span>
          </div>
          <div className='booking-body'>
            <div className='row'>
              <div className='col-6 form-group'>
                <label>Ho ten</label>
                <br></br>
                <input type='text'
                  className='form-controll'
                  placeholder='Your name'
                  onChange={(e) => this.handelOnchangeInput(e, "fullName")}
                  value={fullName}
                />
              </div>
              <div className='col-6 form-group'>
                <label>So dien thoai</label>
                <br></br>
                <input type='text'
                  className='form-controll'
                  placeholder='Your phonenumber'
                  onChange={(e) => this.handelOnchangeInput(e, "phoneNumber")}
                  value={phoneNumber}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-6 form-group'>
                <label>Email</label>
                <br></br>
                <input type='text' className='form-controll'
                  placeholder='Your email'
                  onChange={(e) => this.handelOnchangeInput(e, "email")}
                  value={email}
                />
              </div>
              <div className='col-6 form-group'>
                <lable>Tickets, 15$ per person</lable>
                <br></br>
                <input className='form-controll' type='text'
                  onChange={(e) => this.handelOnchangeInput(e, "quantity")}
                  value={quantity}
                  placeholder="How many?" />
              </div>
            </div>
            <div className='row'>

              <div className='col-12 form-group'>
                <lable>Your address</lable>
                <br></br>
                <input className='form-controll' type='text'
                  onChange={(e) => this.handelOnchangeInput(e, "address")}
                  value={address}
                  placeholder="Your address" />
              </div>
            </div>
          </div>
          <div className='booking-footer'>
            <button className='btn-booking-pay'
              onClick={() => { this.handleBuyTicket() }}
            >Dat ve</button>
            <button
              className='btn-booking-cancel'
              onClick={this.toggle}
            >Cancel</button>
          </div>
        </div>
      </Modal>
      // <Modal isOpen={this.props.isOpen} toggle={() => this.toggle()} className='modal-booking'>
      //   <ModalHeader toggle={() => this.toggle()}>
      //     Tickets
      //   </ModalHeader>
      //   <ModalBody>
      //     <div className='modal-buytiket-container'>
      //       <div className='row'>
      //         <div className='col-12'>
      //           <lable>Tickets, 15$ per person</lable>
      //           <input type='text' placeholder="How many?" />
      //         </div>
      //         <div className='col-12'>
      //           <lable>Send to</lable>
      //           <input type='text' placeholder="Enter your email" />
      //         </div>
      //       </div>
      //     </div>
      //   </ModalBody>
      //   <ModalFooter>
      //     <Button color="primary">
      //       Pay
      //     </Button>{' '}
      //     <Button color="secondary">
      //       Close
      //     </Button>
      //   </ModalFooter>
      // </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalBuyTicket);

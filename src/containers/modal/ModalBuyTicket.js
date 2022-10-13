import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emmiter';

class ModalBuyTicket extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quatity: 0,
      email: '',
    }
  }
  toggle = () => {
    this.props.toggleModal();
  }
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={() => this.toggle()} className='modal-add-user'>
        <ModalHeader toggle={() => this.toggle()}>
          Tickets
        </ModalHeader>
        <ModalBody>
          <div className='modal-buytiket-container'>
            <div className='row'>
              <div className='col-12'>
                <lable>Tickets, 15$ per person</lable>
                <input type='text' placeholder="How many?" />
              </div>
              <div className='col-12'>
                <lable>Send to</lable>
                <input type='text' placeholder="Enter your email" />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">
            Pay
          </Button>{' '}
          <Button color="secondary">
            Close
          </Button>
        </ModalFooter>
      </Modal>
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

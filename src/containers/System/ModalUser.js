import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalUser.scss';
import { emitter } from '../../utils/emmiter';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
        this.listenToEmitter();
    }

    listenToEmitter = () => {
        emitter.on('EVENT_CLEAR_MODAL', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
            })
        })
    }
    componentDidMount() {
    }
    toggle = () => {
        this.props.toggleModal();
    }
    handleOnchangeInput = (event, id) => {
        let stateCopy = this.state;
        stateCopy[id] = event.target.value;
        this.setState({
            ...stateCopy
        })
    }
    handleValidate = (data) => {
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!data[arrInput[i]]) {
                alert("Missing " + arrInput[i]);
                return false;
            }
        }
        return true;
    }
    handleAddNewUser = () => {
        if (this.handleValidate(this.state)) {
            this.props.handleCreateUser(this.state);
        }
        // console.log('check state', this.state);
    }
    render() {
        // console.log("check props", this.props)
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => this.toggle()} className='modal-add-user'>
                <ModalHeader toggle={() => this.toggle()}>
                    Create new user
                </ModalHeader>
                <ModalBody>
                    <div className='modal-user-container'>
                        <div className='modal-user-body'>

                            <div className='input-container'>
                                <label>First Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter your first name'
                                    value={this.state.firstName}
                                    onChange={(e) => { this.handleOnchangeInput(e, 'firstName') }}
                                />
                            </div>
                            <div className='input-container'>
                                <label>Last Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter your last name'
                                    value={this.state.lastName}
                                    onChange={(e) => { this.handleOnchangeInput(e, 'lastName') }}
                                />
                            </div>
                            <div className='input-container'>
                                <label>Email</label>
                                <input
                                    type='text'
                                    placeholder='Enter your email'
                                    value={this.state.email}
                                    onChange={(e) => { this.handleOnchangeInput(e, 'email') }}
                                />
                            </div>
                            <div className='input-container'>
                                <label>Password</label>
                                <input
                                    type='password'
                                    value={this.state.password}
                                    onChange={(e) => { this.handleOnchangeInput(e, 'password') }}
                                />
                            </div>
                            <div className='input-container max-input'>
                                <label>Address</label>
                                <input
                                    type='text'
                                    placeholder='Enter your address'
                                    value={this.state.address}
                                    onChange={(e) => { this.handleOnchangeInput(e, 'address') }}
                                />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary"
                        onClick={() => { this.handleAddNewUser() }}>
                        Add User
                    </Button>{' '}
                    <Button color="secondary" onClick={() => this.toggle()}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);

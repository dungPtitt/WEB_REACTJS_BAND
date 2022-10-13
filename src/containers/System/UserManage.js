import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getUsers, handleCreateUser, deleteUser } from '../../services/userService';
import './UserManage.scss';
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emmiter';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isOpenModal: false,
        }
    }
    componentDidMount() {
        this.handleGetAllUsers();
    }
    handleGetAllUsers = async () => {
        let response = await getUsers('All');
        if (response && response.errCode === 0) {
            this.setState({
                ...this.state,
                users: response.user
            })
        }
    }

    handleAddNewUser = (data) => {
        this.setState({
            isOpenModal: true,
        })
    }
    handleCreateUser = async (data) => {
        console.log("check data from child ", data)
        let response = await handleCreateUser(data);
        console.log(response);
        if (response && response.errCode != 0) {
            alert(response.errMassage);
        } else {
            this.handleGetAllUsers();
            this.setState({
                isOpenModal: false,
            })
            emitter.emit('EVENT_CLEAR_MODAL');
        }
    }
    handleDeleteUser = async (userId) => {
        console.log(userId)
        let response = await deleteUser(userId);
        console.log("check errCode and id", userId, response.errCode)
        if (response && response.errCode !== 0) {
            alert(response.errMassage);
        }
        else {
            this.handleGetAllUsers();
        }
    }
    toggleModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,
        })
    }
    render() {
        // console.log('check state', this.state)
        let arrUsers = this.state.users;
        return (
            <div className="container-users">
                <div className='title text-center'>Manage users</div>
                <div className='mx-1'>
                    <button
                        className='px-3 btn-primary btn'
                        onClick={() => { this.handleAddNewUser() }}
                        size='lg'
                    >Add new user</button>
                </div>
                <ModalUser
                    isOpen={this.state.isOpenModal}
                    toggleModal={this.toggleModal}
                    handleCreateUser={this.handleCreateUser}
                />
                <table id='table-user' className='table-users'>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                        {arrUsers && arrUsers.length &&
                            arrUsers.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button className='btn-update'><i className="fas fa-pencil-alt"></i> </button>
                                            <button onClick={() => { this.handleDeleteUser(item.id) }} className='btn-delete'><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

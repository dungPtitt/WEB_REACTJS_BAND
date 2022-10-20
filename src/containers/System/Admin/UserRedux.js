import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCode, deleteUser } from '../../../services/userService';
import { CommonUtils } from '../../../utils';
import * as actions from '../../../store/actions';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './UserRedux.scss'
import { fetchMemberStart } from '../../../store/actions';


class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            roleArr: [],
            previewImageUrl: '',
            isOpen: false,
            userId: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phonenumber: '',
            address: '',
            gender: '',
            role: '',
            image: '',
            userArr: [],
        }
    }

    async componentDidMount() {
        this.props.getGenderStart()
        this.props.getRoleStart()
        this.props.fetchUserStart('All');
        // let res = await getAllCode('gender');
        // if (res && res.data) {
        //     this.setState({
        //         genderArr: res.data
        //     })
        // }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let genders = this.props.genderRedux;
            this.setState({
                genderArr: genders,
                gender: genders && genders.length > 0 ? genders[0].key : ''
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let roles = this.props.roleRedux
            this.setState({
                roleArr: roles,
                role: roles && roles.length > 0 ? roles[0].key : ''
            })
        }
        if (prevProps.userRedux !== this.props.userRedux) {
            let users = this.props.userRedux;
            this.setState({
                userArr: users
            })
        }
    }
    handleOnchangeImage = async (e) => {
        let file = e.target.files[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file)
            let base64 = await CommonUtils.getBase64(file);
            // console.log(objectUrl)
            this.setState({
                previewImageUrl: objectUrl,
                image: base64
            })
        }

    }
    openPreviewImage = () => {
        if (this.state.previewImageUrl) {
            this.setState({
                isOpen: true
            })
        }
    }

    handleOnchangeInput = (e, typeInput) => {
        this.setState({
            [typeInput]: e.target.value
        })
    }
    handleEditUer = async (user) => {
        console.log("check user: ", user)
        this.setState({
            userId: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            phonenumber: user.phonenumber,
            address: user.password,
            // gender: user.gender,
            // roleId: user.roleId,
            // image: user.image,
        })
    }
    handleDeleteUser = async (userId) => {
        let result = window.confirm('Are you sure you want to delete?');
        if (result) {
            console.log("check id toud", userId)
            let res = await deleteUser(userId);
            // console.log("check errCode and id", userId, response.errCode)
            if (res && res.errCode == 0) {
                this.props.fetchUserStart('All');
                alert(res.message);
            }
            else {
                alert(res.errMessage);
            }
        }
    }
    handleValidate = () => {
        let inputs = ['email', 'password', 'firstName', 'lastName', 'phonenumber', 'address'];
        for (let i = 0; i < inputs.length; i++) {
            if (!this.state[inputs[i]]) {
                alert('Missing input ' + inputs[i])
                return false;
            }
        }
        return true;
    }
    handleSave = () => {

        if (this.handleValidate()) {
            console.log('check state from user redux: ', this.state)
            let dataInput = {
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phonenumber: this.state.phonenumber,
                address: this.state.address,
                gender: this.state.gender,
                role: this.state.role,
                image: this.state.image

            }
            // console.log("check data", dataInput)
            let res = this.props.createUserStart(dataInput);
            if (res) {
                if (res.errCode == 0) {
                    alert("Create user success")
                } else {
                    alert(res.errMessage);
                }
            }
        }
        // handleUpdateUser = (user) => {
        //     let imageBase64 = '';
        //     if (user.image) {
        //         imageBase64 = new Buffer(user.image, 'base64').toString('binary');
        //     }
        //     this.setState({
        //         previewImageUrl: imageBase64
        //     })
        //     console.log("check image: ", imageBase64);
        // }
    }
    render() {
        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let { userArr, email, password, firstName, lastName, phonenumber, address, gender, role, image } = this.state;
        console.log("check users: ", userArr);
        return (
            <div className='user-redux-container'>
                <div className='col-12'>
                    <div className='title text-center'>User Redux</div>
                </div>
                <div className='user-redux-body'>
                    <div className='container'>

                        <div className='row'>
                            <div className='col-12 my-3'>Them moi nguoi dung</div>
                            <div className='col-3'>
                                <label>Email</label>
                                <input className='form-control'
                                    type='text'
                                    value={email}
                                    onChange={(e) => this.handleOnchangeInput(e, 'email')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Password</label>
                                <input className='form-control'
                                    value={password}
                                    onChange={(e) => this.handleOnchangeInput(e, 'password')}
                                    type='password' />
                            </div>
                            <div className='col-3'>
                                <label>first Name</label>
                                <input className='form-control'
                                    value={firstName}
                                    onChange={(e) => this.handleOnchangeInput(e, 'firstName')}
                                    type='text' />
                            </div>
                            <div className='col-3'>
                                <label>last Name</label>
                                <input className='form-control'
                                    value={lastName}
                                    onChange={(e) => this.handleOnchangeInput(e, 'lastName')}
                                    type='text' />
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-3'>
                                <label>Phone Number</label>
                                <input className='form-control'
                                    value={phonenumber}
                                    onChange={(e) => this.handleOnchangeInput(e, 'phonenumber')}
                                    type='text' />
                            </div>
                            <div className='col-9'>
                                <label>Address</label>
                                <input className='form-control'
                                    value={address}
                                    onChange={(e) => this.handleOnchangeInput(e, 'address')}
                                    type='text' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-3'>
                                <label>Gender</label>
                                <select className='form-control'
                                    onChange={(e) => { this.handleOnchangeInput(e, 'gender') }}
                                >
                                    {genders && genders.length > 0 &&
                                        genders.map((gender, index) => {
                                            return <option
                                                key={index}
                                                value={gender.key}
                                            >{gender.valueVI}</option>
                                        })
                                    }
                                </select>
                            </div>
                            {/* <div className='col-3'>
                                <label>Posision</label>
                                <select className='form-control'>
                                    <option>2</option>
                                </select>
                            </div> */}
                            <div className='col-3'>
                                <label>Role</label>
                                <select className='form-control'
                                    onChange={(e) => { this.handleOnchangeInput(e, 'role') }}
                                >
                                    {roles && roles.length > 0 &&
                                        roles.map((role, index) => {
                                            return <option
                                                key={index}
                                                value={role.key}
                                            >{role.valueVI}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-3'>
                                <label>Avatar</label>
                                <div className='preview-image-container'>
                                    <input id="previewImg" type='file' hidden
                                        onChange={(e) => { this.handleOnchangeImage(e) }} />
                                    <label className='lable-img' htmlFor='previewImg'

                                    >Tai anh</label>
                                    <div className='preview-image-content'
                                        style={{ backgroundImage: `url(${this.state.previewImageUrl})` }}
                                        onClick={() => { this.openPreviewImage() }}
                                    >
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <button
                                    className='btn-add primary mt-3'
                                    onClick={() => this.handleSave()}
                                >Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.isOpen &&
                    <Lightbox
                        mainSrc={this.state.previewImageUrl}

                        onCloseRequest={() => this.setState({ isOpen: false })}

                    />
                }
                <table id='table-user' className='table-users'>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                        {userArr && userArr.length &&
                            userArr.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button onClick={() => { this.handleEditUer(item) }} className='btn-update'><i className="fas fa-pencil-alt"></i> </button>
                                            <button onClick={() => { this.handleDeleteUser(item.id) }} className='btn-delete'><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div >
            // <div className="text-center" >User Redux</div>
        )
    }

}

const mapStateToProps = state => {
    return {
        genderRedux: state.admin.genders,
        roleRedux: state.admin.roles,
        userRedux: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createUserStart: (data) => dispatch(actions.createUserStart(data)),
        fetchUserStart: (id) => dispatch(actions.fetchUserStart(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

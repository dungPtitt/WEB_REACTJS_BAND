import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { CommonUtils, CRUD_ACTION } from '../../../utils';
import * as actions from '../../../store/actions';
import { deleteTour } from '../../../services/userService';
// import * as actions from '../../../store/actions';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './ManageTour.scss'
import DatePicker from '../../../components/Input/DatePicker';
import FormattedDate from '../../../components/Formating/FormattedDate';
import moment from 'moment';

class ManageTour extends Component {

  constructor(props) {
    super(props);
    this.state = {
      previewImageUrl: '',
      isOpen: false,
      name: '',
      address: '',
      des: '',
      image: '',
      currentDate: new Date(),
      quantityMax: 50,
      tourArr: [],
      action: '',
      id: '',
    }
  }
  handleGetAllTour = () => {
    let res = this.props.fetchAllTourStart();
    if (res && res.errCode == 0) {
      console.log("check tour:", res)
      // this.setState({
      //   Alltour: res.tours
      // })
    }
  }
  async componentDidMount() {
    this.handleGetAllTour();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.tourRedux !== this.props.tourRedux) {
      let tours = this.props.tourRedux;
      this.setState({
        tourArr: tours,
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
  handleValidate = () => {
    let inputs = ['name', 'address', 'des', 'quantityMax', 'currentDate', 'image'];
    for (let i = 0; i < inputs.length; i++) {
      if (!this.state[inputs[i]]) {
        alert('Missing input ' + inputs[i])
        return false;
      }
    }
    return true;
  }
  handleSave = async () => {

    if (this.handleValidate()) {
      let res;
      let action = this.state.action;
      if (action === CRUD_ACTION.EDIT) {
        let tourEditInfo = {
          id: this.state.id,
          name: this.state.name,
          address: this.state.address,
          des: this.state.des,
        }
        console.log("check tour info: ", tourEditInfo)
        res = await this.props.editTourStart(tourEditInfo);
        if (res && +res.errCode !== 0) {
          alert("Err" + res.errMessage);
        } else {
          alert("Update tour success");
          this.handleGetAllTour();
        }
        return;
      }
      // console.log('check image', this.state.image)
      let dataInput = {
        name: this.state.name,
        address: this.state.address,
        des: this.state.des,
        image: this.state.image,
        date: moment(this.state.currentDate).format('DD/MM/YYYY'),
        quantityMax: this.state.quantityMax,
        quantityCurrent: 0
      }
      // console.log("check data", moment(this.state.currentDate).format('DD/MM/YYYY'))
      res = await this.props.createTourStart(dataInput);
      if (res && +res.errCode != 0) {
        alert("Err" + res.errMessage);
      } else {
        alert(res.message);
        this.handleGetAllTour();
      }

      console.log("check response: ", res)
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
  handleOnchangeDatePicker = (date) => {
    this.setState({
      currentDate: date[0]
    })
  }
  handleUpdateTour = (tour) => {
    console.log("check tour: ", tour)
    this.setState({
      name: tour.name,
      address: tour.address,
      des: tour.des,
      image: tour.image,
      date: moment(tour.currentDate).format('DD/MM/YYYY'),
      quantityMax: tour.quantityMax,
      action: CRUD_ACTION.EDIT,
      id: tour.id
    })
  }
  handleDeleteTour = async (tourId) => {
    // console.log(userId)
    let result = window.confirm('Are you sure you want to delete?');
    if (result) {
      console.log("check id toud", tourId)
      let res = await deleteTour(tourId);
      // console.log("check errCode and id", tourId, response.errCode)
      if (res && res.errCode == 0) {
        this.handleGetAllTour();
        alert(res.message);
      }
      else {
        alert(res.errMessage);
      }
    }

  }
  render() {
    let { name, address, des, image, quantityMax, date, tourArr, action } = this.state;
    return (
      <div className='user-redux-container'>
        <div className='col-12'>
          <div className='title text-center'>ManageTour</div>
        </div>
        <div className='user-redux-body'>
          <div className='container'>

            <div className='row'>
              <div className='col-12 my-3'>Them moi tour</div>
              <div className='col-6'>
                <label>Name</label>
                <input className='form-control'
                  type='text'
                  value={name}
                  onChange={(e) => this.handleOnchangeInput(e, 'name')}
                />
              </div>
              <div className='col-6'>
                <label>Address</label>
                <input className='form-control'
                  value={address}
                  onChange={(e) => this.handleOnchangeInput(e, 'address')}
                  type='text' />
              </div>

            </div>
            <div className='row'>
              <div className='col-12'>
                <label>Description</label>
                <input className='form-control'
                  value={des}
                  onChange={(e) => this.handleOnchangeInput(e, 'des')}
                  type='text' />
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-4'>
                <label>Chọn ngày</label>
                <br></br>
                <DatePicker
                  selected={this.state.currentDate}
                  onChange={this.handleOnchangeDatePicker}
                  minDate={new Date()}
                  value={this.state.currentDate}
                ></DatePicker>
              </div>
              <div className='col-4 form-group'>
                <label>So luong ve</label><br></br>
                <input type='text' className='form-controll'
                  value={quantityMax}
                  onChange={(e) => this.handleOnchangeInput(e, 'quantityMax')}
                />
              </div>
              <div className='col-4'>
                <label>Image tour</label>
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
                  className={action === CRUD_ACTION.EDIT ? 'btn btn-warning mt-3' : 'btn btn-primary mt-3'}
                  onClick={() => this.handleSave()}
                >{action === CRUD_ACTION.EDIT ? 'Update Tour' : 'Create Tour'}</button>
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
              <th>Ten tour</th>
              <th>Dia chi</th>
              <th>Ngay</th>
              <th>Actions</th>
            </tr>
            {tourArr && tourArr.length &&
              tourArr.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.date}</td>
                    <td>
                      <button onClick={() => { this.handleUpdateTour(item) }} className='btn-update'><i className="fas fa-pencil-alt"></i> </button>
                      <button onClick={() => { this.handleDeleteTour(item.id) }} className='btn-delete'><i className="fas fa-trash"></i></button>
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
    tourRedux: state.admin.Alltour,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getGenderStart: () => dispatch(actions.fetchGenderStart()),
    // getRoleStart: () => dispatch(actions.fetchRoleStart()),
    // createUserStart: (data) => dispatch(actions.createUserStart(data))
    createTourStart: (data) => dispatch(actions.createTourStart(data)),
    fetchAllTourStart: () => dispatch(actions.fetchAllTourStart()),
    editTourStart: (data) => dispatch(actions.editTourStart(data))
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(ManageTour);

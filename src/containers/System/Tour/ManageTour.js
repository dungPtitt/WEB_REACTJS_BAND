import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { CommonUtils } from '../../../utils';
import * as actions from '../../../store/actions';
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
      currentDate: '',
    }
  }

  async componentDidMount() {
    // this.props.getTourStart()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // if (prevProps.genderRedux !== this.props.genderRedux) {
    //   let genders = this.props.genderRedux;
    //   this.setState({
    //     genderArr: genders,
    //     gender: genders && genders.length > 0 ? genders[0].key : ''
    //   })
    // }
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
    let inputs = ['name', 'address', 'des'];
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
      // console.log('check image', this.state.image)
      let dataInput = {
        name: this.state.name,
        address: this.state.address,
        des: this.state.des,
        image: this.state.image,
        // date: this.state.currentDate
      }
      console.log("check data", moment(this.state.currentDate).format('DD/MM/YYYY'))
      //this.props.createTourStart(dataInput);
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
  render() {
    let { name, address, des, image } = this.state;
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
              <div className='col-8'>
                <label>Chọn ngày</label>
                <DatePicker
                  onChange={this.handleOnchangeDatePicker}
                  minDate={new Date()}
                  value={this.state.currentDate}
                ></DatePicker>
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
                  className='btn-add primary mt-3'
                  onClick={() => this.handleSave()}
                >Create Tour</button>
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
      </div >
      // <div className="text-center" >User Redux</div>
    )
  }

}

const mapStateToProps = state => {
  return {
    // genderRedux: state.admin.genders,
    // roleRedux: state.admin.roles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getGenderStart: () => dispatch(actions.fetchGenderStart()),
    // getRoleStart: () => dispatch(actions.fetchRoleStart()),
    // createUserStart: (data) => dispatch(actions.createUserStart(data))
    createTourStart: (data) => dispatch(actions.createTourStart(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageTour);

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Tour.scss';
import ModalBuyTicket from '../../modal/ModalBuyTicket';
import * as actions from '../../../store/actions';
import { times } from 'lodash';

class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      tourArr: [],
      tour: {},
    }
    // this.listenToEmitter();
  }
  componentDidMount() {
    this.props.fetchTourStart();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.toursRedux !== this.props.toursRedux) {
      this.setState({
        tourArr: this.props.toursRedux
      })
    }
  }
  handleBuyTicket = (tourClick) => {
    this.setState({
      isOpen: true,
      tour: tourClick
    })
  }
  toggleModal = () => {
    this.setState({
      isOpen: false
    })
  }
  render() {
    let { tourArr } = this.state;
    // console.log("check tour from redux: ", tourArr);
    return (
      <div className="section-tour">
        <div className="section-content">
          <h2 className="section-heading text-white">Tour Datas</h2>
          <p className="section-sub text-white">Remember to book your tickets!</p>
          <div className="list-ticket">
            <li className="ticket-iteam">
              September
              <span className="status">Sold out</span>
            </li>
            <li className="ticket-iteam">
              October
              <span className="status">Sold out</span>
            </li>
            <li className="ticket-iteam">
              November
              <span className="quantity">3</span>
            </li>
          </div>
          <div className="places-list">
            {tourArr && tourArr.length &&
              tourArr.map((item, index) => {
                let imageBase64 = '';
                if (item.image) {
                  imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                }
                return (
                  <div key={index} className="place-item">

                    <div className="place-body">
                      <h3 className="place-heading">{item.name}</h3>
                      <div className="place-image"
                        style={{ backgroundImage: `url(${imageBase64})` }}
                      ></div>
                      <p className="place-date">Fri 12 Nov 2022</p>
                      <p className="place-desc">{item.des}</p>
                      <button
                        className="place-buy-btn js-buy-btn"
                        onClick={() => { this.handleBuyTicket(item) }}
                      >Buy Tickets</button>
                    </div>
                  </div>
                )
              })
            }
            {/* <div className="place-item">
              <img src="./assets/image/places/newyork.jpg" alt="tour1" />
              <div className="place-body">
                <h3 className="place-heading">New York</h3>
                <p className="place-date">Fri 12 Nov 2022</p>
                <p className="place-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button
                  className="place-buy-btn js-buy-btn"
                  onClick={() => { this.handleBuyTicket() }}
                >Buy Tickets</button>
              </div>
            </div> */}
            <div className="clear"></div>
          </div>
        </div>
        <ModalBuyTicket
          isOpen={this.state.isOpen}
          toggleModal={this.toggleModal}
          tour={this.state.tour}
        />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    toursRedux: state.admin.tours
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTourStart: () => { dispatch(actions.fetchTourStart()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tour);
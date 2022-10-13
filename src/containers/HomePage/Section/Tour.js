import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Tour.scss';
import ModalBuyTicket from '../../modal/ModalBuyTicket';

class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
    // this.listenToEmitter();
  }
  componentDidMount() {

  }
  handleBuyTicket = () => {
    console.log("hello from modal buy tiket")
    this.setState({
      isOpen: true
    })
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div className="section-tour">
        <div className="section-content">
          <h2 className="section-heading text-white">Tour Datas</h2>
          <p className="section-sub text-white">Remember to book your tickets!</p>
          <ul className="list-ticket">
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
          </ul>
          <div className="places-list">
            <div className="place-item">
              <img src="./assets/image/places/newyork.jpg" alt="tour1" />
              <div className="place-body">
                <h3 className="place-heading">New York</h3>
                <p className="place-date">Fri 12 Nov 2022</p>
                <p className="place-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="place-buy-btn js-buy-btn">Buy Tickets</button>
              </div>
            </div>
            <div className="place-item">
              <img src="./assets/image/places/newyork.jpg" alt="tour1" />
              <div className="place-body">
                <h3 className="place-heading">New York</h3>
                <p className="place-date">Fri 12 Nov 2022</p>
                <p className="place-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="place-buy-btn js-buy-btn">Buy Tickets</button>
              </div>
            </div>
            <div className="place-item">
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
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <ModalBuyTicket
          isOpen={this.state.isOpen}
          toggleModal={this.toggleModal}
        />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tour);
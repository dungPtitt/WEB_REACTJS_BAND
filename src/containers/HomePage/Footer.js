import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="map">
          <img src="./assets/image/map.jpg" alt="Map" />
        </div>
        <div className="social-list">
          <a href=""><i className="ti-facebook"></i></a>
          <a href=""><i className="ti-instagram"></i></a>
          <a href=""><i className="ti-youtube"></i></a>
          <a href=""><i className="ti-pinterest"></i></a>
          <a href=""><i className="ti-twitter"></i></a>
          <a href=""><i className="ti-linkedin"></i></a>
        </div>
        <div className="author mt-16">
          <p>Project Web the band</p>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);



import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.scss';
import { FormattedMessage } from 'react-intl';

class Home extends Component {

  render() {
    return (
      <div className="header-page-container">
        <div className="header-nav">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="#">Band</Link></li>
          <li><Link to="#">Tour</Link></li>
          <li><Link to="#">Contact</Link></li>
          <li>
            <a href="#">
              More
              <i className="fas fa-sort-down"></i>
            </a>
            <div className="subnav">
              <li><a href="#">Merchandise</a></li>
              <li><a href="#">Extra</a></li>
              <li><a href="#">Media</a></li>
            </div>
          </li>
        </div>
        <div className="search">
          <i className="fas fa-search search-bottom"></i>
        </div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
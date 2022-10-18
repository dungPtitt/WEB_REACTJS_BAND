import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomePage.scss';
import Header from './Header';
import SliderIntro from './Section/SliderIntro';
import Band from './Section/Band';
import Tour from './Section/Tour';
import Footer from './Footer';
import Contact from './Section/Contact';

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <SliderIntro />
        <Band />
        <Tour />
        <Contact />
        <Footer />
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

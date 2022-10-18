import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    // this.listenToEmitter();
  }

  render() {
    return (
      <div id="contact" className="section-contact">
        <h2 className="section-heading">Contact</h2>
        <p className="section-sub ">We love music</p>
        <div className="row contact-content">
          <div className="col col-hafl contact-info">
            <p><i className="ti-location-pin"></i>Chicago, US</p>
            <p><i className="ti-mobile"></i>Phone: 0355961899</p>
            <p><i className="ti-email"></i>Email: lvdfullstac</p>
          </div>
          <div className="col col-hafl contact-form">
            <form action="">
              <div className="row">
                <div className="col col-hafl">
                  <input type="text" name="" id="" placeholder="Name" required className="form-control" />
                </div>
                <div className="col col-hafl">
                  <input type="email" name="" id="" placeholder="Email" required className="form-control" />
                </div>
              </div>
              <div className="row mt-8">
                <div className="col col-full">
                  <input type="text" name="" id="" placeholder="Message" required className="form-control" />
                </div>
              </div>
              <button type="submit" className="form-submit mt-16">Send</button>
            </form>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

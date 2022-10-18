import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SliderIntro.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as actions from '../../../store/actions';

let settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: false,
  // arrows: false,
  // dots: false,
  // pauseOnHover: false,
  // infinite: true,
  // speed: 3000,
  // autoplay: true,
  // fade: true,
  // slidesToShow: 1,
  // slidesToScroll: 1,
}
class SliderIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tourArr: [],
    }
    // this.listenToEmitter();
  }
  componentDidMount() {
    this.props.fetchMemorableTourStart(6);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.toursRedux !== this.props.toursRedux) {
      this.setState({
        tourArr: this.props.toursRedux
      })
    }
  }
  render() {
    let { tourArr } = this.state
    return (
      <div className='section-slider-intro'>
        <div className='section-container'>
          <div className='section-header'></div>
          <div className='section-body'>
            <Slider {...settings}>
              {tourArr && tourArr.length > 0 &&
                tourArr.map((item, index) => {
                  let imageBase64 = '';
                  if (item.image) {
                    imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                  }
                  return (
                    <div className='section-content' key={index}>
                      <div className="bg-image"
                        style={{ backgroundImage: `url(${imageBase64})` }}
                      ></div>
                      <div className='title'>{item.name}</div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    toursRedux: state.admin.memorableTours
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMemorableTourStart: (limitInput) => { dispatch(actions.fetchMemorableTourStart(limitInput)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderIntro);

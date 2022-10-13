import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SliderIntro.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import place from '../../../assets/band/band1.jpg'

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2
}
class SliderIntro extends Component {

  render() {
    return (
      <div className='section-slider-intro'>
        <div className='section-container'>
          <div className='section-header'></div>
          <div className='section-body'>
            <Slider {...settings}>
              <div className='section-content'>
                <div className='bg-image'></div>
                <div>Dia diem luu dien 1</div>
              </div>
              <div className='section-content'>
                <div className='bg-image'></div>
                <div>Dia diem luu dien 2</div>
              </div>
              <div className='section-content'>
                <div className='bg-image'></div>
                <div>Dia diem luu dien 3</div>
              </div>
              <div className='section-content'>
                <div className='bg-image'></div>
                <div>Dia diem luu dien 4</div>
              </div>
              <div className='section-content'>
                <div className='bg-image'></div>
                <div>Dia diem luu dien 5</div>
              </div>
              <div className='section-content'>
                <div className='bg-image'></div>
                <div>Dia diem luu dien 6</div>
              </div>
            </Slider>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SliderIntro);

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import './Band.scss';
import { first, map } from 'lodash';


class Band extends Component {
  constructor(props) {
    super(props)
    this.state = {
      memberArr: [],
    }
  }
  componentDidMount() {
    this.props.fetchMemberStart()
    // let res = await getAllCode('gender');
    // if (res && res.data) {
    //     this.setState({
    //         genderArr: res.data
    //     })
    // }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.memberRedux !== this.props.memberRedux) {
      let members = this.props.memberRedux;
      this.setState({
        memberArr: members,
      })
    }
  }
  render() {
    let { memberArr } = this.state;
    // console.log("check data from react: ", memberArr)
    return (
      <div className='section-band'>
        <div className="section-content">
          <h2 className="section-heading">The Band</h2>
          <p className="section-sub">We love music</p>
          <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt beatae quidem error repellendus autem ipsa. Excepturi, provident, ipsa ducimus ex deserunt ut eligendi doloribus amet ipsum repellat, magni mollitia sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt beatae quidem error repellendus autem ipsa. Excepturi, provident, ipsa ducimus ex deserunt ut eligendi doloribus amet ipsum repellat, magni mollitia sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt beatae quidem error repellendus autem ipsa. Excepturi, provident, ipsa ducimus ex deserunt ut eligendi doloribus amet ipsum repellat, magni mollitia sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt beatae quidem error repellendus autem ipsa. Excepturi, provident, ipsa ducimus ex deserunt ut eligendi doloribus amet ipsum repellat, magni mollitia sunt!</p>
          <div className="numbers-list">
            {/* <div className="number-iteam">
              <div className="number-name">Name</div>
              <div className="avatar"></div>
            </div> */}
            {memberArr && memberArr.length > 0 &&
              memberArr.map((item, index) => {
                let imageBase64 = '';
                if (item.image) {
                  imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                }
                return (<div className="number-iteam" key={index}>
                  <div className="number-name">{item.lastName} {item.firstName}</div>
                  <div className="avatar"
                    style={{ backgroundImage: `url(${imageBase64})` }}
                  ></div>

                </div>)
              })
            }
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    memberRedux: state.admin.members,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMemberStart: () => dispatch(actions.fetchMemberStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Band);
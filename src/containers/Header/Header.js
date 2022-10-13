import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu, memberMenu } from './menuApp';
import './Header.scss';
import { languages, ROLE } from '../../utils';
import appReducer from '../../store/reducers/appReducer';
import _ from 'lodash';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: []
        }
    }
    componentDidMount() {
        // console.log('check props: ', this.props.userInfo)
        // console.log("check menu: ", adminMenu)
        let user = this.props.userInfo;
        console.log("check userInfo: ", user)
        if (user) {
            let roleId = user.roleId;
            console.log('check roleId: ', roleId)
            if (roleId === ROLE.BAND) {
                this.setState({
                    menu: memberMenu
                })
            }
            else if (roleId === ROLE.ADMIN) {
                this.setState({
                    menu: adminMenu
                })
            }

        }
    }

    handleChangeLanguage = (language) => {
        // alert(language)
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        const { processLogout, language } = this.props;
        // console.log("check menu 2: ", this.state.menu)
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={this.state.menu} />
                </div>
                <div className='languages'>
                    <span className={language == languages.VI ? 'language-vi active' : 'language-vi'}
                        onClick={() => { this.handleChangeLanguage(languages.VI) }}
                    >VN</span>
                    <span className={language == languages.EN ? 'language-en active' : 'language-en'}
                        onClick={() => { this.handleChangeLanguage(languages.EN) }}>EN</span>
                    <div title='log out' className="btn btn-logout" onClick={processLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
                {/* nút logout */}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

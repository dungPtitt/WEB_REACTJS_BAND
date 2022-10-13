import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header/Header';
import UserManage from '../containers/System/UserManage';
import ProductManage from '../containers/System/Admin/UserRedux';
import RegisterPackageGroupOrAcc from '../containers/System/RegisterPackageGroupOrAcc';
// import UserRedux from '../containers/System/Admin/UserRedux';
import UserRedux from '../containers/System/Admin/UserRedux';
import ManageMember from '../containers/System/Admin/ManageMember';
import ManageTour from '../containers/System/Tour/ManageTour';

class System extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <React.Fragment>
                {isLoggedIn && <Header />}
                <div className="system-container">

                    <div className="system-list">
                        <Switch>
                            <Route path="/system/manage-member" component={ManageMember} />
                            <Route path="/system/user-manage" component={UserManage} />
                            <Route path="/tour/manage-tour" component={ManageTour} />
                            <Route path="/system/user-crud-redux" component={UserRedux} />
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);

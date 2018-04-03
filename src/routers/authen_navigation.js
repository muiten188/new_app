import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Platform, BackHandler, ToastAndroid } from 'react-native';
import { Router, Scene,Stack } from 'react-native-router-flux';
import Login from '../authen/containers/Login';
import Register from '../authen/containers/Register';

class AuthenNavigation extends React.Component {
    //Life cycle component
    constructor(props) {
        super(props);
        this._handleBackAction = this.handleBackAction.bind(this);
    }

    componentDidMount() {
        if (Platform.OS == "android") {
            BackHandler.addEventListener('backPress', this._handleBackAction);
        }
    }

    componentWillUnmount() {
        if (Platform.OS == "android") {
            BackHandler.removeEventListener('backPress', this._handleBackAction);
        }
    }
    //component function
    handleBackAction() {
        if (Platform.OS == "android") {
            ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        }
    }

    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="login"
                        component={Login}
                        title="Login"
                        initial={true}
                    />
                    <Scene
                        key="register"
                        component={Register}
                        title="Register"
                    />
                </Stack>
            </Router>
        );
    }
}
function mapStateToProps(state, props) {
    return {
        //authenNavigationReducer: state.authenNavigationReducer,
    }
};
function mapToDispatch(dispatch) {
    return {
        ///authenNavigationAction: bindActionCreators(authenNavigationAction, dispatch),
    }
}

export default connect(mapStateToProps, mapToDispatch)(AuthenNavigation);
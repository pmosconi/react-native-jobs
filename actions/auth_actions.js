import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
    FACEBOOK_LOGIN_PENDING,
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAILURE,
    LOGOUT_SUCCESS
} from './types';

// FACEBOOK LOGIN
export const facebook_login_pending = () => {
    return { type: FACEBOOK_LOGIN_PENDING };
};

export const facebook_login_success = token => {
    return { 
        type: FACEBOOK_LOGIN_SUCCESS,
        payload: token
     };
};

export const facebook_login_failure = err => {
    return { 
        type: FACEBOOK_LOGIN_FAILURE,
        payload: err
     };
};

export const facebook_login = () => async dispatch => {
    dispatch(facebook_login_pending());
    try {
        let token = await AsyncStorage.getItem('fb_token');
        if (token) {
            dispatch(facebook_login_success(token));
        } else {
            doFacebookLogin(dispatch);
        }
    } catch (err) {
        dispatch(facebook_login_failure(err));
    }
}

// CHECK FB TOKEN IN STORAGE
export const check_token = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');
    token ? dispatch(facebook_login_success(token)) : dispatch(facebook_login_failure('No Token'));
}

// LOGOUT
export const logout_success = () => {
    return { type: LOGOUT_SUCCESS };
};

export const logout = () => async dispatch => {
    await AsyncStorage.removeItem('fb_token');
    dispatch(logout_success());
}

// PRIVATE METHODS
const doFacebookLogin = async dispatch => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync('1963291010597310', {
        permissions: ['public_profile']
    });
    if (type === 'cancel') {
        return dispatch(facebook_login_failure('Authentication Failed!'));
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch(facebook_login_success(token));
};
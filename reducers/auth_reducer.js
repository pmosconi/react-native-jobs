import { 
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAILURE,
    LOGOUT_SUCCESS,
 } from '../actions/types';

const authInitialState = { token: null };

const authReducer = (state = authInitialState, action) => {
    switch (action.type) {
        case FACEBOOK_LOGIN_SUCCESS:
            return { token: action.payload };

        case FACEBOOK_LOGIN_FAILURE:
            return { token: null };

        case LOGOUT_SUCCESS:
            return { token: null };

        default:
            return state;
    }
};

export default authReducer;
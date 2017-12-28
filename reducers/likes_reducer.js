import { PERSIST_REHYDRATE } from 'redux-persist/lib/constants';

import { 
    LIKE_JOB,
    CLEAR_LIKED_JOBS
 } from '../actions/types';

const likesInitialState = [];

const likesReducer = (state = likesInitialState, action) => {
    switch (action.type) {
        case PERSIST_REHYDRATE:
            return action.payload.likedJobs || likesInitialState;

        case LIKE_JOB:
            return addUniq(state, action.payload, 'jobkey');

        case CLEAR_LIKED_JOBS:
            return likesInitialState;

        default:
            return state;
    }
};

export default likesReducer;

const addUniq = (state, obj, prop) => {
    const found = state.find(s => s[prop] === obj[prop]);
    if (found) return state;
    else {
        const newState = Array.from(state);
        newState.unshift(obj);
        return newState;
    }
};
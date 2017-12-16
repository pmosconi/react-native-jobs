import { 
    LIKE_JOB
 } from '../actions/types';

const likesInitialState = [];

const likesReducer = (state = likesInitialState, action) => {
    switch (action.type) {
        case LIKE_JOB:
            return addUniq(state, action.payload, 'jobkey');

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
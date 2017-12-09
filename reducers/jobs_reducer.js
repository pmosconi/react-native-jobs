import { 
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE
 } from '../actions/types';

const jobsInitialState = { results: [] };

const jobsReducer = (state = jobsInitialState, action) => {
    switch (action.type) {
        case FETCH_JOBS_SUCCESS:
            return { results: action.payload };

        case FETCH_JOBS_FAILURE:
            return jobsInitialState;

        default:
            return state;
    }
};

export default jobsReducer;
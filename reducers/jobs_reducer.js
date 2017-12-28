import { 
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE,
    FETCH_JOBS_PENDING
 } from '../actions/types';

const jobsInitialState = { results: [], loading: false };

const jobsReducer = (state = jobsInitialState, action) => {
    switch (action.type) {
        case FETCH_JOBS_SUCCESS:
            return { results: action.payload.jobs, loading: false };

        case FETCH_JOBS_FAILURE:
            return jobsInitialState;

        case FETCH_JOBS_PENDING:
            return { results: [], loading: true };

        default:
            return state;
    }
};

export default jobsReducer;
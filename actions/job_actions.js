import axios from 'axios';
import reverseGeocode from '../utils/reverse-geocode';
import qs from 'qs';

import {
    FETCH_JOBS_PENDING,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE
} from './types';

export const fetchJobsPending =  () => {
    return { type: FETCH_JOBS_PENDING };
};

export const fetchJobsSuccess = (jobs) => {
    return { 
        type: FETCH_JOBS_SUCCESS,
        payload: jobs
    };
};

export const fetchJobsFailure = (err) => {
    return { 
        type: FETCH_JOBS_FAILURE,
        payload: err
     };
};

// fetch jobs action for container
export const fetchJobs = (region, callback) => async dispatch => {
    dispatch(fetchJobsPending());
    try {
        const jobs = await _fetchJobs(region);
        dispatch(fetchJobsSuccess(jobs));
        callback();
    }
    catch (err) {
        console.log(err);
        dispatch(fetchJobsFailure(err));
    }
};

// PRIVATE FUNCTIONS

const INDEED_URL = 'http://api.indeed.com/ads/apisearch';

const JOB_QUERY_PARAMS = {
    publisher: '4201738803816157',
    v: '2',
    format: 'json',
    latlong: 1,
    radius: 10,
    q: 'javascript'
}

// Indeed API
const _fetchJobs = async (region) => {
    const { latitude, longitude } = region;
    const zipcode = await reverseGeocode({ latitude, longitude });
    const { data } = await axios.get(`${INDEED_URL}?${qs.stringify({...JOB_QUERY_PARAMS, l: zipcode})}`);
    return { jobs: data.results };
};
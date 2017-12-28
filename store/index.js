import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
//import logger from 'redux-logger';

import reducers from '../reducers';

const config = {
    key: 'root',
    storage,
    whitelist: ['likedJobs'],
    //debug: true
};

const reducer = persistReducer(config, reducers);

export default (initialState = {}) => {
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(thunk /*, logger*/),
    );
    const persistor = persistStore(store);
    return { persistor, store };
};

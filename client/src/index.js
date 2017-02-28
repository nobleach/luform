import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import routes from './routes';
import reducers from './reducers/index';
import { AUTH_USER } from './actions/types';
import cookie from 'react-cookie';

// Import stylesheets like this, if you choose: import './public/stylesheets/base.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store = createStoreWithMiddleware(reducers);
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxThunk)
));
const token = cookie.load('token');
if (token) {
    // Update application state. User has token and is probably authenticated
    store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.querySelector('.wrapper'));

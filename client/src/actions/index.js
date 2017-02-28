import axios from 'axios';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import { AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER,
    DASHBOARD_LOAD
} from './types';

    const API_URL = 'http://localhost:4000/api';
    const CLIENT_ROOT_URL = 'http://localhost:8080';

    export function errorHandler(dispatch, error, type) {
        let errorMessage = '';

        if(error && error.data.error) {
            errorMessage = error.data.error;
        } else if(error && error.data) {
            errorMessage = error.data;
        } else {
            errorMessage = error;
        }

        if(error.status === 401) {
            dispatch({
                type: type,
                payload: 'You are not authorized to do this. Please login and try again.'
            });
            logoutUser();
        } else {
            dispatch({
                type: type,
                payload: errorMessage
            });
        }
    }

    export function loginUser({ email, password }) {
        return function(dispatch) {
            axios.post(`${API_URL}/auth/login`, { email, password })
                .then(response => {
                    let userId = response.data.user.id;
                    cookie.save('token', response.data.token, { path: '/' });
                    dispatch({ type: AUTH_USER });
                    window.location.href = CLIENT_ROOT_URL + `/dashboard/${userId}`;
                })
                .catch((error) => {
                    errorHandler(dispatch, error.response, AUTH_ERROR)
                });
        }
    }

    export function registerUser({ email, firstName, lastName, password }) {
        return function(dispatch) {
            axios.post(`${API_URL}/auth/register`, { email, firstName, lastName, password })
                .then(response => {
                    cookie.save('token', response.data.token, { path: '/' });
                    dispatch({ type: AUTH_USER });
                    console.log(response.data.user);
                    const userId = response.data.user.id;
                    if (response.data.user !== 'pilgrim') {
                        window.location.href = `${CLIENT_ROOT_URL}/dashboard/${userId}`;
                    } else {
                        window.location.href = `${CLIENT_ROOT_URL}/pilgrim/${userId}`;
                    }
                })
                .catch((error) => {
                    errorHandler(dispatch, error.response, AUTH_ERROR)
                });
        }
    }

    export function logoutUser() {
        return function (dispatch) {
            dispatch({ type: UNAUTH_USER });
            cookie.remove('token', { path: '/' });

            window.location.href = CLIENT_ROOT_URL + '/login';
        }
    }

    export function dashboardLoad(userId) {
        return function(dispatch) {
            axios.get(`${API_URL}/dashboard/${userId}`, {
                headers: { 'Authorization': cookie.load('token') }
            })
            .then(response => {
                dispatch({
                    type: DASHBOARD_LOAD,
                    payload: response.data.content
                });
            })
            .catch((error) => {
                errorHandler(dispatch, error.response, AUTH_ERROR)
            });
        }
    }

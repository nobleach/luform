import { AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    PROTECTED_TEST,
    DASHBOARD_LOAD
} from '../actions/types';

const INITIAL_STATE = { error: '', message: '', content: '', authenticated: false}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case AUTH_USER:
            return { ...state, error: '', message: '', authenticated: true };
        case UNAUTH_USER:
            return { ...state, authenticated: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload, authenticated: false};
        case PROTECTED_TEST:
            return { ...state, content: action.payload };
        case DASHBOARD_LOAD:
            return { ...state, content: action.payload };
    }

    return state;
}

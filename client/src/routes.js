import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import NotFoundPage from './components/not-found-page';

import HomePage from './components/home-page';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Dashboard from './components/dashboard';
import PilgrimForm from './components/PilgrimForm';
import RequireAuth from './components/auth/require-auth';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="dashboard/:userId" component={RequireAuth(Dashboard)} />
        <Route path="pilgrim/:userId" component={RequireAuth(PilgrimForm)} />

        <Route path="*" component={NotFoundPage} />
    </Route>
);

import React from 'react'
import {Provider} from 'react-redux'
import {Router, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history';

/* Imports */

import SubRoot from './SubRoot.js';

import configureStore from '../utils/store'

//const history = require("history").createBrowserHistory;
const {store} = configureStore();

const Root = () => {
    return (
        <Provider store={store}>
            <Router history={createBrowserHistory()}>
                <Route path="/" component={SubRoot}/>
            </Router>
        </Provider>
    )
};

export default Root

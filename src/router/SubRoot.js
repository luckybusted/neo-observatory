import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Neos from '../containers/Neos';
import Satellites from '../containers/Satellites';
import Rockets from '../containers/Rockets';
import ErrorPage from '../containers/ErrorPage';
import Home from '../containers/Home'

import MainLayout from './MainLayout.js';

class SubRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props,
            params: props.match
        };
    }

    render() {

        return (
            <MainLayout params={this.state.params} props={this.state.props}>

                <Switch>
                        <Route exact path="/"
                               component={Home}/>
                        <Route path="/neos/"
                               component={Neos}/>
                        <Route path="/satellites/"
                               component={Satellites}/>
                        <Route path="/rockets/"
                               component={Rockets}/>
                        <Route path="*"
                               component={ErrorPage}/>

                </Switch>

            </MainLayout>
        )
    }
}

export default SubRoot;

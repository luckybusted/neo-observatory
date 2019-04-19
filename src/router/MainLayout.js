import React, {Component} from 'react';
import Navigation from '../modules/Navigation';
import Footer from '../components/Footer';

import '../styles/main.scss'

let ReactRedux = require('react-redux');

class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props,
            params: props.params
        };
    }


    render() {

        return [
            <Navigation/>,
                this.props.children,
            <Footer/>
        ];
    }
}

export default ReactRedux.connect()(MainLayout);

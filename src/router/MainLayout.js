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
            <Navigation key={'navigation'}/>,
            <div className={'main-content'} key={'mainContent'}>
                {this.props.children}
            </div>,
            <Footer key={'footer'}/>
        ];
    }
}

export default ReactRedux.connect()(MainLayout);

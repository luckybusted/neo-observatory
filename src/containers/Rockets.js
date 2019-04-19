import React, {Component} from 'react';

let ReactRedux = require('react-redux');

class Rockets extends Component {

    componentDidMount(){}

    render() {
        return (
            <div>Rockets goes here</div>
        );
    }
}

export default ReactRedux.connect(
    (state) => ({
        showSpinner: state.dataReducer.showSpinner.rocket
    })
    ,
    (dispatch) => ({})
)(Rockets);

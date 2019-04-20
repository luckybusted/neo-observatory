import React, {Component} from 'react';
import RocketLaunchTable from "../modules/RocketLaunchTable";

let actions = require('../actions/actions');
let ReactRedux = require('react-redux');

class Rockets extends Component {

    componentWillMount(){
        this.props.getRocketStats();
    }

    render() {
        return (
            <div className={'container'}>
                <RocketLaunchTable/>
            </div>
        );
    }
}

export default ReactRedux.connect(
    (state) => ({
        showSpinner: state.dataReducer.showSpinner.rocket
    })
    ,
    (dispatch) => ({
        getRocketStats: (params) => dispatch(actions.getRocketStats(params))
    })
)(Rockets);

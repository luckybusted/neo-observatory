import React, {Component} from 'react';
import RocketLaunchTable from "../modules/RocketLaunchTable";

let ReactRedux = require('react-redux');

class Rockets extends Component {

    render() {
        return (
            <div className={'container'}>
                <RocketLaunchTable count={20}/>
            </div>
        );
    }
}

export default ReactRedux.connect(
    (state) => ({
        showSpinner: state.dataReducer.showSpinner.rocket
    })
)(Rockets);

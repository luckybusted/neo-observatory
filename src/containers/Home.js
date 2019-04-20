import React, {Component} from 'react';
import RocketLaunchTable from "../modules/RocketLaunchTable";
import NeoKeyIndicator from "../modules/NeoKeyIndicator";
import SatKeyIndicator from "../modules/SatKeyIndicator";

let actions = require('../actions/actions');
let ReactRedux = require('react-redux');

class Home extends Component {

    componentDidMount(){
        this.props.getNeoStats();
        this.props.getSatStats();
    }

    render() {


        return (
            <main>
                <div className="container">
                        <NeoKeyIndicator/>
                        <SatKeyIndicator/>
                        <RocketLaunchTable count={5}/>
                </div>
            </main>
        );
    }
}

export default ReactRedux.connect(
    (state) => ({
        showSpinner: state.dataReducer.showSpinner
    })
    ,
    (dispatch) => (
        {
            getNeoStats: (params) => dispatch(actions.getNeoStats(params)),
            getSatStats: (params) => dispatch(actions.getSatStats(params))
        }
    )
)(Home);

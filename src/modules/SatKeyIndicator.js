import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

const uuidv4 = require('uuid/v4');
let actions = require('../actions/actions');
let ReactRedux = require('react-redux');

class SatKeyIndicator extends Component {

    render() {

        const showSpinner = this.props.showSpinner;
        const satellites = this.props.satellites;

        let keyindicator = [];

        if (!showSpinner && satellites.length) {

            let satLength = satellites.length;
            keyindicator = [
                <span key={uuidv4()} className="tinyDescription col-12">Satellites in earth orbit</span>,
                <div key={uuidv4()} className="col-9">
                    <p className="ki">{this.props.satellites[satLength - 1].all['0'].orbit}</p>
                </div>,
                <div key={uuidv4()} className="col-3">
                    <NavLink className="btn" to="/satellites/">more</NavLink>
                </div>
            ];
        }

        return (

            <div className="row keyIndicator">
                {keyindicator}
            </div>

        )

    }

}

export default ReactRedux.connect(
    (state) => (
        {
            showSpinner: state.dataReducer.showSpinner.satellite,
            neos: state.dataReducer.neos,
            satellites: state.dataReducer.satellites,
            neosCount: state.dataReducer.neosCount
        }
    ),
    (dispatch) => (
        {
            getSatStats: (params) => dispatch(actions.getSatStats(params))
        }
    )
)(SatKeyIndicator);

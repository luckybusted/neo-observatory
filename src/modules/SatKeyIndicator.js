import React, {Component} from 'react';

const uuidv4 = require('uuid/v4');
let actions = require('../actions/actions');
let ReactRedux = require('react-redux');

class SatKeyIndicator extends Component {
    constructor() {
        super();
    }


    render() {

        const showSpinner = this.props.showSpinner;

        let keyindicator = [];

        if (!showSpinner) {
            keyindicator = [
                <span key={uuidv4()} className="tinyDescription col-12">Satelliten im Orbit der Erde</span>,
                <div key={uuidv4()} className="col-9">
                    <p className="ki">{this.props.satellites[99].all['0'].orbit}</p>
                </div>,
                <div key={uuidv4()} className="col-3">
                    <a className="btn" href="/satellites/">mehr</a>
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
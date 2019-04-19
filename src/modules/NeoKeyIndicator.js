import React, {Component} from 'react';

const uuidv4 = require('uuid/v4');
let actions = require('../actions/actions');
let ReactRedux = require('react-redux');

class NeoKeyIndicator extends Component {
    constructor() {
        super();
    }


    render() {

        const showSpinner = this.props.showSpinner;

        let keyindicator = [];

        if (!showSpinner) {
            keyindicator = [
                <span key={uuidv4()} className="tinyDescription col-12">Erdnahe Objekte heute</span>,
                <div key={uuidv4()} className="col-9">
                    <p className="ki">{this.props.neosCount}</p>
                </div>,
                <div key={uuidv4()} className="col-3">
                    <a className="btn" href="/neos/">mehr</a>
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
            showSpinner: state.dataReducer.showSpinner.neo,
            neos: state.dataReducer.neos,
            neosCount: state.dataReducer.neosCount
        }
    ),
    (dispatch) => (
        {
            getNeoStats: (params) => dispatch(actions.getNeoStats(params))
        }
    )
)(NeoKeyIndicator);

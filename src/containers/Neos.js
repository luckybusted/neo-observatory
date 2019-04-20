import React, {Component} from 'react';
import NeoTable from '../modules/NeoTable';

let actions = require('../actions/actions'),
    ReactRedux = require('react-redux');

class Neos extends Component {

    componentDidMount(){
        this.props.getNeoStats();
    }

    render() {

        return (
            <main>
                <div className="container">
                    <div className="row">
                        <NeoTable/>
                    </div>
                </div>
            </main>
        );
    }
}

export default ReactRedux.connect(
    null,
    (dispatch) => (
        {
            getNeoStats: (params) => dispatch(actions.getNeoStats(params))
        }
    )
)(Neos);

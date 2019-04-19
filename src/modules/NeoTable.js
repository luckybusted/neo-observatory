import React, {Component} from 'react';
import Neo from '../components/Neo';

let actions = require('../actions/actions');
let ReactRedux = require('react-redux');

class NeoTable extends Component {

    render(){

        const showSpinner = this.props.showSpinner;

        return (
            <div>
                {showSpinner &&
                <div>Loading...</div>
                }
                {!showSpinner &&
                <div>
                    <Neo data={this.props.neos}/>
                </div>
                }
            </div>
        )

    }

}

export default ReactRedux.connect(
    (state) => (
        {
            showSpinner: state.dataReducer.showSpinner,
            neos: state.dataReducer.neos
        }
    ),
    (dispatch) => (
        {
            getNeoStats: (params) => dispatch(actions.getNeoStats(params))
        }
    )
)(NeoTable);

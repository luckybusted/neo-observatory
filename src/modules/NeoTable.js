import React, {Component} from 'react';
import Neo from '../components/Neo';
import Loader from '../components/Loader';

let actions = require('../actions/actions');
let ReactRedux = require('react-redux');

class NeoTable extends Component {

    render(){

        const showSpinner = this.props.showSpinner;

        return (
            <div className={'col-12'}>
                {showSpinner &&
                    <Loader/>
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

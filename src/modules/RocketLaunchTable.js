import React, {Component} from 'react';

let actions = require('../actions/actions');
let ReactRedux = require('react-redux');
let moment = require('moment');

class RocketLaunchTable extends Component {

    render() {

        const showSpinner = this.props.showSpinner;
        const launchesLength = this.props.launches.length;

        let launches = [];

        if(!showSpinner && launchesLength){

            launches = this.props.launches.map((value, i, values) => [

                <tr key={'launch-' + i}>
                    <td>{value.lsp.abbrev}</td>
                    <td>{value.name}</td>
                    <td>{moment(value.isostart).format('DD.MM.YYYY hh:mm')}</td>
                </tr>

            ]);
        } else {
            return <tr><td>LOADING...</td></tr>
        }

        return (
            <div className="row">
                <span className="tinyDescription col-12">Upcoming rocket launches</span>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Agency</th>
                            <th scope="col">Rocket</th>
                            <th scope="col">Lift Off</th>
                        </tr>
                    </thead>
                    <tbody>
                        {launches}
                    </tbody>
                </table>

            </div>
        )

    }

}

export default ReactRedux.connect(
    (state) => (
        {
            showSpinner: state.dataReducer.showSpinner.rocket,
            launches: state.dataReducer.launches
        }
    ),
    (dispatch) => (
        {
            getRocketStats: (params) => dispatch(actions.getRocketStats(params))
        }
    )
)(RocketLaunchTable);

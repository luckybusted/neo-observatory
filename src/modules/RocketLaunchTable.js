import React, {Component} from 'react';

let actions = require('../actions/actions');
let ReactRedux = require('react-redux');
let moment = require('moment');

class RocketLaunchTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const showSpinner = this.props.showSpinner;

        let launches = [];

        if(!showSpinner){

            launches = this.props.launches.map((value, i, values) => [

                <tr>
                    <td>{value.lsp.abbrev}</td>
                    <td>{value.name}</td>
                    <td>{moment(value.isostart).format('DD.MM.YYYY hh:mm')}</td>
                </tr>

            ]);
        }

        return (
            <div className="row">
                <span className="tinyDescription col-12">Nächste Raketenstarts</span>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Agency</th>
                            <th scope="col">Rakete</th>
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

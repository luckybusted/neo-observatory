import React, {Component} from 'react';
import { Table } from 'reactstrap';

let ReactRedux = require('react-redux');

class Neo extends Component {

    componentDidMount() {

    };


    render() {

        let neos = this.props.data.map((value, i, values) => (

            <tr key={value.neo_reference_id}>
                <td>{value.name}</td>
                <td>{value.estimated_diameter.meters.estimated_diameter_min}
                    - {value.estimated_diameter.meters.estimated_diameter_max}</td>
                <td>{value.close_approach_data[0].miss_distance.kilometers}</td>
            </tr>

        ));

        return (
            <div>
                <h3>Total Heute: {this.props.neosCount}</h3>
                <Table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>ca. Diameter (m)</th>
                        <th>max. Annäherung (km)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {neos}
                    </tbody>
                </Table>
            </div>
        )
    }

}

export default ReactRedux.connect(
    (state) => (
        {
            showSpinner: state.dataReducer.showSpinner,
            neosCount: state.dataReducer.neosCount
        }
    )
)(Neo);

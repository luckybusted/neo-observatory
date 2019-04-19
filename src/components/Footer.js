import React, {Component} from 'react';
let ReactRedux = require('react-redux');

class Footer extends Component {

    componentDidMount() {

    };


    render() {

        return (
            <main>
                <div className="container">
                    &copy; 2019 Ivan Ushmorov
                </div>
            </main>
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
)(Footer);

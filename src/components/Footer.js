import React, {Component} from 'react';
let ReactRedux = require('react-redux');

class Footer extends Component {

    componentDidMount() {

    };


    render() {

        let year = new Date().getFullYear();

        return (
            <main>
                <div className="container">
                    &copy; {year} Ivan Ushmorov
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

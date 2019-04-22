import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
let ReactRedux = require('react-redux');

class Footer extends Component {

    componentDidMount() {

    };


    render() {

        let year = new Date().getFullYear();

        return (
            <main>
                <div className="container flex-column flex-md-row justify-content-between">
                    <div>
                    &copy; {year} by Ivan Ushmorov
                    </div>
                    <div>
                        <NavLink activeClassName='active' className='nav-link' to='/imprint/'>Impressum</NavLink>
                    </div>
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

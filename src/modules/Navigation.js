import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

let ReactRedux = require('react-redux');

class Navigation extends Component {

    render(){

        return (
            <header className="container pb-5 pt-4 navbar navbar-expand flex-column flex-md-row justify-content-between">
                <NavLink className="logo navbar-brand" to="/">NEO</NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink activeClassName='active' className='nav-link' to='/neos/'>Neos</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink activeClassName='active' className='nav-link' to='/satellites/'>Satellites</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink activeClassName='active' className='nav-link' to='/rockets/'>Rockets</NavLink>
                    </li>
                </ul>
            </header>
        )

    }

}

export default ReactRedux.connect()(Navigation);

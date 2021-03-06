import React, {Component} from 'react';

let ReactRedux = require('react-redux');

class Satellites extends Component {

    componentDidMount() {
    }

    render() {
        return (

            <div className={'container'}>
                <ul>
                    <li>Communications: 742 satellites</li>
                    <li>Earth observation: 596 satellites</li>
                    <li>Technology development/demonstration: 193 satellites</li>
                    <li>Navigation/Positioning: 108 satellites</li>
                    <li>Space observation: 66 satellites</li>
                    <li>Earth science: 24 satellites</li>
                    <li>Space science: 67 satellites</li>
                    <li>Space observation: 9 satellites</li>
                </ul>
            </div>
        );
    }
}

export default ReactRedux.connect(
    (state) => ({
        showSpinner: state.dataReducer.showSpinner
    })
)(Satellites);

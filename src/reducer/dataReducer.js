import React from 'react';

import {
    REQUEST_DATA,
    REQUEST_SATELLITES,
    REQUEST_NEOS,
    REQUEST_LAUNCHES,
    RECEIVED_STATS,
    RECEIVED_LAUNCHES,
    RECEIVED_DETAILS,
    RESET_SPINNER,
    DATA_ERROR,
    RECEIVED_SATELLITES
} from '../actions/action-types';

const api = require('../utils/api');

const initialState = {
    apiData: {},
    showSpinner: {
        'neo': true,
        'satellite': true,
        'rocket': true
    },
    errors: '',
    neos: {},
    neosCount: '',
    launches: {},
    satellites: {},
    requestResultsUrl: '',
    requestResultsCount: '',
    productData: {},
};

function getApiData(data) {

    const apiData = {};
    let neos = data.data.near_earth_objects;

    console.log('FormDATA', neos);

    neos.forEach((element, index) => {
        apiData[element] = neos[index];
    });

    return apiData;
}

function parseSats(data) {
    console.log(data);
}

function getNeos(data) {
    let neos = [];

    Object.values(data).map((value, i) => (
        value.forEach(function (element) {
            neos.push(element);
        })
    ));

    return neos;
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                showSpinner: true
            };
        case REQUEST_NEOS:
            return {
                ...state,
                showSpinner: {
                    ...state.showSpinner,
                    neo: true
                }
            };
        case REQUEST_LAUNCHES:
            return {
                ...state,
                showSpinner: {
                    ...state.showSpinner,
                    rocket: true
                }
            };
        case REQUEST_SATELLITES:
            return {
                ...state,
                showSpinner: {
                    ...state.showSpinner,
                    satellite: true
                }
            };
        case RECEIVED_DETAILS:
            return {
                ...state,
                productData: action.data.data,
                showSpinner: false
            };
        case RECEIVED_STATS:
            return {
                ...state,
                neos: getNeos(action.data.data.near_earth_objects),
                neosCount: action.data.data.element_count,
                //apiData: getApiData(action.data, state),
                showSpinner: false
            };

        case RECEIVED_LAUNCHES:
            return {
                ...state,
                launches: action.data.data.launches,
            };

        case RECEIVED_SATELLITES:
            return {
                ...state,
                satellites: action.data.data,
            };

        case RESET_SPINNER:
            return {
                ...state,
                showSpinner: true
            };
        case DATA_ERROR:
            return {
                ...state,
                errors: action.errors
            };


        default:
            return state;
    }
};

export default dataReducer;

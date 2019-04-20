import {
    REQUEST_NEOS,
    REQUEST_LAUNCHES,
    REQUEST_SATELLITES,
    RECEIVED_STATS,
    RECEIVED_SATELLITES,
    RECEIVED_LAUNCHES,
    DATA_ERROR
} from './action-types';



import api from '../utils/api';



export function getNeoStats(){
        return (dispatch) => {
            dispatch({type: REQUEST_NEOS});
            api.getNeoData()

                .then(
                    (data) => dispatch({type: RECEIVED_STATS, data: data}))
                .catch(err => {
                    dispatch({type: DATA_ERROR, errors: err});
                });
        };
    }

export function getRocketStats(count){
        return (dispatch) => {
            dispatch({type: REQUEST_LAUNCHES});
            api.getRocketData(count)

                .then(
                    (data) => dispatch({type: RECEIVED_LAUNCHES, data: data}))
                .catch(err => {
                    dispatch({type: DATA_ERROR, errors: err});
                });
        };
    }

export function getSatStats(){
        return (dispatch) => {
            dispatch({type: REQUEST_SATELLITES});
            api.getSatData()
                .then(
                    (data) => dispatch({type: RECEIVED_SATELLITES, data: data}))
                .catch(err => {
                    dispatch({type: DATA_ERROR, errors: err});
                });
        };
    }





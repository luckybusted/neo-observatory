import 'whatwg-fetch';
import axios from 'axios';
import {oAuth} from './oAuth';


let api = {

    getNeoData(params) {

        let urlBase = 'https://api.nasa.gov/neo',
            //stats = '/rest/v1/stats', //Get the Near Earth Object data set totals
            feed = '/rest/v1/feed'; //Find Near Earth Objects by date (/today for today)
            //neo = '/rest/v1/neo/browse', // Browse the Near Earth Objects service (ID instead of browse to find a NEO)
            //urlParams = '';

        const dataUrl = '';
        const url = urlBase + feed +'/today?api_key=' + oAuth;


        //for (let [key, value] of Object.entries(params)) {
        //     urlParams += '&' + key + '=' + value;
        //}

        return axios.get(params ? dataUrl : url)
            .then((response) => {
                return response;
            })
            .catch(function (error) {
                console.log('axios error:', error);
            })
    },

    getSatData(){

        let urlBase = 'https://satcatparser.firebaseio.com/data.json';

        return axios.get(urlBase)
            .then((response) => {
                return response;
            })
            .catch(function (error) {
                console.log('axios error:', error);
            })


    },

    getRocketData(){

        let urlBase = 'https://launchlibrary.net/1.3/';

        return axios.get(urlBase + 'launch/next/5')
            .then((response) => {
                return response;
            })
            .catch(function (error) {
                console.log('axios error:', error);
            })

    }

};

export default api;

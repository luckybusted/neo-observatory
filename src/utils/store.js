import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducer/index';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';



const logger = createLogger();

//add localStorage
/*const persistedState = loadState();*/
export default () => {
    let store = createStore( reducer, {}, applyMiddleware(thunk, logger));

    return {store}

}

// You may optionally specify the initial state as the second argument to createStore(). This is useful for hydrating the state of the client to match the state of a Redux application running on the server.
// let store = createStore(todoApp, window.STATE_FROM_SERVER)


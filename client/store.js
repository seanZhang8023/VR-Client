
//import config from '../config'
import rootReducer from './rootReducer'
import routes from './routes'
import thunk from 'redux-thunk'
import {createHistory} from 'history'
import {createStore, compose, applyMiddleware} from 'redux'
import {reduxReactRouter} from 'redux-router'
import {routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router'
import {createLogger} from 'redux-logger';
//import demo from './middleware/demo'


let store

let configureStore = (initialState = {}) => {
        console.log("init configurestore");
    const reduxrouterMiddleware = routerMiddleware(browserHistory)
    const logger = createLogger();
    store = compose(
        applyMiddleware(
			thunk,
            reduxrouterMiddleware

        ),
        reduxReactRouter({
            routes,
            createHistory
        }),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)(rootReducer, initialState)
    //console.log(JSON.stringify(initialState,null,4))

    return store
}

let getStore = () => {
    return store
}

export {configureStore, getStore}

import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {routerStateReducer} from 'redux-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import appReducer from './reducers'


/**
 * Reducer index.
 * Combines reducers into a single reducer.
 */
const reducer = combineReducers({
	app: appReducer,
	form: formReducer,
	router: routerStateReducer,
	routing: routerReducer
})

const rootReducer = (state, action) => {

	return reducer(state, action)
}

export default rootReducer

import {handleActions} from 'redux-actions'
const reducers = {}
const initialState = {
}
reducers["DEMO_GET_FINISHED"] = {
	next(state=initialState, action) {
		return action.payload
	},
	throw(state) {
		return Object.assign({}, state, {})
	}
}

export default handleActions(reducers, initialState)

import {isFSA} from 'flux-standard-action'
let middleware = ({dispatch, getState}) => {
	return next => action => {
		if (isFSA(action)) {
			if (action.type =="DEMO_GET_FINISHED" ) {
				console.log("middle get DEMO_GET_FINISHED:",action.payload)
			}
		}
		return next(action)
	}
};

export default middleware;
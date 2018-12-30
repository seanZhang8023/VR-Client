import 'whatwg-fetch'

import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


class App extends Component {
	constructor(props) {
		super(props);
		console.log("constructor App");
		this.state = {
		}
	}

	componentWillMount() {

	}


	componentWillReceiveProps(nextProps) {

	}

	render() {
		const {children} = this.props;
		var _this = this;
		return (
			<div>
				<div>
					{children}
				</div>
			</div>
		)
	}
}

App.propTypes = {
	children: PropTypes.node
};

let mapStateToProps = (state) => {
	return {

	}
};

let mapDispatchToProps = (dispatch) => {
	return {

	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

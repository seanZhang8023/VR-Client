import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import {configureStore} from './store'
import {Provider} from 'react-redux'
import {ReduxRouter} from 'redux-router'
import {syncHistoryWithStore}  from 'react-router-redux'
import { message,LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';


var initialState = {}

const store = configureStore(initialState)


class Root extends Component {
	render() {
		return (
			<div>
				<Provider store={store}>
					<ReduxRouter>
						{routes}
					</ReduxRouter>
				</Provider>
				<div id="dummy" style={{display:'none'}}></div>
			</div>
		)
	}
}

window.onbeforeunload = function () {
	var warning = "是否关闭浏览器?"
	return warning;
}

ReactDOM.render(
	<LocaleProvider  locale={zh_CN}><Root /></LocaleProvider>,
	document.getElementById('root')
)

import React from 'react'
import {
   App,
    MainWeb,
    NewCarContent,
    PlicyContent,
    OtherContent,
    MainWeb3,
    MainWeb2
} from './containers'
import {
 CarBrandContent

}from './components'
import {Router, Route} from 'react-router'

const routes = (
    <Router>
        <Route path='/' component={App}>
            <Route path='/mainWeb' component={MainWeb3}/>
            <Route path='/mainWeb2' component={MainWeb2}/>
            <Route path='/mainWeb0' component={MainWeb}/>
            <Route path='/mainWeb3' component={CarBrandContent}/>
            <Route path="/newCar" component={NewCarContent}/>
            <Route path = "/plicy" component ={PlicyContent}/>
            <Route path = "/other" component ={OtherContent}/>
        </Route>
    </Router>
);


export default routes

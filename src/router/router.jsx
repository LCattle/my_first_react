import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute, hasHistory} from 'react-router'

import index from '../components/index'

class Roots extends Component{
    render() {
        return (
            < div > {this.props.children}</div>
        )
    }
}


const RouteConfig = (
    <Router>
        <Route path='/' component={Roots}>
            <IndexRoute component='index' />
        </Route>
    </Router>
)

export default RouteConfig;
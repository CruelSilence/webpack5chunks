import React, {Suspense} from 'react';
import {Route, Router, Switch} from 'react-router';
import { createBrowserHistory } from 'history';

if(!window.browserHistory) {
    window.browserHistory = createBrowserHistory();
}

const history = window.browserHistory;

const Bundle = React.lazy(() => import(/* webpackChunkName: "Bundle" */ './Bundle'));

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>come on</div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/bundle" component={Bundle} exact/>
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}

export default App;

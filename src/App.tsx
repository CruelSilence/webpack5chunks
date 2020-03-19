import React, {Suspense} from 'react';
import {Route, Router, Switch} from 'react-router';
import { createBrowserHistory } from 'history';

// @ts-ignore
if(!window.browserHistory) {
    // @ts-ignore
    window.browserHistory = createBrowserHistory();
}

// @ts-ignore
const history = window.browserHistory;

const Bundle = React.lazy(() => import(/* webpackChunkName: "Bundle" */ './Bundle'));

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>come oh really???</div>
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

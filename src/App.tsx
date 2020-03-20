import React, {Suspense} from 'react';

const Bundle = React.lazy(() => import(/* webpackChunkName: "Bundle" */ './Bundle'));

class App extends React.Component {
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Bundle />
            </Suspense>
        );
    }
}

export default App;

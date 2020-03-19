import React from 'react';
import ReactDOM from 'react-dom';
import {hot} from 'react-hot-loader/root';

import App from './App';

const RootApp = hot(App);

ReactDOM.render(
    <RootApp/>,
    document.getElementById('application')
);



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';




import configureStore from './store';
import createRoutes from './routes';

const initialState = {};
const store = configureStore(initialState, browserHistory);

const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};


ReactDOM.render(
    <Provider store={store}>
        <Router
          routes={rootRoute}          
        />

    </Provider>,
    document.getElementById('app')
  );

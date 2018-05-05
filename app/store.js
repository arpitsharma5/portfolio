/* create store with asynchronously loaded reducers
*/

import {createStore, applymiddleware, compose} from 'redux';
import {fromJS} from 'immutable';
import {routerMiddleWare} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reduers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState ={},history){

  const middlewares =[sagaMiddleware,routerMiddleWare(history)];

  const enhancers = [applymiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );

  store.runSaga = sagaMiddleware.run;
  store.asynReducers = {};

  //making reducers hot reloadable
  if(module.hot){
    module.hot.accept('./')
  }
}

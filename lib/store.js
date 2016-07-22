'use strict'

import { createStore, combineReducers } from 'redux';
import { Map } from 'immutable';
import actionConstants from './actions/action-constants';

const defaultDataState = Map({
  numClicks: 0
});

const dataReducer = (state = defaultDataState, action) => {
  switch (action.type) {
    case actionConstants.incrementClicks:
      return state.merge(Map({
        numClicks: action.numClicks
      }));
    default:
      return state;
  }
}

const defaultAppState = Map();

const appReducer = (state = defaultAppState, action) => {
  return state;
}

const reducers = combineReducers({
  dataState: dataReducer,
  appState: appReducer,
});

export default createStore(reducers);


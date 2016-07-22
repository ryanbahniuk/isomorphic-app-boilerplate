'use strict'

import { createStore, combineReducers } from 'redux';
import { Map } from 'immutable';
import actionConstants from './actions/action-constants';

const defaultState = Map({
  numClicks: 0
});

const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionConstants.incrementClicks:
      return state.merge(Map({
        numClicks: action.numClicks
      }));
    default:
      return state;
  }
}

const appReducer = (state = Map(), action) => {
  return state;
}

const reducers = combineReducers({
  dataState: dataReducer,
  appState: appReducer
});

export default createStore(reducers);


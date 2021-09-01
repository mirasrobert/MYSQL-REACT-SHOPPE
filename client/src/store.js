import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({});

const defaultState = {};

const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

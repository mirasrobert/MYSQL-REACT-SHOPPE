import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const defaultState = {};

const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

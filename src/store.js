import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import scrollReducer from './Reducers/scrollReducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    scrollReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;
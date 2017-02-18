import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/';

const store = createStore (
  rootReducer,
  applyMiddleware (
    thunk
  )
);

if (module.hot) {
  module.hot.accept ('../reducers/', () =>
    store.replaceReducer (require ('../reducers/'))
  );
}

export default store;

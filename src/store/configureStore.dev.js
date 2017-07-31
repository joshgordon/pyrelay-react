import { createStore } from "redux";
import rootReducer from "../reducers/";

const store = createStore (rootReducer);

if (module.hot) {
  module.hot.accept ("../reducers/", () =>
    store.replaceReducer (require ("../reducers/"))
  );
}

export default store;

import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/";
import mqtt_middleware from "./mqtt_middleware";

const store = createStore (rootReducer, applyMiddleware(mqtt_middleware));

if (module.hot) {
  module.hot.accept ("../reducers/", () =>
    store.replaceReducer (require ("../reducers/"))
  );
}

export default store;

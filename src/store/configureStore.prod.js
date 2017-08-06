import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/";
import mqtt_middleware from "./mqtt_middleware";

const store = createStore (rootReducer, applyMiddleware(mqtt_middleware));

export default store;

import { createStore } from "redux";
import rootReducer from "./Reducers.js"

const store = createStore(rootReducer);

export default store;

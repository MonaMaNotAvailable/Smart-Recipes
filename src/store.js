import { createStore } from "redux";
import reducer from "./reducers/index.js";

const store = createStore(reducer,
  //enables the Redux dev tools
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export default store;
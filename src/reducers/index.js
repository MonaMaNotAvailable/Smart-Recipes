import { combineReducers } from "redux";
import location from "./location.js";
import type from "./type.js";
import style from "./style.js";
import theme from "./theme.js";

//parent reducer
// function reducer (action, state) {
//     switch(action.type){
//         case Location:
//             return;
//         case ?:
//             return;
//         default:
//             return state;
//     }
// }

export default combineReducers({
  location,
  type,
  style,
  theme
});
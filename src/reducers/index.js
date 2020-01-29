import {combineReducers} from "redux";
import isActive from "./isActive";

const rootReducer = combineReducers({
    isActive,
});

export default rootReducer;
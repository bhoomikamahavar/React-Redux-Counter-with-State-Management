import { combineReducers } from "redux";
import counterReducer from "./inc_dec";

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer;
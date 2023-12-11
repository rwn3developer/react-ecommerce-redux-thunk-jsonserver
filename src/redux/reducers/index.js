import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    users : UserReducer,
    auth : authReducer
})

export default rootReducer;
import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
	counterReducer, appReducer
})
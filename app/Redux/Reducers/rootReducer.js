import { combineReducers } from "redux";
import { page1Reducer } from "./Pages/page1";
import { page2Reducer } from "./Pages/page2"

export const rootReducer = combineReducers({
    page1Reducer,
    page2Reducer
})
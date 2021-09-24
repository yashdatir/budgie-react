import { createStore } from "redux";
import { rootReducer } from "./Reducers/rootReducer";

export const store = createStore(rootReducer)
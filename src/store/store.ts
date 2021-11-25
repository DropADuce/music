import {applyMiddleware, combineReducers, createStore } from "redux";
import {AuthReducer} from "./reducers/AuthReducer/AuthReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({auth: AuthReducer})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
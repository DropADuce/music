import {initializeState, initialTypes} from "./types";

const initialState: initializeState = {
    isInitialize: false
}

export const initializeReducer = (state = initialState, action: initialTypes) => {
    switch (action.type) {
        default: return state
    }
}
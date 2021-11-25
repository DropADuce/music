export interface initializeState {
    isInitialize: boolean
}

export enum initializeActions {
    SET_INITIAL = 'SET_INITIAL'
}

interface SET_INITIAL_TYPE {
    type: initializeActions.SET_INITIAL,
    payload?: null
}

export type initialTypes = SET_INITIAL_TYPE
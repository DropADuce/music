import {IUser} from "../../../Models/IUser";

export interface IAuthState {
    isAuth: boolean,
    isFetching: boolean,
    error: '',
    isLoginOpen: boolean
    user: IUser
}

export enum AuthActions {
    SET_AUTH = 'SET_AUTH',
    SET_ERROR = 'SET_ERROR',
    SET_USER = 'SET_USER',
    SET_FETCHING = 'SET_FETCHING',
    SET_MODAL_OPEN = 'SET_MODAL_OPEN'
}

export interface SET_AUTH_TYPE {
    type: AuthActions.SET_AUTH,
    payload: boolean
}

export interface SET_ERROR_TYPE {
    type: AuthActions.SET_ERROR,
    payload: ''
}

export interface SET_USER_TYPE {
    type: AuthActions.SET_USER,
    payload: IUser
}

export interface SET_FETCHING_TYPE {
    type: AuthActions.SET_FETCHING,
    payload: boolean
}

export interface SET_MODAL_OPEN_TYPE {
    type: AuthActions.SET_MODAL_OPEN,
    payload: boolean
}

export type AuthType = SET_AUTH_TYPE | SET_ERROR_TYPE | SET_USER_TYPE | SET_FETCHING_TYPE | SET_MODAL_OPEN_TYPE
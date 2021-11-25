import {IUser} from "../../../Models/IUser";
import {AuthActions, AuthType, IAuthState} from "./types";

export const initialState: IAuthState = {
    isAuth: false,
    isFetching: false,
    error: '',
    isLoginOpen: false,
    user: {} as IUser
}

export const AuthReducer = (state = initialState, action: AuthType):IAuthState  => {
    switch (action.type) {
        case AuthActions.SET_USER: {
            return {...state, user: {...action.payload}}
        }
        case AuthActions.SET_AUTH: {
            return {...state, isAuth: action.payload}
        }
        case AuthActions.SET_FETCHING: {
            return {...state, isFetching: action.payload}
        }
        case AuthActions.SET_ERROR: {
            return {...state, error: action.payload}
        }
        case AuthActions.SET_MODAL_OPEN: {
            return {...state, isLoginOpen: state.isFetching ? true : action.payload}
        }
        default: {
            return state
        }
    }
}
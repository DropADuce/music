import {AuthActions, SET_AUTH_TYPE, SET_FETCHING_TYPE, SET_MODAL_OPEN_TYPE, SET_USER_TYPE} from "./types";
import {DispatchType} from "../../store";
import {auth} from "../../../api/Auth";
import {IUser} from "../../../Models/IUser";

export const authActionCreators = {
    setUser: (user: IUser): SET_USER_TYPE => ({type: AuthActions.SET_USER, payload: user}),
    setFetching: (isFetching: boolean): SET_FETCHING_TYPE => ({type: AuthActions.SET_FETCHING, payload: isFetching}),
    setIsAuth: (isAuth: boolean): SET_AUTH_TYPE => ({type: AuthActions.SET_AUTH, payload: isAuth}),
    setModalOpen: (isOpen: boolean): SET_MODAL_OPEN_TYPE => ({type: AuthActions.SET_MODAL_OPEN, payload: isOpen}),
    login: (email: string, password: string) => async (dispatch: DispatchType) => {
        dispatch(authActionCreators.setFetching(true))
        setTimeout(async () => {
            let isAuth = false
            try {
                const resp = await auth()
                const authUser = resp.data.find(user => user.email === email && password === user.password)
                if (authUser) {
                    isAuth = true
                    dispatch(authActionCreators.setUser(authUser))
                    dispatch(authActionCreators.setIsAuth(isAuth))
                } else {
                    throw new Error('Не правильная почта или пароль')
                }
            } catch (e) {
                console.log(e)
            } finally {
                dispatch(authActionCreators.setFetching(false))
                if (isAuth) {
                    dispatch(authActionCreators.setModalOpen(false))
                }
            }

        }, 5000)
    }
}
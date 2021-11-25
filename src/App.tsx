import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TopNavigation from "./components/TopNavigation/TopNavigation";
import MainPage from "./pages/Main/Main";
import {connect, Provider} from "react-redux";
import {RootState, store} from "./store/store";

type mstpType = {
    user: string,
    isAuth: boolean
}

const App: FC<mstpType> = (props) => {
    return (
        <>
            <BrowserRouter>
                <TopNavigation {...props}/>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};


const mstp = (state: RootState):mstpType => ({
    user: state.auth.user.username,
    isAuth: state.auth.isAuth,
})


const AppContainer = connect(mstp)(App)

export const MusicApp = () => {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    )
}
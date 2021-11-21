import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TopNavigation from "./components/TopNavigation/TopNavigation";
import MainPage from "./pages/Main/Main";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <TopNavigation />
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
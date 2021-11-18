import React from 'react';
import TopNavigation from "./components/TopNavigation/TopNavigation";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <TopNavigation />
        </BrowserRouter>
    );
};

export default App;
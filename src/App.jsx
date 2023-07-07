import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Login from "./pages/Login";

import "./App.scss";

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Login />} /> login
            <Route path="/home" element={<Home />} /> home
        </Routes>
    );
};

export default App;

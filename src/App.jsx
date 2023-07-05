import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Login from "./pages/Login";

import "./App.scss";

const App = () => {

    return (
      <Routes>
        <Route path="/login" element={<Home/>}/> login
        <Route path="/" element={<Login/>}/> home
      </Routes>
    );
};

export default App;

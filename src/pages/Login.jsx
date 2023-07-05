import "./Login.scss";
import logo from "../assets/images/logo-2.png";

import CustomButton from "../components/CustomButton";

import { useNavigate } from "react-router-dom";

import Spline from "@splinetool/react-spline";

const Login = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/login");
    };

    return (
        <div className="login-container">
            <img src={logo} alt="Full stack Club"></img>
            <div className="button-container">
                <CustomButton onClick={handleHomeClick}>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;

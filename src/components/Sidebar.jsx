import "./Sidebar.scss"

import CustomButton from "./CustomButton"
import logo from "../assets/images/logo.png"

import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    }
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Full stack Club"></img>
            </div>
            <div className="sign-out">
                <CustomButton onClick={handleLoginClick}>Sair</CustomButton>
            </div>
        </div>
    )
}

export default Sidebar;
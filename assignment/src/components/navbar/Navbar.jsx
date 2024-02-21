import { useContext } from "react";
import "./navbar.css";
import { ProfileContext } from "../../context/ProfileContext";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api/auth";

const Navbar = ()=>{
    const navigate = useNavigate();

    const logoutHandle = async() =>{
        try{
            await logout();
            navigate('/');
        }catch(error){
            alert("server error");
        }
    }
    const {currentUser} = useContext(ProfileContext);
    return (
        <div className="navbar">
             <div className="container">
                <h1 onClick={()=>navigate("/home")}>Get-Internship</h1>
                <div className="imgContainer">
                    <img src="./images/coin.jpg" alt="" />
                    <p>{currentUser.coins} points</p>
                </div>


             </div>
             <button onClick={logoutHandle}>logout</button>

        </div>
    )
}

export default Navbar;
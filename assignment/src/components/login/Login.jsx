import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useContext, useState } from "react";
import { login } from "../../api/auth";
import { getProfile } from "../../api/profile";
import { ProfileContext } from "../../context/ProfileContext";

const Login=()=>{
    const [email,setEmail] = useState("");
    const [error,setError] = useState("");
    const [otp,setOtp] = useState("");
    const navigate = useNavigate();

    const {setCurrentUser} = useContext(ProfileContext);


    const handleClick = async() =>{
        try{
           await login({email:email, otp:otp});
           const data = await getProfile();
           setCurrentUser(data);
           navigate('/home');
        } catch(error){
            setError(error);
        }
        
    }


   return(
    <div className="login">
        <div className="container">
           <input type="text" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
           <input type="text" placeholder="Enter the OTP" value={otp} onChange={(e)=>setOtp(e.target.value)} />
            <button onClick={handleClick}>Login</button>
            <div className="signup">
            <p>Sign up? <span onClick={()=>navigate("/register")}>Register</span></p>
            </div>
        </div>

       

        {error&&error}

    </div>
   )
}

export default Login;
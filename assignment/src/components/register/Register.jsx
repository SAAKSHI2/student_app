import { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/auth";


const Register=()=>{
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [error,setError] = useState("");

    const handleChange = (e)=>{
        setEmail(e.target.value);
    }

    const handleClick = async() =>{
        try{
           await register(email);
           alert("OTP is send to your email");
           navigate('/');

        } catch(error){
            setError(error.message);
        }
        
    }

   
    return (
        <div className="register">
            <div className="container">
                <input type="text" placeholder="Enter your email" value={email} onChange={handleChange} />
                <button onClick={handleClick}>Register</button>
                <div className="signin">
                <p>Sign in? <span onClick={()=>navigate("/")}>Login</span></p>
                </div>
            </div>

            {error}

        </div>
    )
}

export default Register;
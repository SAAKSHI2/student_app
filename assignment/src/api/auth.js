import axios from "axios";

export const login = async(userDetails) => {
    console.log("login")

    const res = await axios.post(process.env.REACT_APP_BACKEND_URL + "api/auth/login",userDetails,{
        withCredentials:true
    });
    console.log(res.data);
             
}

export const register = async(userDetails)=>{
     await axios.post(process.env.REACT_APP_BACKEND_URL + "api/auth/register",{email : userDetails},{
            withCredentials:true
        });
        console.log("successfully registered");
}


export const logout= async()=>{

        const res= await axios.post(process.env.REACT_APP_BACKEND_URL + "api/auth/logout",null,
         {
             withCredentials:true
         });
    
}
import axios from "axios";

export const getProfile = async()=>{
    const res = await axios.get(process.env.REACT_APP_BACKEND_URL + "api/profile",{
        withCredentials:true
    });
    console.log(res.data);
    return res.data;
}

export const updateProfile = async(profileData)=>{
    console.log(profileData);
    const res = await axios.put(process.env.REACT_APP_BACKEND_URL + "api/profile", profileData,{
        withCredentials:true
    });

    console.log(res.data);
}
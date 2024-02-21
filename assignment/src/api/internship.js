import axios from "axios";

export const getInternship = async()=>{
    const res = await axios.get(process.env.REACT_APP_BACKEND_URL + "api/internship",{
        withCredentials:true
    });


    console.log(res.data);

    return res.data;
}


export const applyForInternship = async(internshipId)=>{
    const res = await axios.post(process.env.REACT_APP_BACKEND_URL + "api/internship", {internshipId : internshipId},{
        withCredentials:true
    });

}

export const getAppliedInternship = async(userId)=>{
    const res = await axios.get(process.env.REACT_APP_BACKEND_URL + "api/internship/" + userId ,{
        withCredentials:true
    });
    console.log(res.data);
    return res.data;
}


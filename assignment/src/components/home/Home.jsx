import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import  {logout} from "../../api/auth";
import "./home.css";
import InternshipCard from "../internshipCard/InternshipCard";
import { getInternship } from "../../api/internship";
import Navbar from "../navbar/Navbar";
import { ProfileContext } from "../../context/ProfileContext";
import { getAppliedInternship } from "../../api/internship";
import { getProfile } from "../../api/profile";

const Home=()=>{


    const {currentUser, setCurrentUser} = useContext(ProfileContext);
    const [internships,setInternships] = useState([]);
    const navigate = useNavigate();
    const [applied,setApplied] = useState(false);

    useEffect(()=>{
        
         const data = async()=>{
            try{
            const data = await getProfile();
            setCurrentUser(data);
            }catch(error){
                navigate("/");
            }

            const res = await getInternship();
            setInternships(res);

        }

        data();
        

    },[])

    const viewAppliedInternship = async()=>{

        try{
            console.log(currentUser);
            const data = await getAppliedInternship(currentUser._id);
            setApplied(true);
            setInternships(data);

        }catch(error){
            console.log(error.message);


        }

    }

    const goToHome = async()=>{
        setApplied(false)
        const res = await getInternship();
        setInternships(res);
    }


  return (
    <div className="home">
        <Navbar/>
        <div className="container">
            <div className="leftContainer">
                <img src="./images/user.png" alt="usersImage"/>
                <p>{currentUser.profile?currentUser.profile.name:null}</p>
                <button onClick={()=>navigate('/profile')}>Edit Profile</button>
                <span onClick={()=>{applied ? goToHome():viewAppliedInternship()}}>{applied?"Home Page":"View Applied Internships"}</span>

            </div>

            <div className="rightContainer">

                <div className="internshipDetails">
                    {internships.map((internship)=>{
                        return(
                            <InternshipCard internshipInfo={internship} key={internship._id} applied={applied}/>
                        )
                    })}
                </div>

            </div>

        </div>
        

    </div>
  )
}

export default Home;
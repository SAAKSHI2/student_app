import { useContext, useEffect, useState } from "react";
import "./profile.css";
import { ProfileContext } from "../../context/ProfileContext";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import Navbar from "../navbar/Navbar";
import { getProfile, updateProfile } from "../../api/profile";
import { useNavigate } from "react-router-dom";

const Profile = ()=>{


    const {currentUser, setCurrentUser} = useContext(ProfileContext);
    const navigate = useNavigate();

    useEffect(()=>{
        const data = async()=>{
            try{
            const data = await getProfile();
            setCurrentUser(data);
            } catch(error){
                navigate("/");
                
            }
            

            setProfileData(()=>({
                _id: currentUser._id,
                email: currentUser.email,
                otp: currentUser.otp,
                coins: currentUser.coins,
                profile: currentUser.profile,
                education: currentUser.education,
                projects: currentUser.projects,
                experiences: currentUser.experiences}))
        }

        data();
    },[])


    const [profileData,setProfileData] = useState({ _id: currentUser._id,
        email: currentUser.email,
        otp: currentUser.otp,
        coins: currentUser.coins,
        profile: currentUser.profile,
        education: currentUser.education,
        projects: currentUser.projects,
        experiences: currentUser.experiences});

    const handleChangeProfile=(e)=>{        
        setProfileData((prev)=>{return({...prev,profile:{...prev.profile,[e.target.name]:e.target.value}})})
      
    }

    const handleEducationChange = (key,value,index) =>{
        setProfileData(prevProfileData => {
            const updatedEducation = [...prevProfileData.education];
            updatedEducation[index] = {
              ...updatedEducation[index],
              [key]: value
            };
        
            return {
              ...prevProfileData,
              education: updatedEducation
            };
          });
    }

    const deleteEducation = (educationIndex) => {
        setProfileData((prevProfileData) => {
          const updatedEducation = prevProfileData.education.filter(
            (item, index) => index !== educationIndex
          );
      
          return {
            ...prevProfileData,
            education: updatedEducation
          };
        });
      };


      const handleExperienceChange = (key,value,index) =>{
        setProfileData(prevProfileData => {
            const update = [...prevProfileData.experiences];
            update[index] = {
              ...update[index],
              [key]: value
            };
        
            return {
              ...prevProfileData,
              experiences: update
            };
          });
    }

    const deleteExperience = (experienceIndex) => {
        setProfileData((prevProfileData) => {
          const updated = prevProfileData.experiences.filter(
            (item, index) => index !== experienceIndex
          );
      
          return {
            ...prevProfileData,
            experiences: updated
          };
        });
      };


      const handleProjectChange = (key,value,index) =>{
        setProfileData(prevProfileData => {
            const update = [...prevProfileData.projects];
            update[index] = {
              ...update[index],
              [key]: value
            };
        
            return {
              ...prevProfileData,
              projects: update
            };
          });
    }

    const deleteProject= (projectIndex) => {
        setProfileData((prevProfileData) => {
          const update = prevProfileData.projects.filter(
            (item, index) => index !== projectIndex
          );
      
          return {
            ...prevProfileData,
            projects: update
          };
        });
      };


    const handleUpdate=async()=>{
        try{
              await updateProfile(profileData);
              alert("updated successfully");
              const data = await getProfile();
              setCurrentUser(data);
        } catch(error){
            console.log(error);
            alert(error);
        }
    }

    const handleEducationAddButton = ()=>{
        setProfileData((prev)=>({...prev,education : [...prev.education,{type:"",name:"",startDate:"",endDate:""}]}))
    }
    const handleProjectsAddButton = ()=>{
        setProfileData((prev)=>({...prev,education : [...prev.projects,{description:"",name:"",solo:"",link:""}]}))
    }
    const handleExperienceAddButton = ()=>{
        setProfileData((prev)=>({...prev,experiences : [...prev.experiences,{type:"",companyName:"",companyWebsite:"", role : "",coverLetter:"",startDate:"",endDate:""}]}))
    }


   
    return(
    <div className="profileDetails">
        
        <Navbar/>
        <div className="personal_details">
            <h1>Personal Details</h1>
            <input type="text" placeholder="Name" onChange={handleChangeProfile} name="name" value={profileData.profile?profileData.profile.name:""}/>
            <input type="text" placeholder="Mobile" onChange={handleChangeProfile} name="mobile" value={profileData.profile?profileData.profile.mobile:""}/>
            <input type="text" placeholder="linkedinLink" onChange={handleChangeProfile} name="linkedinLink" value={profileData.profile?profileData.profile.linkedinLink:""}/>
            <input type="text" placeholder="githubLink" onChange={handleChangeProfile} name="githubLink" value={profileData.profile?profileData.profile.githubLink:""}/>
            <input type="text" placeholder="resumeLink" onChange={handleChangeProfile} name="resume" value={profileData.profile?profileData.profile.resume:""}/>
        </div>

        <div className="education">
        <h1>Education </h1>
            {profileData && profileData.education.map((education,index)=>{
                return (<Education education={education} handleChange={handleEducationChange} index={index} deleteEducation={deleteEducation}/>)
            })}
            <button onClick={handleEducationAddButton} className="addButton">Add</button>


        </div>

        <div className="projects">
        <h1>Projects</h1>
            {profileData && profileData.projects.map((project,index)=>{
                return (<Projects project={project} handleChange={handleProjectChange} index={index} deleteProject={deleteProject}/>)
            })}

           <button onClick={handleProjectsAddButton} className="addButton">Add</button>


        </div>


        <div className="experience">
        <h1>Experience</h1>
            {profileData && profileData.experiences.map((experience,index)=>{
                return (<Experience experience={experience} handleChange={handleExperienceChange} index={index} deleteExperience={deleteExperience}/>)
            })}

           <button className="addButton" onClick={handleExperienceAddButton}>Add</button>


        </div>


        <div className="update">
            <button className="updateButton" onClick={handleUpdate}>Update</button>
        </div>
      
        
    </div>)
}

export default Profile;
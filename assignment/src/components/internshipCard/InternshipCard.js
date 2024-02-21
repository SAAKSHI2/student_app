import { useContext } from "react";
import { applyForInternship } from "../../api/internship";
import "./internshipCard.css";
import { ProfileContext } from "../../context/ProfileContext";

const InternshipCard=({internshipInfo, applied})=>{
    
    const {currentUser, setCurrentUser} = useContext(ProfileContext);
    

    const handleClick = async() =>{
        try{
            if(currentUser.coins>=50){
            setCurrentUser((prev)=>({...prev,coins : currentUser.coins-50}));
            await applyForInternship(internshipInfo._id);
            alert("Applied!! you can see the Applied application in applied section");
            } else{
                alert("You don't have suffiecient coins to apply");

            }


        }catch(error){
            console.log(error);
        }

    }


    return (
        <div className="internshipContainer">
          
            <div className="wrapper">
                <div className="details">
                    <div className="info">
                        <h1>{internshipInfo.roleName}</h1>
                        <p>{internshipInfo.companyName}</p>
                        <p>location : {internshipInfo.location}</p>
                    </div>

                    <div className="companyLogo">
                        <img src={internshipInfo.companyLogo}/>
                    </div>
                </div>
                <div className="otherInfo">
                    <div className="right">
                        <p>{internshipInfo.start_date}</p>
                        <p>|</p>
                        <p>{internshipInfo.stipend}</p>
                    </div>
                    <div className="left">
                        <button onClick={handleClick} disabled={applied}>{applied?"Applied":"Apply"}</button>
                    </div>

                </div>
            </div>


        </div>

    )

}

export default InternshipCard;
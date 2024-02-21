const Experience= ({experience, handleChange,index, deleteExperience}) =>{
    return(
        <div className="experience_details">
            <input type="text" name="type" placeholder="Internship or Job" value={experience.type} onChange={(e)=>handleChange(e.target.name,e.target.value,index)}/>
            <input type="text" name="companyName" placeholder="Company Name" value={experience.companyName} onChange={(e)=>handleChange(e.target.name,e.target.value,index)}/>
            <input type="text" name="companyWebsite" value={experience.companyWebsite} placeholder="Companies Website" onChange={(e)=>handleChange(e.target.name,e.target.value,index)}/>
            <input type="text" name="role" value={experience.role} placeholder="Your role in the company" onChange={(e)=>handleChange(e.target.name,e.target.value,index)}/>
            <input type="text" name="startDate" placeholder="start date" value={experience.startDate} onChange={(e)=>handleChange(e.target.name,e.target.value,index)}/>
            <input type="text" name="endDate" value={experience.endDate} placeholder="End date" onChange={(e)=>handleChange(e.target.name,e.target.value,index)}/>
            <input type="text" name="coverLetter" value={experience.coverLetter} placeholder="Add cover letter" onChange={(e)=>handleChange(e.target.name,e.target.value,index)}/>
            <button onClick={()=>deleteExperience(index)}>Delete</button>
        </div>
    )
}

export default Experience;
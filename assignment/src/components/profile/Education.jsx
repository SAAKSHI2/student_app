

const Education = ({education, handleChange , index, deleteEducation}) =>{
    return(
        <div className="education_details">
            <input type="text" name="type" placeholder="College/School" value={education.type} onChange={(e)=>handleChange(e.target.name,e.target.value,index)}/>
            <input type="text" name="name" placeholder="Name of college/School" value={education.name} onChange={(e)=>handleChange(e.target.name,e.target.value,index)}/>
            <input type="text" name="startDate" value={education.startDate} placeholder="start_Date yyyy/mm/dd" onChange={(e)=>handleChange(e.target.name,e.target.value,index)}/>
            <input type="text" name="endDate" value={education.endDate} placeholder="End_Date yyyy/mm/dd" onChange={(e)=>handleChange(e.target.name,e.target.value,index)}/>
            <button onClick={()=>deleteEducation(index)}>Delete</button>
        </div>
    )
}

export default Education;
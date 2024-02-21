
const Projects= ({project, handleChange , index, deleteProject}) =>{

   
    return(
        <div className="project_details">
            <input type="text" name="name" placeholder="Name of project" value={project.name} onChange={(e)=>handleChange(e.target.name,e.target.value,index)}/>
            <input type="text" name="description" placeholder="Description of Porject" value={project.description} onChange={(e)=>handleChange(e.target.name,e.target.value,index)}/>
            <input type="text" name="solo" value={project.solo} placeholder="Done solo/Group" onChange={(e)=>handleChange(e.target.name,e.target.value,index)}/>
            <input type="text" name="link" value={project.link} placeholder="add project link" onChange={(e)=>handleChange(e.target.name,e.target.value,index)}/>
            <button onClick={()=>deleteProject(index)}>Delete</button>
        </div>
    )
}

export default Projects;
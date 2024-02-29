import "./projectexample.css"
import ProjectTemplate from "./projecttemplate";
import projects from "./projects.json"
import MediaQuery from "react-responsive";

function ProjectsList() {


    return(
        <div className="projects-container" >
            <div className="projects-textcontainer">
                <p className="projects-sub">Projects I have worked on:</p>
                <div className="projects-list">
                    ${projects.map((p) =>{
                        return(<ProjectTemplate key={p.id} id={p.id} name={p.projectName} hint={p.projectInfo} desc={p.projectDesc} colors={p.projectColors} images={p.projectImages}/>)
                    })}
                </div>
            </div>
            <div><p className="myloc">PROJECTS</p></div>
        </div>
    )
}
export default ProjectsList;
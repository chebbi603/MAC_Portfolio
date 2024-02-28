import "./projectexample.css"
import ProjectTemplate from "./projecttemplate";
import projects from "./projects.json"
import MediaQuery from "react-responsive";

function ProjectsList() {


    return(
        <div className="projects-container" >
            <div className="projects-textcontainer">
                <MediaQuery query="(max-device-width: 800px)">
                <p className="projects-sub-mobile">Projects I have worked on:</p>
                </MediaQuery>
                <MediaQuery query="(min-device-width: 800px)">
                <p className="projects-sub">Projects I have worked on:</p>
                </MediaQuery>
                <div className="projects-list">
                    ${projects.map((p) =>{
                        return(<ProjectTemplate id={p.id} name={p.projectName} hint={p.projectInfo} desc={p.projectDesc} colors={p.projectColors} images={p.projectImages}/>)
                    })}
                </div>
            </div>
            <div><p className="myloc">PROJECTS</p></div>
        </div>
    )
}
export default ProjectsList;
import "./projectexample.css"
import ProjectTemplate from "./projecttemplate";

function ProjectsList() {
    return(
        <div className="projects-container" >
            <div className="projects-textcontainer">
                <div className="projects-list">
                    <ProjectTemplate/>
                    <ProjectTemplate/>
                    <ProjectTemplate/>
                    <ProjectTemplate/>
                    <ProjectTemplate/>
                </div>
            </div>
            <div><p className="myloc">PROJECTS</p></div>
        </div>
    )
}
export default ProjectsList;
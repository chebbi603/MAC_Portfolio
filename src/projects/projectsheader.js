import "./projectsheader.css"
import projectsheaderimg from "../assets/projectsheader.png"

function ProjectsHeader() {
    return(
        <div className="projectsheader-container" >
            <div className="projectsheader-content">
                <div className="projectsheader-text"><p className="projectsheader-title">PROJECTS</p></div>
                <div className="projectsheader-imagecontainer">
                    <img src={projectsheaderimg} className="projectsheader-image" alt="prjhdrimg"></img>
                </div>
            </div>
            <div><p className="myloc">PROJECTS</p></div>
        </div>
    )
}
export default ProjectsHeader;
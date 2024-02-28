import "./projectsheader.css"
import projectsheaderimg from "../assets/projectsheader.png"
import MediaQuery from "react-responsive";

function ProjectsHeader() {
    return(
        <div className="projectsheader-container">
            <div className="projectsheader-content">
                <div className="projectsheader-text">
                    <MediaQuery query="(min-device-width: 700px)">
                        <p className="projectsheader-title">PROJECTS</p>
                    </MediaQuery>
                    <MediaQuery query="(max-device-width: 700px)">
                        <p className="projectsheader-title-mobile">PROJECTS</p>
                    </MediaQuery>
                    </div>
                <div className="projectsheader-imagecontainer">
                    <MediaQuery query="(min-device-width: 700px)">
                        <img src={projectsheaderimg} className="projectsheader-image" alt="prjhdrimg"></img>
                    </MediaQuery>
                    <MediaQuery query="(max-device-width: 700px)">
                        <img src={projectsheaderimg} className="projectsheader-image-mobile" alt="prjhdrimg"></img>
                    </MediaQuery>
                </div>
            </div>
            <div><p className="projheader-myloc">PROJECTS</p></div>
        </div>
    )
}
export default ProjectsHeader;
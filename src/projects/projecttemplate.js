import {PropTypes} from "prop-types"
import "./projectexample.css"

ProjectTemplate.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    hint: PropTypes.string,
    desc: PropTypes.string,
    images: PropTypes.string
}

function ProjectTemplate({id,name,hint,desc,images}) {
    //console.log(images);
    const imagesArray = images.split(' ');

    return (

        <div className="project-container">
            <div className="project-main">
            <p className="project-title">{name}</p>
            <p className="project-info">{hint}</p>
            </div>
            <p className="project-description">{desc}</p>
            <div className="project-images" style={{gridTemplateColumns: `${imagesArray.length} fr`, gridAutoRows:"max-content"} }>
                    {imagesArray.map((i,index) =>{
                        return(
                        <div className="project-image-container" key={index}>
                        <div className="project-image-img">
                            <img className="pig" alt="img" src={require(""+i)}>
                            </img>
                        </div>
                    </div>)
                    })}
            </div>
        </div>
    )
}
export default ProjectTemplate;
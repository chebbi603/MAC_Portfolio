import { useEffect } from "react";
import {PropTypes} from "prop-types"
import "./projectexample.css"

ProjectTemplate.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    hint: PropTypes.string,
    desc: PropTypes.string,
    colors: PropTypes.string,
    images: PropTypes.string
}

function ProjectTemplate({id,name,hint,desc,colors,images}) {
    //console.log(images);
    const colorsArray = colors.split(' ');
    const imagesArray = images.split(' ');
    useEffect(() => {
    const items = document.querySelectorAll(".project-image-container");
    items.forEach(item => {
        // STILL A BUGGY PLACE
        const photo = item.querySelector('.project-image-img');
        item.querySelector('.project-image-icon').addEventListener('mousemove',function (e){
            photo.classList.add('active');
            item.querySelector(".project-image-icon").classList.add('active');
            const cursorX = e.pageX, cursorY = e.pageY;
            const itemLeft = item.getBoundingClientRect().left,
                  itemTop = item.getBoundingClientRect().top;
            const photoPosX = cursorX - itemLeft, photoPosY = cursorY - itemTop - window.scrollY;
            photo.style.top = `${photoPosY-620}px`;
            photo.style.left = `${photoPosX+20}px`;
        })
        item.addEventListener('mouseout',function (e){
            photo.classList.remove('active');
            item.querySelector(".project-image-icon").classList.remove('active');
        })
    })
})
    return (

        <div className="project-container">
            <p className="project-title">{name}</p>
            <p className="project-info">{hint}</p>
            <p className="project-description">{desc}</p>

            <div className="project-images">
                    {imagesArray.map((i,index) =>{
                        //console.log(colorsArray[index]);
                        return(<div className="project-image-container" key={index}>
                        <div className="project-image-icon" style={{background: ""+colorsArray[index]}}></div>
                        <div className="project-image-img">
                            <img alt="img" src={require(""+i)}>
                            </img>
                        </div>
                    </div>)
                    })}
            </div>
        </div>
    )
}
export default ProjectTemplate;
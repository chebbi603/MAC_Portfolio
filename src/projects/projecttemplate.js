import { useEffect } from "react";
import "./projectexample.css"

function ProjectTemplate() {

    useEffect(() => {
    const items = document.querySelectorAll(".project-image-container");
    console.log(items);
    items.forEach(item => {
        // STILL A BUGGY PLACE
        const photo = item.querySelector('.project-image-img');
        const parent = item.parentElement;
        item.querySelector('.project-image-icon').addEventListener('mousemove',function (e){
            photo.classList.add('active');
            parent.classList.add('active');
        })
        item.addEventListener('mouseout',function (e){
            photo.classList.remove('active');
        })
    })
})
    return (

        <div className="project-container">
            <p className="project-title">Project Name</p>
            <p className="project-info">UI Design</p>
            <p className="project-description">Dr Klini is an Android application that we created during the CraftHack hackathon organized by CraftHub Hungary. It was a great opportunity to invent a smart solution that can help improve the Hungarian health system. Using machine learning model and a wide database provided by the Hungarian Government, we were able to organize and schedule medical appointments while taking into consideration how critical his medical case is. </p>

            <div className="project-images">
                    <div className="project-image-container">
                        <div className="project-image-icon"></div>
                        <div className="project-image-img">
                            <img alt="img" src="https://images.unsplash.com/photo-1706562017529-9224dc473ff6?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                            </img>
                        </div>
                    </div>
                    <div className="project-image-container">
                        <div className="project-image-icon"></div>
                        <div className="project-image-img">
                            <img alt="img" src="https://images.unsplash.com/photo-1706562017529-9224dc473ff6?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                            </img>
                        </div>
                    </div>
                    <div className="project-image-container">
                        <div className="project-image-icon"></div>
                        <div className="project-image-img">
                            <img alt="img" src="https://images.unsplash.com/photo-1706562017529-9224dc473ff6?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                            </img>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default ProjectTemplate;
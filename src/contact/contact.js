import "./contact.css"
import upworkimg from "../assets/upworkprofile.png"
import dribbbleimg from "../assets/dribbbleprofile.png"
import logosmall from "../assets/logo_small.svg"
import fb from "../assets/fb.svg";
import lin from "../assets/linkedin.svg";
import dri from "../assets/dribbble.svg";
import upw from "../assets/upwork.svg";
import insta from "../assets/insta.svg";

import "../home.css"
import { useEffect } from "react";

function Contact() {
    return(
        <div className="contact-container" >
            <div className="contact-content">
                <div className="contact-text">
                    <p className="contact-title">REACH OUT</p>
                    <p className="projectsheader-p">You can find me on:</p>
                    <div className={"contact-social-container"} >
                        <div className={"socials"}>
                            <img className={"social-icon"} src={fb}/>
                            <img className={"social-icon"} src={lin}/>
                            <img className={"social-icon"} src={dri}/>
                            <img className={"social-icon"} src={upw}/>
                            <img className={"social-icon"} src={insta}/>
                        </div>
                    </div>
                    </div>
                    <img src={logosmall} className="header-logo" alt={"byMe"}/>
                    <div><p className="myloc">Designed & Developed with 💖 by Chebbi Mohamed Ayoub</p></div>
                <div className="contact-imagecontainer">
                    <img src={upworkimg} className="contact-image-l" alt="prjhdrimg"></img>
                    <img src={dribbbleimg} className="contact-image-r" alt="prjhdrimg"></img>
                </div>
            </div>
        </div>
    )
}
export default Contact;
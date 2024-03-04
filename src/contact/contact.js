import "./contact.css"
import logosmall from "../assets/logo_small.svg"
import fb from "../assets/fb.svg";
import lin from "../assets/linkedin.svg";
import dri from "../assets/dribbble.svg";
import upw from "../assets/upwork.svg";
import insta from "../assets/insta.svg";

import "../home.css"
import { useEffect } from "react";
import MagneticButton from "../gsap";
import MediaQuery from "react-responsive";

function Contact() {
    return (
        <div className="contact-container" >
            <div className="contact-content">
                <div className="contact-text">
                    <p className="contact-title">CONTACT</p>
                    <p className="projectsheader-p">You can find me on</p>
                    
                    <MediaQuery query="(min-device-width: 700px)">
                        <div className={"social-container"} >
                            
                            <MagneticButton>
                            <div className={"socials"}>
                                <a className={"social-link"} target="_blank" href="https://www.facebook.com/chebbimedayoub">
                                    <img className={"social-icon"} src={fb} />
                                </a>
                                <a className={"social-link"} target="_blank" href="https://www.linkedin.com/in/mohamed-ayoub-chebbi/">
                                    <img className={"social-icon"} src={lin} /></a>
                                <a className={"social-link"} target="_blank" href="https://www.dribbble.com/chebbimedayoub">
                                    <img className={"social-icon"} src={dri} />
                                </a>
                                <a className={"social-link"} target="_blank" href="https://www.upwork.com/freelancers/ayoubc4">
                                    <img className={"social-icon"} src={upw} /></a>
                                <a className={"social-link"} target="_blank" href="https://www.instagram.com/chebbimedayoub/">
                                    <img className={"social-icon"} src={insta} /></a>
                            </div>
                            
                        </MagneticButton>
                        </div>
                    </MediaQuery>

                    <MediaQuery query="(max-device-width: 700px)">
                        <div className={"social-container"} >
                            <div className={"socials"}>
                                <a className={"social-link"} target="_blank" href="https://www.facebook.com/chebbimedayoub">
                                    <img className={"social-icon"} src={fb} />
                                </a>
                                <a className={"social-link"} target="_blank" href="https://www.linkedin.com/in/mohamed-ayoub-chebbi/">
                                    <img className={"social-icon"} src={lin} /></a>
                                <a className={"social-link"} target="_blank" href="https://www.dribbble.com/chebbimedayoub">
                                    <img className={"social-icon"} src={dri} />
                                </a>
                                <a className={"social-link"} target="_blank" href="https://www.upwork.com/freelancers/ayoubc4">
                                    <img className={"social-icon"} src={upw} /></a>
                                <a className={"social-link"} target="_blank" href="https://www.instagram.com/chebbimedayoub/">
                                    <img className={"social-icon"} src={insta} /></a>
                            </div>
                        </div>
                    </MediaQuery>


                </div>
                    <div className="final-contact">
                        <img src={logosmall} className="header-logo" alt={"byMe"} />
                        <p className="contact-myloc">Designed & Developed with 💖 by Chebbi Mohamed Ayoub</p>
                    </div>
            </div>
            </div>
            )
}
            export default Contact;
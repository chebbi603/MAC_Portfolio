// noinspection JSVoidFunctionReturnValueUsed

import "./home.css"
import landingimg from "../src/assets/photo.png";
import logosmall from "../src/assets/logo_small.svg";
import descstar from "../src/assets/star.svg";
import fb from "../src/assets/fb.svg";
import lin from "../src/assets/linkedin.svg";
import dri from "../src/assets/dribbble.svg";
import upw from "../src/assets/upwork.svg";
import insta from "../src/assets/insta.svg";

function Home(){

    return(
        <div className="home">
            <div className={"home-content"}></div>
            <div className="landing-container">
                <img src={landingimg} className="landing-img" alt={"byMalek"}/>
                <div className="overlay"></div>
            </div>
            <div className={"home-content-data"}>
            <div className={"header"}>
                <img src={logosmall} className="header-logo" alt={"byMe"}/>
                <p className={"header-text"}>Portfolio</p>
            </div>
            <div className={"content"}>
            <div className={"esmi"}  >
                <p className={"esmi-lakab"}>Chebbi</p>
                <p className={"esmi-esm"}>Mohamed Ayoub</p>
            </div>
            <div className={"role"} >
                <img className={"desc-star"} src={descstar}/>
                <p className={"desc-text"}>Freelance UX/UI Designer & Developer</p>
            </div>
            <div className={"social-container"} >
            <div className={"socials"}>
                <img className={"social-icon"} src={fb}/>
                <img className={"social-icon"} src={lin}/>
                <img className={"social-icon"} src={dri}/>
                <img className={"social-icon"} src={upw}/>
                <img className={"social-icon"} src={insta}/>
            </div>
            </div>
            </div>
            </div>
        </div>
    );

}


export default Home ;
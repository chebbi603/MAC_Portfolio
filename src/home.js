// noinspection JSVoidFunctionReturnValueUsed

import "./home.css"
import landingimg from "../src/assets/photo.png";
import logosmall from "../src/assets/logo_small.svg";
import descstar from "../src/assets/star.svg";
import fb from "../src/assets/fb.svg";
import lin from "../src/assets/linkedin.svg";
import dri from "../src/assets/dribbble.svg";


function Home(){

    return(
        <div className="home">
            <div className={"home-content"}></div>
            <div className="landing-container">
                <img src={landingimg} className="landing-img" alt={"byMalek"}/>
            </div>
            <div className={"home-content-data"}>
            <div className={"header"}>
                <img src={logosmall} className="header-logo" alt={"byMalek"}/>
                <p className={"header-text"}>Awesomeness</p>
            </div>
            <div className={"content"}>
            <div className={"esmi"}  >
                <p className={"esmi-lakab"}>Chebbi</p>
                <p className={"esmi-esm"}>Mohamed Ayoub</p>
            </div>
            <div className={"role"} >
                <img className={"desc-star"} src={descstar}/>
                <p className={"desc-text"}>Freelance</p>
                <p className={"desc-role"}></p>
            </div>
            <div className={"social-container"} >
            <div className={"socials"}>
                <img className={"social-icon"} src={fb}/>
                <img className={"social-icon"} src={lin}/>
                <img className={"social-icon"} src={dri}/>
            </div>
            </div>
            </div>
            </div>
        </div>
    );

}


export default Home ;
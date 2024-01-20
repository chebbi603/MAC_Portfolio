import Lenis from "@studio-freight/lenis";
import "./home.css"
import landingimg from "../src/assets/photo.png";
import logosmall from "../src/assets/logo_small.svg";
import {gsap} from "gsap";
function Home(){


    return(
        <div className="Home">
            <div className="landing-container">
                <img src={landingimg} className="landing-img" alt={"byMalek"}/>
            </div>
            <div className={"header"}>
                <img src={logosmall} className="header-img" alt={"byMalek"}/>
                <p className={"header-text"}>Awesomeness</p>
            </div>
            <div className={"esmi"}>
                <p className={"esmi-lakab"}>Chebbi</p>
                <p className={"esmi-esm"}>Mohamed Ayoub</p>
            </div>
        </div>
    );
}
export default Home ;
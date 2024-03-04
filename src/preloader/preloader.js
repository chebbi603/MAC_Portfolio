import "./preloader.css"
import logosmall from "../../src/assets/logo_small.svg";
import preloaderpic from "../../src/assets/preloader.webp";

function Preloader() {
    return(
        <div className="preloader-container">
            <img src={preloaderpic} className="preloader-img"></img>
            <div className="preloader-content">
                <div className="preloader-text">
                    
                    <img src={logosmall} className="preloader-logo" alt={"byMe"}/>
                    <p className="preloader-title">Welcome to<br/> Mohamed Ayoub Chebbi's<br/>Portfolio</p>
                </div>
            </div>
        </div>
    )
}
export default Preloader;
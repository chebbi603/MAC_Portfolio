import logo from './logo.svg';
import './App.css';
import Lenis from "@studio-freight/lenis";
import Home from "./home";
import Typekit from "react-typekit/lib/Typekit";
import {gsap} from "gsap";

function App() {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    //console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  let lt = gsap.timeline({
    scrollTrigger:{
      trigger:'.landing-img',
      start:'top 10%',
      end:'+=200',
      scrub:true,
      markers:true,
      toggleActions:'repeat pause reverse pause'
    }
  })
  lt.to('.landing-img',{y:-50,duration:8})


  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

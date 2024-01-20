import logo from '../../mac_portfolio/src/logo.svg';
import './App.css';
import Lenis from "@studio-freight/lenis";
import Home from "./home";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect} from "react";

function App() {


  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, (1.001 - Math.pow(2,-10*t)))
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)



function shakeitup(classname){
  document.querySelectorAll(classname).forEach(btn=>{
    var rect = btn.getBoundingClientRect();
    btn.addEventListener('mousemove',(e)=>{
      let x = e.offsetX
      let y = e.offsetY-window.scrollY
      let btnWidth = btn.clientWidth;
      let btnHeigth = btn.clientHeight;
      let transX = (x-btnWidth/2)/4;
      let transY = (y-btnHeigth/2)/4;
      btn.style.transform = `translateX(${transX*.15}px) translateY(${transY*.15 - 50}px) scale(1.05)`

    })
    btn.addEventListener('mouseout', (e)=>{
      btn.style.transform=``;
      window.scrollBy(0, 0.0001);
    })
  });
}


  useEffect(() => {
    // shakeitup('.social-container');
    gsap.to('.social-container', {
      scrollTrigger: {
        trigger: '.social-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      y: -100, // Adjust the value for the desired effect
    });
  gsap.to('.esmi',{
    scrollTrigger: {
      trigger: '.esmi',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
    y: -100, // Adjust the value for the desired effect
  });
    gsap.to('.role', {
      scrollTrigger: {
        trigger: '.role',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      y: -100, // Adjust the value for the desired effect
    });
    gsap.to('.landing-img', {
      scrollTrigger: {
        trigger: '.landing-img',
        start: 'top',
        end: 'bottom',
        scrub: true,
      },
      y: -100, // Adjust the value for the desired effect
    });

})


  return (
    <div className="App">
      <header className="App-header">
        <section className={"section1"}>
          <Home/>
        </section>
        <section data-speed={"2"} className={"section2"}>
          <img src={logo} className="Applogo" alt="logo" />
          <img src={logo} className="Applogo" alt="logo" />
          <img src={logo} className="Applogo" alt="logo" />
          <img src={logo} className="Applogo" alt="logo" />
          <img src={logo} className="Applogo" alt="logo" />
          <img src={logo} className="Applogo" alt="logo" />
        </section>
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

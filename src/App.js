import logo from '../../mac_portfolio/src/logo.svg';
import './App.css';
import Lenis from "@studio-freight/lenis";
import Home from "./home";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef,useLayoutEffect} from "react";
import AboutMe from './aboutme/aboutme';
import Contact from './contact/contact';
import Expertise from './expertise/expertise';
import ProjectsHeader from './projects/projectsheader';
import AboutMeMobile from  './aboutme/aboutme_mobile';
import ProjectsList from './projects/projectexample';
import MediaQuery from 'react-responsive';
import AnimatedCursor from 'react-animated-cursor';
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
  const el = useRef();
  const q = gsap.utils.selector(el);


function shakeitup(classname){
  document.querySelectorAll(classname).forEach(btn=>{
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
    })
  });
}



  useLayoutEffect(() => {
    //shakeitup('.social-container');
    let ctx = gsap.context(() => {
    
 
    gsap.to('.landing-container', {
      scrollTrigger: {
        trigger: '.landing-img',
        start: 'top',
        end: 'bottom',
        scrub: true,
      },
      y: -150, // Adjust the value for the desired effect
    });
    gsap.to('.aboutme-sec1', {
      scrollTrigger: {
        trigger: '.aboutme-textcontainer',
        pin: '.aboutme-sec1',
        start: 'top 20%',
        end: 'bottom 80%',
        scrub: true,
      },
      y:-100,
    });
   
    gsap.to('.expertise-sec1', {
      scrollTrigger: {
        trigger: '.expertise-textcontainer',
        pin: '.expertise-sec1',
        start: 'top 5%',
        end: 'bottom 20%',
        scrub: true,
      },
      y:-100,
    });

  
    q(".expertiseelement").forEach((circle) => {
     
    gsap.fromTo(circle,
        {
          opacity:0,
          x:-40,
        }, 
        {
          scrollTrigger: {
            trigger: circle,
            start: 'top 100% bottom',
            end:'top 70%',
            scrub: true,
          },
          x:0,
          delay:0.5,
          opacity:1,
        }
    );
    gsap.fromTo(circle,
      {
        opacity:1,
        x:0,
      } ,
      {
      scrollTrigger: {
        trigger: circle,
        start: 'top 30% top',
        end:'top 15%',
        scrub:true,
      },
      x:-50,
      opacity:0,
      duration:0.5,
    });
  });

  gsap.fromTo(".projectsheader-text",{
    opacity:0,
  },
  {
    scrollTrigger: {
      trigger: ".projectsheader-content",
      start: 'top 80% bottom 10%',
      end:'bottom 30%',
      scrub:true,
    },
    opacity:1,
    y:600,
    zIndex:5,
  })

  gsap.fromTo(".contact-text",{
    opacity:0,
  },
  {
    scrollTrigger: {
      trigger: ".contact-content",
      start: '20% 60%',
      end:'bottom 90%',
      scrub:true,
    },
    opacity:1,
    y:-100,
    zIndex:5,
  })

  gsap.fromTo(".projectsheader-image",
    {
      clipPath:"polygon(30% 10%, 70% 10%, 70% 90%, 30% 90%)"
    } ,
    {
    scrollTrigger: {
      trigger: ".projectsheader-container",
      start: 'top 80% ',
      end:'bottom 15% ',
      scrub:true,
    },
    clipPath: "polygon(5% 10%, 95% 10%, 95% 90%, 5% 90%)",
  });

  gsap.fromTo(".projectsheader-image-mobile",
    {
      clipPath:"polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%)"
    } ,
    {
    scrollTrigger: {
      trigger: ".projectsheader-container",
      start: 'top 60% ',
      end:'bottom 15% ',
      scrub:true,
    },
    clipPath: "polygon(37% 0%, 63% 0%, 63% 100%, 37% 100%)",
  });

  // Projects Animation
  gsap.fromTo(".projects-sub",
    {
      opacity:0,
      x:50,
    }, 
    {
      scrollTrigger: {
        trigger: ".projects-sub",
        start: 'top 100% bottom',
        end:'top 10%',
        scrub: true,
      },
      x:0,
      y:0,
      delay:2,
      opacity:1,
    }
);
  gsap.to(".projects-sub",{
    scrollTrigger: {
    trigger: '.projects-textcontainer',
    pin: '.projects-sub',
    start: 'top 5%',
    end: 'bottom 20%',
    scrub: true,
  },
  y:-100,

  })

  //contact page

  //

  q(".project-container").forEach((circle) => {
     
    gsap.fromTo(circle,
        {
          opacity:0,
          x:50,
        }, 
        {
          scrollTrigger: {
            trigger: circle,
            start: 'top 100% bottom',
            end:'top 30%',
            scrub: true,
          },
          x:0,
          delay:2,
          opacity:1,
        }
    );
    gsap.fromTo(circle,
      {
        opacity:1,
        x:0,
      } ,
      {
      scrollTrigger: {
        trigger: circle,
        start: 'bottom 70%',
        end:'bottom 30%',
        scrub:true,
      },
      x:-50,
      opacity:0,
    });
  });


  })
  
  return () => ctx.revert();
}, []);


  return (
    <div className="App" ref={el}>
      <header className="App-header">
      <AnimatedCursor backgroundColor={'#000'} innerSize={8} outerSize={25} innerScale={1} outerScale={1.7} hasBlendMode={true} outerAlpha={0} zIndex={500} 
          outerStyle={{
            mixBlendMode: 'difference',
            backgroundColor:'#fff'
            
          }}
          innerStyle={{
            
            mixBlendMode: 'difference',
            backgroundColor:'#fff'
          }}
          clickables={[
            'a',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
        <section className={"section1"}>
          <Home/>
        </section>
        <section>
          <MediaQuery query="(max-device-width: 1000px)">
          <AboutMeMobile/>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 1000px)">
          <AboutMe/>
          </MediaQuery>
        </section>
        <Expertise/>
        <ProjectsHeader/>
        <ProjectsList/>
        <Contact/>
      </header>
      
    </div>
  );
}

export default App;

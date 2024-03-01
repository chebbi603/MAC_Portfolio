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

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Helmet } from 'react-helmet';

function App() {
 //FIREBASE
  const firebaseConfig = {
    apiKey: "AIzaSyAQLQ60T3PO473UgPloowae2SEASfLwST8",
    authDomain: "mac-portfolio-3a56b.firebaseapp.com",
    projectId: "mac-portfolio-3a56b",
    storageBucket: "mac-portfolio-3a56b.appspot.com",
    messagingSenderId: "569080617747",
    appId: "1:569080617747:web:78ff432fa0ba47358698e6",
    measurementId: "G-VJYQN03EW8"
  };
//
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

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
  
  var sections = gsap.utils.toArray(".project-main");
  var containers = gsap.utils.toArray(".project-container");
  sections.forEach((container,index) => {
    gsap.fromTo(container,
      {
        opacity:0,
        y:100,
      }, 
      {
        scrollTrigger: {
          trigger: container,
          start: 'bottom 100%',
          end:'top 60%',
          scrub: true,
        },
        y:0,
        opacity:1,
      }
  );
  gsap.fromTo(container,
    {
      y:0,
    }, 
    {
      scrollTrigger: {
        trigger: containers[index],
        start: 'top 10%',
        pin:container,
        end:'60% top 40%',
        scrub: true,
      },
      y:-50,
    }
);

    });

  
  //contact page

  q(".project-image-container").forEach((circle) => {
     
    gsap.fromTo(circle,
        {
          opacity:0,
          y:50,
        }, 
        {
          scrollTrigger: {
            trigger: circle,
            start: 'top 100% bottom',
            scrub:true,
            end:'top 70%',
          },
          y:-50,
          delay:2,
          opacity:1,
        }
    );
    gsap.fromTo(circle,
      {
        y:-50,
        opacity:1,
      } ,
      {
      scrollTrigger: {
        trigger: circle,
        start: 'bottom 90%',
        end:'bottom 60%',
        scrub:true,
      },
      y:-100,
      opacity:0,
    });
  });

  q(".project-description").forEach((circle) => {
     
    gsap.fromTo(circle,
        {
          opacity:0,
          y:100,
        }, 
        {
          scrollTrigger: {
            trigger: circle,
            start: 'top 100% bottom',
            scrub:true,
            end:'top 70%',
          },
          y:0,
          delay:2,
          opacity:1,
        }
    );
    gsap.fromTo(circle,
      {
        opacity:1,
        y:0,
      } ,
      {
      scrollTrigger: {
        trigger: circle,
        start: 'bottom 40%',
        end:'bottom 20%',
        scrub:true,
      },
      y:-10,
      opacity:0,
    });
  });



  })
  
  return () => ctx.revert();
}, []);


  return (
    <div className="App" ref={el}>
      <Helmet>
        <meta></meta>
      </Helmet>
      <header className="App-header">
      <MediaQuery query="(min-device-width: 700px)">
          <AnimatedCursor backgroundColor={'#000'} innerSize={8} outerSize={25} innerScale={1} outerScale={1.7} hasBlendMode={true} outerAlpha={0} zIndex={500} 
          outerStyle={{
            mixBlendMode: 'difference',
            backgroundColor:'#fff'
            
          }}
          innerStyle={{
            mixBlendMode: "difference",
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
      </MediaQuery>
        <section className={"section1"}>
          <Home/>
        </section>
        <section>
          <MediaQuery query="(max-width: 1000px)">
          <AboutMeMobile/>
          </MediaQuery>
          <MediaQuery query="(min-width: 1000px)">
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

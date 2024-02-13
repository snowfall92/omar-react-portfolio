import ReactDOM from 'react-dom'
import React from 'react'
import '../App.css'
import ErrorBoundary from '../ErrorBoundary';



class Home extends React.Component {
    render() {
        return (
            <main>
                <section>
         
    <div id="particles-js">
      <div className="header">
        <h1>
          <span className="site-title">OMAR FLORES</span>
          <span className="site-description">Programmer • Web Developer • Graphic Designer  </span>
        </h1>
        <div className="header-icons">
          <a aria-label="My LinkedIn Profile" target="_blank" href="https://www.linkedin.com/in/omar-flores-94b219239/">
            <i className="icon fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a aria-label="My Github Profile" target="_blank" href="https://github.com/snowfall92">
            <i className="icon fa fa-github-alt" aria-hidden="true"></i>
          </a>
          <a aria-label="My Résumé" target="_blank" href="Resume - Omnpm install -g npmnpm install -g npmnpm install -g npmnpm install -g npmar Flores (1) (1).pdf">
            <i className="icon fa fa-file-pdf-o" aria-hidden="true"></i>
          </a>
          
          <a aria-label="Send Email" href="mailto:of45005@gmail.com" target="_blank"></a>
            <i className="icon fa fa-envelope"></i>
        </div>
        <div className="header-links">
          <a className="link" href="#about" data-scroll>About Me</a>
          <a className="link" href="#projects" data-scroll>Projects</a>
        </div>
      </div>
      <a className="down" href="#about" data-scroll><i className="icon fa fa-chevron-down" aria-hidden="true"></i></a>
    </div>
   

    <section id="about">
      

      <div className="user-details">
        <h1>My Story</h1>
        <picture>
          <source
            type="image/webp"
            srcset="./assets/img/webp/.webp"
            alt="Professional Me"
            width="20%"
            style="border-radius: 50%"
          />
          <img
            src="./assets/img/jpg/"
            alt=""
            width="20%"
            style="border-radius: 50%" 

            />
        </picture>
        <p>
          Ever wished your website sparkled like the California sunshine? That's exactly what I do at SteallarLink Web Development, as the resident CFO (Code Forging Officer, of course!).

          From my California roots, I've grown a passion for crafting clean, efficient code that elevates expectations like a master chef plating his masterpiece.
          
          Let's take your vision, sprinkle in some web magic, and bake a functional, captivating website that screams your brand loud and proud. 
          
          Whether it's a personal portfolio with personality, an e-commerce platform that converts like a charm, or a corporate site that oozes professionalism, I'm your code-slinging partner in crime, ready to cook up a digital masterpiece just for you.
          
          So, ditch the website woes and let's get brewing!  I'm Omar, and I'm excited to bring your online vision to life.
      </p>
    </div>

     
      <div className="user">
        <div className="tech">
          <h2>Languages</h2>
          <i className="devicon-python-plain colored"></i>
          <i className="devicon-java-plain-wordmark colored"></i>
          <i className="devicon-cplusplus-plain colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <p>My favorite languages for systems programming, software engineering, and data analysis.</p>
        </div>
       

        <div className="tech">
          <h2>Front-End</h2>
          <i className="devicon-react-original colored"></i>
          <i className="devicon-bootstrap-plain-wordmark colored"></i>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <p>My preferred technologies for front-end web development and component design.</p>
        </div>
       

       
        <div className="tech">
          <h2>Back-End</h2>
          <i className="devicon-nodejs-plain colored"></i>
          <i className="devicon-express-original-wordmark colored"></i>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
          <i className="devicon-postgresql-plain-wordmark colored"></i>
          <p>My preferred technologies for back-end web programming and database architecture.</p>
        </div>
       

      
        <div className="tech">
          <h2>Tools</h2>
          <i className="devicon-git-plain-wordmark colored"></i>
          <i className="devicon-visualstudio-plain colored"></i>
          <i className="devicon-github-plain-wordmark colored"></i>
          <i className="devicon-docker-plain-wordmark colored"></i>
          <p>My favorite tools for version control, code editing, and container orchestration.</p>
        </div>
      </div>
    </section>

    <section id="projects">
      <div className="user-details">
        <h1>Featured Projects</h1>
      </div>

     
      <div className="user-projects">
        <div className="images-right">
          <picture>
            <source type="image/webp" srcset="./assets/img/webp/uberclone.webp" alt="Personal Website" />
            <img alt="Personal Website" src="./assets/img/jpg/uberclone.jpeg" />
          </picture>
        </div>
        <div className="contents" style="text-align: center">
          <h3>Uber Clone Website</h3>
          <div>
            <img
              height="32"
              width="32"
              src="https://unpkg.com/simple-icons@3.4.0/icons/react.svg"
              style="filter: invert(73%) sepia(74%) saturate(1552%) hue-rotate(169deg) brightness(109%) contrast(97%)"
            />
            &nbsp;
            <img
              height="32"
              width="32"
              src="https://unpkg.com/simple-icons@3.4.0/icons/bootstrap.svg"
              style="filter: invert(24%) sepia(14%) saturate(2270%) hue-rotate(222deg) brightness(102%) contrast(90%)"
            />
            &nbsp;
            <img height="32" width="32" src="https://unpkg.com/simple-icons@3.4.0/icons/github.svg" />
          </div>
          <p style="text-align: justify">
            My story isn't just on paper, it's an interactive experience! 
            This Uber-Clone website, built with ReactJS and hosted on Github Pages, 
            takes you on a journey through my work, education, and achievements. 
            Dive into projects, explore my skills, and get a glimpse into my digital odyssey.
            Get ready to be captivated by both code and content!
          </p>
          <a className="project-link" target="_blank" href="https://github.com/snowfall92">Check it out!</a>
        </div>
      </div>

      
      <div className="user-projects">
        <div className="images-left">
          <picture>
            <source type="image/webp" srcset="./assets/img/webp/AiAssistent.webp" alt="Perpetual Crusades" />
            <img alt="Perpetual Crusades" src="./assets/img/jpg/AiAssistent.jpeg" />
          </picture>
        </div>
        <div class="contents-right" style="text-align: center">
          <h3>AI Jarvis</h3>
          <img
            height="32"
            width="32"
            src="https://unpkg.com/simple-icons@3.4.0/icons/react.svg"
            style="filter: invert(73%) sepia(74%) saturate(1552%) hue-rotate(169deg) brightness(109%) contrast(97%)"
          />
          &nbsp;
          <img
            height="32"
            width="32"
            src="https://unpkg.com/simple-icons@3.4.0/icons/css3.svg"
            style="filter: invert(33%) sepia(29%) saturate(3844%) hue-rotate(184deg) brightness(90%) contrast(84%)"
          />
          &nbsp;
          <img height="32" width="32" src="https://unpkg.com/simple-icons@3.4.0/icons/github.svg" />
          <p style="text-align: justify">
            Experience the power of AI at your fingertips with AI-Jarvis, 
            a versatile virtual assistant designed to streamline your
            tasks and enhance your productivity. Built using a robust blend of modern technologies, 
            AI-Jarvis offers a seamless and intuitive user experience..
          </p>
          <a className="project-link" target="_blank" href="https://github.com/snowfall92"
            >Check it out!</a>
        </div>
      </div>

      <div className="user-projects">
        <div className="images-right">
          <picture>
            <source type="image/webp" srcset="./assets/img/webp/COVID19-Tracker-App.webp" alt="COVID-19 Tracker App" />
            <img alt="COVID-19 Tracker App" src="./assets/img/jpg/COVID19-Tracker-App.jpg" />
          </picture>
        </div>
        <div className="contents" style="text-align: center">
          <h3>COVID-19 Tracker App</h3>
          <div>
            <img
              height="32"
              width="32"
              src="https://unpkg.com/simple-icons@3.4.0/icons/javascript.svg"
              style="filter: invert(96%) sepia(47%) saturate(4151%) hue-rotate(338deg) brightness(100%) contrast(95%)"
            />
          </div>
          <p style="text-align: justify">
            I created a web application for tracking the spread of COVID-19. Using Johns Hopkins University Center For
            Systems Science and Engineering API, the website processes the COVID-19 data to create statistical
            projections through graphs and charts.
          </p>
          <a className="project-link" target="_blank" href="https://github.com/snowfall92">
            Check it out!
          </a>
        </div>
      </div>

      
      <div className="user-projects">
        <div className="images-left">
          <picture>
            <source
              type="image/webp"
              srcset="./assets/img/webp/Valuto-Account-Management.webp"
              alt="Valuto: Account Management System"
            />
            <img alt="Valuto: Account Management System" src="./assets/img/jpg/Valuto-Account-Management.jpg" />
          </picture>
        </div>
        <div className="contents-right" style="text-align: center">
          <h3>Code in Unreal Engine 5 Video Game (Coming soon)</h3>
          <div>
            <img
              height="32"
              width="32"
              src="https://unpkg.com/simple-icons@3.4.0/icons/cplusplus.svg"
              style="filter: invert(22%) sepia(77%) saturate(1486%) hue-rotate(183deg) brightness(101%) contrast(103%)"
            />
          </div>
          <p style="text-align: justify">
            Bridging the gap between faith and gaming – my current project
             takes inspiration from the rich tapestry of biblical narratives
              to create a compelling video game. Utilizing Unreal Engine 5.3
               and custom C++ code, I'm aiming to deliver a unique and 
               meaningful experience that resonates with players of all backgrounds..
          </p>
          <a className="project-link" target="_blank" href="https://github.com/snowfall92">
            Check me out!
          </a>
        </div>
      </div>
    </section>
 </section>
</main>
        );
    }
}

export default Home;
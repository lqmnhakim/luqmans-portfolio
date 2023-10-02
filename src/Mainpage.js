import React, {useState} from "react";
import './mainpage.css';
import { prevProjects } from "./data";
import resume from './assets/resume.png'

const MainPage = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const [currentDesc, setCurrentDesc] = useState(0);
    const [currentLang, setCurrentLang] = useState(0);
    console.log(prevProjects);

    const changeProject = (index) => {
        setCurrentProject(index);
    }
    
    return (
        <div>
            <div className="one-block first-block">
                <div className="content-headline">
                    <h1>
                    Hello my name is
                    <br></br>
                    <span>Luqman Hakim</span> 
                    </h1>
                </div>
            </div>
            <div className="one-block second-block">
                <div className="content-row">
                    <div className="left-side">
                        <div className="deets-row">
                            <h1>Who Am I</h1>
                        </div>
                        <div className="row-break"></div>
                        <div className="details-row">
                            <p>I am Luqman Hakim, 
                            <br></br>
                            A self-learner Front End Developer with a passion in responsive web design. I am proficient in HTML, CSS, Javascript, Typescript and React Framework. I work hard in learning new stuff 
                            and I am eager to gain new experience. I am passionate and independent, yet always open to guidance.</p>
                        </div>
                        <div className="deets-button">
                            <button>Resume</button>
                        </div>
                    </div>
                    <div className="right-side resume-photo">
                        <img src={resume}></img>
                    </div>
                </div>
            </div>
            <div className="one-block project-sect">
                <div className="headline-content">
                <h1>Projects</h1>
                </div>
                <div className="content-row">
                    <div className="left-side">
                        <img src={prevProjects[currentProject].images.thumbnail}></img>
                    </div>
                    <div className="right-side">
                        <div className="one-row">
                            <h1>{prevProjects[currentProject].name}</h1>
                        </div>
                        <div className="one-row">
                            <p>
                            Description - 
                            <br></br>
                            <span>{prevProjects[currentProject].description[currentDesc]}</span>
                            </p>
                        </div>
                        <div className="break"></div>
                        <div className="one-row button-switch">
                            {prevProjects.map((projects, index) => (
                                <button key={index} onClick={() => changeProject(index)}></button>
                            ))}
                        </div>
                        <div className="one-row">
                            <button><a href={prevProjects[currentProject].liveview}>View More</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainPage;
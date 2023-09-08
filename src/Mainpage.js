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
    const changeDesc = (index) => {
        setCurrentDesc(index);
    }

    return (
        <div>
            <div className="one-block">
                <h1>
                Hello my name is
                <br></br>
                <span>Luqman Hakim</span> 
                </h1>
            </div>
            <div className="one-block">
                <div className="content-row">
                    <div className="left-side">
                        <h1>Description</h1>
                    </div>
                    <div className="right-side">
                        <img src={resume}></img>
                    </div>
                </div>
            </div>
            <div className="one-block">
                <div className="content-row">
                    <div className="left-side">
                        <img src={prevProjects[currentProject].images.thumbnail}></img>
                    </div>
                    <div className="right-side">
                        <div className="one-row">
                            <h1>{prevProjects[currentProject].name}</h1>
                        </div>
                        <div className="one-row">
                            <h1>difficulty : {prevProjects[currentProject].difficulty}</h1>
                        </div>
                        <div className="one-row">
                            <p>
                            Description - 
                            <br></br>
                            <span>{prevProjects[currentProject].description[currentDesc]}</span>
                            </p>
                        </div>
                        <div className="break"></div>
                        <div className="one-row">
                            <p>Language used : {prevProjects[currentProject].Language[currentLang]}</p>
                        </div>
                        <div className="one-row">
                            {prevProjects.map((projects, index) => (
                                <button key={index} onClick={() => changeProject(index)}></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainPage;
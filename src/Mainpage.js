import React from "react";
import ReactDOM from 'react-dom/client';
import './mainpage.css';
import firstproject from './assets/firstproject.png'
import secondproject from './assets/secondproject.png'
import fume1 from './assets/fume1.png'
import thirdproject from './assets/thirdproject.png'

const MainPage = () => {
    return (
        <div>
            <div className="header-name">
                <h1>Luqman Hakim's Portfolio</h1>
            </div>
            <div className="button-body">
                <div className="first-sec-proj">
                    <div className="project-display first-project">
                        <div className="project-pic first-pic">
                            <img src={firstproject}></img>
                        </div>
                        <button><a href="https://fe-mentor-qrcode.netlify.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Fe QR Challenge</a></button>
                    </div>
                    <div className="project-display second-project">
                        <div className="project-pic second-pic">
                            <img src={fume1}></img>
                        </div>
                        <button><a href="https://tourmaline-shortbread-88c02d.netlify.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Fume Project</a></button>
                    </div>
                </div>
                <div className="third-fourth proj">
                    <div className="project-display third-project">
                        <div className="project-pic second-pic">
                            <img src={secondproject}></img>
                        </div>
                        <button><a href="https://vermillion-biscotti-a4e74b.netlify.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Fe Promo Card Challenge</a></button>
                    </div>
                    <div className="project-display fourth-project">
                        <div className="project-pic third-pic">
                            <img src={thirdproject}></img>
                        </div>
                        <button><a href="https://dummy-json-ecommerce.netlify.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Json Ecommerce Challenge</a></button>
                    </div>
                </div>        
            </div>
        </div>
    )
}
export default MainPage;
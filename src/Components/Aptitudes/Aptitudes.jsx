import "./Aptitudes.css";
import htmlimage from "./AptitudesImgs/html.png";
import cssimage from "./AptitudesImgs/css.png";
import bootstrapimage from "./AptitudesImgs/bootstrap.jpg";
import idiomasimage from "./AptitudesImgs/idiomas.png";
import javascriptimage from "./AptitudesImgs/javascript.png";
import reactimage from "./AptitudesImgs/react.png";
import nodeimage from "./AptitudesImgs/nodejs.pnh.png";
import mongodbimage from "./AptitudesImgs/mongodb.png";
import scrumimage from "./AptitudesImgs/scrum.png";
import gitimage from "./AptitudesImgs/git.png";


function NewAptitudes () {

    return(
        <div className="mis-aptitudes">
            <div className="header">
                <h1> Mis aptitudes</h1>
            </div>
            <div className="container aptitudes">
            <div className="skill-box">
                    <div className="skill-tittle">
                        <div className="img">
                            <img src={idiomasimage} className="skill-icon"/>
                        </div>
                        <h3>INGLES - ESPAÑOL</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-tittle">
                        <div className="img">
                            <img src={htmlimage} className="skill-icon"/>
                        </div>
                        <h3>HTML 5</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-tittle">
                        <div className="img">
                            <img src={cssimage} className="skill-icon"/>
                        </div>
                        <h3>CSS</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-tittle">
                        <div className="img">
                            <img src={bootstrapimage} className="skill-icon"/>
                        </div>
                        <h3>BOOTSTRAP</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-tittle">
                        <div className="img">
                            <img src={javascriptimage} className="skill-icon"/>
                        </div>
                        <h3>JAVASCRIPT</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-tittle">
                        <div className="img">
                            <img src={reactimage} className="skill-icon"/>
                        </div>
                        <h3>REACT</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-tittle">
                        <div className="img">
                            <img src={nodeimage} className="skill-icon"/>
                        </div>
                        <h3>NODE JS</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-tittle">
                        <div className="img">
                            <img src={mongodbimage} className="skill-icon"/>
                        </div>
                        <h3>MONGODB</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-tittle">
                        <div className="img">
                            <img src={gitimage} className="skill-icon"/>
                        </div>
                        <h3>GIT</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-tittle">
                        <div className="img">
                            <img src={scrumimage} className="skill-icon"/>
                        </div>
                        <h3>SCRUM</h3>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default NewAptitudes;
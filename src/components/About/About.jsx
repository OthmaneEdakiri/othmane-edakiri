import "./About.css"
import {skills} from "../../constant"
import {Btn} from "../../components"

const About = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="heading-container">
                    <h1>ABOUT ME</h1>
                    <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                </div>
                <div className="about-content">
                    <div className="about-content_main">
                        <h3 className="about-content_title">Get to know me!</h3>
                        <div className="details">
                            <p>I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.</p>
                            <p>I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.</p>
                        </div>
                        <Btn info={{classN:"btn-about",title:"contact",url:"#contact"}} />
                    </div>
                    <div className="about-content_skills">
                        <h3 className="about-content_title">My Skills</h3>
                        <div className="skills">
                            {skills.map(skill=><div key={skill.id} className="skill">{skill.title}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

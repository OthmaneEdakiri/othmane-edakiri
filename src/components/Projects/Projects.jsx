import "./Projects.css";
import { Project } from "../../components";
import { projects } from "../../constant";

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="container">
                <div className="heading-container">
                    <h1>PROJECTS</h1>
                    <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
                </div>
                <div className="projects-content">
                    {projects.map(p=><Project key={p.id} info={{src:p.src , title:p.title , desc:p.desc , url:p.url}} />)}
                </div>
            </div>
        </div>
    )
}

export default Projects

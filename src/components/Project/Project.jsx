import "./Project.css"
import {Btn} from '../../components'

const Project = (props) => {
    return (
        <div className='project'>
            <div className="img-box">
                <img className="project-img" src={props.info.src} alt={`${props.info.title} image`}/>
            </div>
            <div className="project-content">
                <h3>{props.info.title}</h3>
                {props.info.desc ? <p>{props.info.desc}</p> : null}
                <div className="">
                    <Btn info={{classN : "btn-project" , title : "LIVE LINK" , url : props.info.url , target : "blanck"}} />
                </div>
            </div>
        </div>
    )
}

export default Project

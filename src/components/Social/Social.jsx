import "./Social.css"
import {linkedin,twitter,instagram,github,facebook} from "../../assets"

const Social = (props) => {
    return (
        <div className={props.info.classN}>
            <ul>
                <li><a href="https://www.linkedin.com/in/othmaneedakiri"> <img src={linkedin} alt="" /></a></li>
                <li><a href="https://twitter.com/othmane_edakiri"><img src={twitter} alt="" /></a></li>
                <li><a href="https://www.instagram.com/othmaneedakiri"><img src={instagram} alt="" /></a></li>
                <li><a href="https://github.com/OthmaneEdakiri"><img src={github} alt="" /></a></li>
                <li><a href="https://www.facebook.com/othmanee.edakiri"><img src={facebook} alt="" /></a></li>
            </ul>
        </div>
    )
}

export default Social

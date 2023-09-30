import {Btn, Social} from "../../components"
import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-heading">HEY, I'M OTHMANE EDAKIRI</h1>
                    <div className="hero-info">
                        <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                        <Btn 
                            info={{classN:"btn-hero",url:"#projects",title:"projects"}} 
                        />
                    </div>
                </div>
            </div>
            <Social info={{classN:"hero-social"}} />
            <div className="mouse"><span></span></div>
        </div>
    )
}

export default Hero

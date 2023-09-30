import "./Navbar.css"
import {logo} from "../../assets"
import {navLinks} from "../../constant"
import { useState } from "react"

const Navbar = () => {
    const [toggle,setToggle] = useState(false)

    const eventHandler =()=>{
        setToggle(prev => !prev)
    }
    return (
        <div className='navbar'>
            <div className="container">
                <div className='navbar-content'>
                    <div className="logo-container">
                        <img className="navbar-logo" src={logo} alt="" />
                        <span>Othmane Edakiri</span>
                    </div>
                    <div className="nav-container">
                        <ul className="nav">
                            {navLinks.map(link => <li key={link.id}><a href={`#${link.id}`}>{link.title}</a></li>)}
                        </ul>
                    </div>
                    <div onClick={eventHandler} className="bar-container">
                        <i className={`fa-solid ${toggle?'fa-xmark':'fa-bars'}`}></i>
                    </div>
                </div>
            </div>
            <ul className={`nav-sm ${toggle ? 'nav-sm_active' : null}`}>
                {navLinks.map(link => <li key={link.id}><a href={`#${link.id}`}>{link.title}</a></li>)}
            </ul>
        </div>
    )
}

export default Navbar

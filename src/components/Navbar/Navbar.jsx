import "./Navbar.css"
import {logo} from "../../assets"
import {navLinks} from "../../constant"
import { useContext, useEffect, useRef, useState } from "react"
import { LinkActiveContext } from "../../App"

const Navbar = () => {
    const [toggle,setToggle] = useState(false)

    const eventHandler =()=> setToggle(prev => !prev)

    const navbar=useRef(null);

    const toggleButton = useRef(null);

    const {linkActive} = useContext(LinkActiveContext);

    useEffect(()=>{
        const handleClickOutside = (event)=>{
            if(event.target !== navbar.current && event.target !== toggleButton.current){
                console.log("you click outside");
                setToggle(false)
            }

        }
        document.addEventListener("click",handleClickOutside);
        
        return ()=>(
            document.removeEventListener("click",handleClickOutside)
        )
    },[])
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
                            {navLinks.map(link => <li key={link.id}><a className={link.id === linkActive && 'active'} href={`#${link.id}`}>{link.title}</a></li>)}
                        </ul>
                    </div>
                    <div onClick={eventHandler} className="bar-container">
                        <i ref={toggleButton} className={`fa-solid ${toggle?'fa-xmark':'fa-bars'}`}></i>
                    </div>
                </div>
            </div>
            <ul ref={navbar} className={`nav-sm ${toggle ? 'nav-sm_active' : null}`}>
                {navLinks.map(link => <li key={link.id}><a className={link.id === linkActive && 'active'} href={`#${link.id}`}>{link.title}</a></li>)}
            </ul>
        </div>
    )
}

export default Navbar

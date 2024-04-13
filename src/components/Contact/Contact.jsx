import { useContext } from "react";
import { SectionsContext } from "../../App";
import "./Contact.css";

const Contact = () => {

    const {sectionsRefs} = useContext(SectionsContext);

    return (
        <div ref={sectionsRefs.contact} className="contact" id="contact">
            <div className="container">
                <div className="heading-container">
                    <h1>CONTACT</h1>
                    <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                </div>
                <div className="contact-content">
                    <form action="">
                        <div className="input-box">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter Your Name" />
                        </div>
                        <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter Your Email" />
                        </div>
                        <div className="input-box">
                            <label htmlFor="message">Message</label>
                            <textarea name="" id="message" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
                        </div>
                        <input disabled type="submit" className="submit-btn" value='submit' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

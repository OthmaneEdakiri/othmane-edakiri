import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-upper">
                    <div className="footer-upper_details">
                        <h2>Othmane edakiri</h2>
                        <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                    </div>
                    <div className="footer-upper_social">
                        <span>Social</span>
                        <div className="footer-upper_social-content">
                            <a target="blanck" href="https://www.linkedin.com/in/othmaneedakiri"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a target="blanck" href="https://twitter.com/othmane_edakiri"><i className="fa-brands fa-twitter"></i></a>
                            <a target="blanck" href="https://github.com/OthmaneEdakiri"><i className="fa-brands fa-github"></i></a>
                            <a target="blanck" href="https://www.instagram.com/othmaneedakiri"><i className="fa-brands fa-instagram"></i></a>
                            <a target="blanck" href="https://www.facebook.com/othmanee.edakiri"><i className="fa-brands fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-lower">
                    <p>© Copyright {new Date().getFullYear()}. Made by <a href="">Othmane Edakiri</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer

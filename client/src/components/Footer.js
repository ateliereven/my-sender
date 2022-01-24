import React from "react";
import GithubLogo from "../img/iconmonstr-github-1.svg";
import logo from '../img/ms-logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container center-align valign-wrapper" style={{ borderTop: "1.5px solid #f50057", justifyContent: "center" }}>
                <div style={{ paddingRight: "20px" }}><img src={logo} alt="logo" style={{ padding: "0px 5px", height: "15px" }} /><b>&copy;</b> 2021</div>
                <div className="valign-wrapper">
                    View project code on
                    <i className="material-icons pink-text text-accent-3">arrow_forward</i>
                    <a href="https://github.com/ateliereven/Survey-sender" target="blank"><img src={GithubLogo} alt='github' style={{ padding: "10px 0px" }} height={'50px'} />
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer;
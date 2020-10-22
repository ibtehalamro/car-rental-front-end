import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="title">Newsletter</h2>
            <h3 className="sub-title">Subscribe to our newsletter to get latest offers and prices </h3>
            <input type="text" className="input" placeholder="Subscribe to our newsletter to get latest offers and prices"/>
            <button className="btn">Subscribe</button>

            <div className="social-links-wrapper">
                <h4>Follow us on: </h4>
                <div className="social-links">
                    <img src={require("../../assets/images/icons/facebook-app-logo.svg")} alt="facebook logo" className="social"/>
                    <img src={require("../../assets/images/icons/instagram.svg")} alt="instagram logo" className="social"/>
                    <img src={require("../../assets/images/icons/twitter.svg")} alt="twitter logo" className="social"/>
                </div>
                </div>
        </footer>
    );
};

export default Footer;
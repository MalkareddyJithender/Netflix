import React from 'react';
import '../css/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <p className="footer__title">Questions? Call 000-800-040-1843</p>
            <div className="footer__row">
                <div className="footer__column">
                    <a href="#">FAQ</a>
                    <a href="#">Investor Relations</a>
                    <a href="#">Privacy</a>
                    <a href="#">Speed Test</a>
                </div>
                <div className="footer__column">
                    <a href="#">Help Centre</a>
                    <a href="#">Jobs</a>
                    <a href="#">Cookie Preferences</a>
                    <a href="#">Legal Notices</a>
                </div>
                <div className="footer__column">
                    <a href="#">Account</a>
                    <a href="#">Ways to Watch</a>
                    <a href="#">Corporate Information</a>
                    <a href="#">Netflix Originals</a>
                </div>
                <div className="footer__column">
                    <a href="#">Media Centre</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <p className="footer__text">Netflix India</p>
            <p className="footer__text">This application is designed by <b>Jithender Malkareddy</b></p>
        </div>
    )
}

export default Footer;

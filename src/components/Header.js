import '../css/Header.css';
import React from 'react';
import logo from '../logo.svg';
import OptForm from './OptForm';
import { Link } from 'react-router-dom';

function Header(props) {
     {const header =  props.children?(
            <div className="header">
                <div className="header__top">
                    <img src={logo} alt="netflix logo" />
                    {props.button && 
                    <Link to="/signin">
                        <button className="header__topButton"> Sign In</button>
                    </Link>}
                </div>
                <div>
                    <div className="header__bodyy">
                        {props.children}
                    </div>
                </div>
            </div>
        )
        :
        (
            <div className="header">
                <div className="header__top">
                    <img src={logo} alt="netflix logo" />
                    <Link to="/signin">
                        <button className="header__topButton">Sign In</button>
                    </Link>
                </div>
                <div>
                    <div className="header__body">
                        <h1 className="header__title"> Unlimited movies, TV shows and more. </h1>
                        <h2 className="header__subtitle"> Watch anywhere. Cancel anytime. </h2>
                        <OptForm header={ true }/>
                    </div>
                </div>
            </div>
        );

    return header;
}
}

export default Header;

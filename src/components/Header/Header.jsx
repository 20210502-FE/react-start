import './Header.scss';
import logo from './../../logo.svg';
import React from "react";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

let navigation = [
    { id: 1, linkName: 'Home', linkPath: '/' , exact: true},
    { id: 2, linkName: 'Sun', linkPath: '/sun' },
    { id: 3, linkName: 'About us', linkPath: '/about-us' },
    { id: 4, linkName: 'Our brands', linkPath: '/our-brand' },
];

const Header = () => {
    return (
        <header className="Header">
            <div className="Wrapper Header__wrapper">
                <div className="Header__logo">
                    <Link to="/" className="Header__logo-link">
                        <img src={logo} alt="YES." />
                    </Link>
                </div>
                <Nav navArray={navigation} />
            </div>
        </header>
    )
};

export default Header;

import './Footer.scss';
import logo from './../../logo.svg';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer__head">
                <div className="Wrapper Footer__columns-wrapper">
                    <div className="Footer__logo">
                        <Link className="Footer__nav-link" to="/">
                            <img src={logo} alt="YES."/>
                        </Link>
                    </div>
                    <h4 className="Footer__slug">We treat your eyes with care</h4>
                </div>
            </div>

            <div className="Wrapper Footer__columns-wrapper Footer__content">
                <div className="Footer__left">
                    <div className="Footer__nav">
                        <div>
                            <h5 className="Footer__nav-heading">Shop</h5>
                            <ul className="Footer__nav-list">
                                <li className="Footer__nav-item">
                                    <Link className="Footer__nav-link" to='/sun'>Sun</Link>
                                </li>
                                <li className="Footer__nav-item">
                                    <Link className="Footer__nav-link" to='/about-us'>About us</Link>
                                </li>
                                <li className="Footer__nav-item">
                                    <Link className="Footer__nav-link" to='/our-brand'>Our brand</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="Footer__nav-heading">Customer care</h5>
                            <ul className="Footer__nav-list">
                                <li className="Footer__nav-item">
                                    <Link className="Footer__nav-link" to='/'>FAQ</Link>
                                </li>
                                <li className="Footer__nav-item">
                                    <Link className="Footer__nav-link" to='/'>Shipping and returns</Link>
                                </li>
                                <li className="Footer__nav-item">
                                    <Link className="Footer__nav-link" to='/'>Fit guide</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="Footer__nav-heading">Info</h5>
                            <ul className="Footer__nav-list">
                                <li className="Footer__nav-item">
                                    <Link className="Footer__nav-link" to='/'>Terms and conditions</Link>
                                </li>
                                <li className="Footer__nav-item">
                                    <Link className="Footer__nav-link" to='/'>Privacy policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer__copyrights">
                        <p>Designed and built by Margarita</p>
                        <p>(c) 2020 Yes for Eyes</p>
                    </div>
                    <div className="Footer__copyrights Footer__copyrights_author">
                        <p>Photo materials belong to Krewe</p>
                        <p>This site is a design concept and not meant for commercial</p>
                        <p>purposes. I don't own or sell any goods displayed on this site.</p>
                    </div>
                </div>
                <div className="Footer__right">

                </div>
            </div>
        </footer>
    )

};

export default Footer;

import React from 'react';
import './Header.css';
import logo from '../../../assests/pharmacy_logo2.jpg';

const Header = () => {
    return (
        <>
            <nav className="navbar  navbar-expand-lg navbar-light bg-white overflow-hidden ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="img-fluid" alt="Pharmacy Logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                        <ul className="navbar-nav gap-2">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Baby & Mother Care</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Nutritions & Supplements</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Medicine</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">OTC And Health Need</a>
                            </li>
                        </ul>
                        <div className="d-flex gap-lg-2 flex-column flex-lg-row align-items-center pt-lg-0 pt-3 gap-4">
                            <button className="btn light-blue-btn text-white" type="button">Login</button>
                            <button className="btn light-blue-btn text-white" type="button">Register</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;

import React, {useState} from 'react';
import './HeaderStyle.css'
import {Link} from "react-router-dom";

const Header = () => {
    const [show, setShow] = useState(false);//this is for the menu we need it to be hidden in the loading
    let showHide = () => {
        setShow(!show);
    }
    return (
        <header className="top-header">
            <nav className="header-nav">
                <div className="header-item logo">
                    Garage
                </div>
                <span className="header-menu" onClick={() => showHide()}>
                    <img className="header-link burger" alt={'burger'}
                         src={require('../../assets/images/icons/menu.svg')}/>
                </span>

                <ul className={"header-content-wrapper " + (show === true ? " show":"")}>

                    <li className="header-item">
                        <Link className={"header-link active"} to={""}>Home</Link>
                    </li>
                    <li className="header-item">
                        <Link className={"header-link"} to={""}>About</Link>
                    </li>
                    <li className="header-item">
                        <Link className={"header-link"} to={""}>Services</Link>
                    </li>
                    <li className="header-item">
                        <Link className={"header-link"} to={""}>Contact</Link>
                    </li>
                </ul>


            </nav>
        </header>
    );
};

export default Header;
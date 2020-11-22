import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './img/logo.png'

class NavBar extends React.Component {
    render() {

        return (<div className="menu-bar">
            <div className="menu-bar-item logo"><img alt="Logo helye" src={Logo}></img></div>
            <div className="menu-bar-item main-menu">
                <ul className="main-menu-list">
                    <li><Link to={"/"}>Főoldal</Link></li>
                    <li><Link to={"/products"}>Édességek</Link></li>
                    <li><Link to={"/gyik"}>GYIK</Link></li>
                    <li><Link to={"/contact"}>Kapcsolat</Link></li>
                    </ul></div>
        </div>)
    }
}

export default NavBar
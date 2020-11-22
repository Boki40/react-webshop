import React from 'react';

import TopBar from './Header/TopBar'
import NavBar from './Header/NavBar.js'
import './Header/header.css'

class Header extends React.Component {
    render() {
        return (<div>
            <TopBar />
            <NavBar />
        </div>)
    }
}

export default Header
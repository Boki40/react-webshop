import React from "react"
import { Link } from "react-router-dom"
import store from "../../store"
import { CSSTransitionGroup } from 'react-transition-group'


function UserMenu() {
    const logOutHandler = () => {
        store.dispatch({ type: "user/logout" })
        localStorage.removeItem("userInfo")
    }

    return (<ul className="user-menu">
        <li><Link to={"/profile"}>Profilom</Link></li>
        <li>Rendeléseim</li>
        <li><button onClick={logOutHandler}>Kilépés</button></li>
    </ul>)
}

export default UserMenu
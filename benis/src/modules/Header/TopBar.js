import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import store from '../../store';
import Cart from '../Cart';
import UserMenu from './UserMenu';



function TopBar() {
    const [cartVisible, setCartVisible] = useState(false);
    const [profileMenuVisible, setProfileMenuVisible] = useState(false);
    const userSelector = state => state.user
    const user = useSelector(userSelector)



    const cartSelector = state => state.cart
    const cartItems = useSelector(cartSelector);
    const toggleCart = () => {
        setCartVisible(!cartVisible)
    }

    const toggleProfileMenu = () => {
        setProfileMenuVisible(!profileMenuVisible)
    }

    const toggleAuthHandler = () => {
        store.dispatch({ type: "auth/toggleAuth" })
        console.log(store.getState())
    }

    return (<div>
        <div className="top-bar">
            <div className="top-menu">
                {user.loggedIn ?
                    <div className="top-menu-item"> <button className="logged-in-user" onClick={toggleProfileMenu}>{user.name}</button>
                        <div className="user-menu-container">
                           {profileMenuVisible && <UserMenu key={"1"} />}
                        </div>
                    </div>
                    : <button className="top-menu-link cart" onClick={toggleAuthHandler}> <div className="top-menu-item">BEJELENTKEZÉS</div></button>}
                <button className="top-menu-link cart" to="/cart" onClick={toggleCart}>
                    <div className="top-menu-link cart">KOSÁR ({cartItems.length})</div>
                </button>
                <div className="top-menu-item cart">{cartVisible && <Cart />}</div>
                <div className="top-menu-item">HU</div>
                <div className="top-menu-item">HUF</div>
            </div>
        </div>
    </div >)

}

export default TopBar
import React from "react"
import { useSelector } from "react-redux"
import "./Cart/cart.css"
import CartCard from "./Cart/CartCard"
import { removeFromCart } from "../actions/cartActions"
import { AnimateOnChange } from 'react-animation'
import { CSSTransitionGroup } from 'react-transition-group'




function Cart() {
    const cartItemSelector = state => state.cart
    const cartItems = useSelector(cartItemSelector)
    const deleteHandler = (id) => {
        removeFromCart(id);
    }
    let total = 0
    let CartCards = cartItems.map(item => {
        let price = 0
        if (item.product.lowerPrice) {
            price = item.product.lowerPrice
        }
        else {
            price = item.product.originalPrice
        }
        price = price * item.qty
        total += price
        return <CartCard key={item.id} id={item.id} data={item.product} qty={item.qty} delete={deleteHandler} />
    })

    let huf = new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumSignificantDigits: 10 })


    return (
        <div className="cart-container">

            <div className="cart-item-list-container">
                <div className="cart-card" style={{ display: cartItems.length == 0 ? 'block' : 'none' }}><center><h2>Jelenleg nincs termék a kosárban.</h2></center></div>
                <CSSTransitionGroup
                    transitionName="product"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {CartCards}
                </CSSTransitionGroup>
                <div className="cart-total"><small>Összesen fizetendő:</small><br /><AnimateOnChange> {huf.format(total)}</AnimateOnChange>
                    <br /><small>Az ár az ÁFÁ-t tartalmazza.</small></div>
                <center><button className="beni-button small" style={{ display: !cartItems.length == 0 ? 'block' : 'none' }}>Tovább a szállítási mód kiválasztásához</button></center>
            </div>

        </div>
    )
}

export default Cart
import React, { useState } from "react"
import { FaRegTrashAlt } from "react-icons/fa";
import {removeFromCart, changeQty} from "../../actions/cartActions.js"
import { AnimateOnChange } from 'react-animation'


function CartCard(props) {
    let bgImg = 'url(' + props.data.imgURL + ')'
    let huf = new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumSignificantDigits: 10 })
    const [db, setDb] = useState(props.qty)
    const onChangeHandler = event => {
        setDb(event.target.value);
        changeQty(props.id,event.target.value)
    };
    
    

    return (<div className="cart-card">
        <div className="cart-item-image" style={{ backgroundImage: bgImg }} ></div>
        <div className="item-info">
            <div className="cart-item-name">{props.data.productName}</div>
            <div className="cart-item-price">{props.data.lowerPrice ? huf.format(props.data.lowerPrice) : huf.format(props.data.originalPrice)}/db</div>
        </div>
        <div className="cart-item-db"><label><button onClick={()=>{props.delete(props.id)}} className="beni-button small" ><FaRegTrashAlt /></button><input className="cart-item-db-input" onChange={onChangeHandler} type="text" value={db}></input>  db</label></div>
        <div className="cart-item-total-price"><AnimateOnChange>{props.data.lowerPrice ? huf.format(props.data.lowerPrice*props.qty) : huf.format(props.data.originalPrice*props.qty)}</AnimateOnChange></div>
    </div>
    )
}

export default CartCard
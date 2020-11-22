import React from "react"
import { Link } from "react-router-dom"
import { addToCart } from "../actions/cartActions"
import store from "../store"
import "./ProductCard/product-card.css"

function ProductCard(props) {
    const handleClick = () => {
        addToCart(props.product, 1)
        console.log(store.getState())
    }


    let bgImg = 'url(' + props.product.imgURL + ')'
    let huf = new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumSignificantDigits: 10 })
    return (

        <div className="product-card">
            <div className="product-card-new" style={{ visibility: props.product.new ? 'visible' : 'hidden' }}>ÚJ</div>
            <div className="product-card-image" style={{ backgroundImage: bgImg }}></div>
            <div className="product-info">
                <Link className="product-link" to={'/product/' + props.product.id}><div className="product-card-name">{props.product.productName}</div></Link>
                <div className="product-card-price"><span className="product-card-price-new">{huf.format(props.product.lowerPrice)}/db</span> <span className="product-card-price-old"> {huf.format(props.product.originalPrice)}/db</span></div>
                <button className="beni-button" onClick={handleClick}>Kosárba rakom</button></div>
        </div>

    )

}

export default ProductCard
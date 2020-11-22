import React from "react"
import { Link } from "react-router-dom"
import { addToCart } from "../../actions/cartActions"

function SearchResultCard(props){
    let bgImg = 'url(' + props.data.imgURL + ')'
    let huf = new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumSignificantDigits: 10 })
    return (<div className="search-result-card">
         <div className="search-item-image" style={{ backgroundImage: bgImg }} ></div>
         <div className="search-item-name"><Link to={'/product/' + props.data.id}> {props.data.productName}</Link></div>
        <div className="search-prime-container">
            
            <div className="search-item-price">{props.data.lowerPrice ? huf.format(props.data.lowerPrice) : huf.format(props.data.originalPrice)}/db</div>
            <div className="search-old-item-price">{props.data.lowerPrice && huf.format(props.data.originalPrice)}/db</div>
        </div>
        <button className="beni-button search" onClick={()=>addToCart(props.data,1)}>Kosárba rakom</button>
       
    </div>)
}

export default SearchResultCard
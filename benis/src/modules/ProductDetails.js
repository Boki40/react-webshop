import React, { useEffect, useState } from "react"
import './ProductPage/product-page.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from "react-redux"
import { addToCart } from "../actions/cartActions"



function ProductDetails(props) {
    const [db, setDb] = useState(1)
    const itemId = props.match.params.id
    const productsSelector = state => state.products
    const productList = useSelector(productsSelector)
    let product = productList.find(product => product.id == itemId);
    let bgImg
    if (product != undefined) {
        bgImg = 'url(' + product.imgURL + ')'
    }

    let huf = new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumSignificantDigits: 10 })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onChangeHandler = event => {
        setDb(event.target.value);
    };

    const onClickHandler = () => {
        addToCart(product, db)
    }

    if (product) {
        return (<div className="product-page">

            <div className="product-image" style={{ backgroundImage: bgImg }}>

            </div>
            <div className="product-page-info"><div className="info-list">
                <div className="product-new" style={{ visibility: product.new ? 'visible' : 'hidden' }}>ÚJ</div>
                <div className="product-name">{product.productName}</div>
                <div className="product-short-desc">{product.shortDesc}</div>
                <div className="product-page-card-price"><span className="product-page-card-price-new">{huf.format(product.lowerPrice)}/db</span> <span className="product-page-card-price-old"> {huf.format(product.originalPrice)}/db</span></div>
                <label><input className="db-input" onChange={onChangeHandler} type="text" value={db}></input>  db</label><br />
                <button className="beni-button" onClick={onClickHandler}>Kosárba rakom</button>
            </div></div>
            <div className="product-page-description"><Tabs>
                <TabList>
                    <Tab>Leírás</Tab>
                    <Tab>Összetevők</Tab>
                </TabList>

                <TabPanel>
                    <div className="product-page-description">
                        {product.longDesc}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Összetevők</h2>
                    <div className="product-page-description">{product.longDesc}</div>
                </TabPanel>
            </Tabs>
            </div>

        </div>)
    }
    else return (<div className="loading-product">Termék adatainak betöltése...</div>)
}

export default ProductDetails
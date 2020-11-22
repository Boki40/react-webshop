import React, { useEffect, useState } from 'react';
import "./MainPage/main-page.css"
import SearchBar from './SearchBar'
import ProductCard from './ProductCard'
import { Link } from "react-router-dom"
import SponsorList from './SponsorList';
import { useSelector } from 'react-redux';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { CSSTransitionGroup } from 'react-transition-group'




function MainPage() {
    const selectProducts = state => state.products
    const products = useSelector(selectProducts)
    let productContainers = products.slice(0, 6).map(productItem => { return <ProductCard key={productItem.id} product={productItem} /> })
    const [slides, setSlides] = useState([])
    const [curSlide, setCurSlide] = useState(0)
    const [slidesLoading, setSlidesLoading] = useState(true)
    let bgImg

    useEffect(() => {
        window.scrollTo(0, 0)
        fetch("http://localhost:5000/api/slides")
            .then(res => res.json())
            .then(res => {
                setSlides(res)
                console.log(res)
                if (res)
                    setSlidesLoading(false)
            })
    }, [])

    if (!slidesLoading)
        bgImg = 'url(' + slides[curSlide].imgURL + ')'

    const increment = () => {
        setCurSlide(() => {
            let newIndex = curSlide + 1
            if (newIndex >= slides.length) {
                return 0;
            }
            return newIndex;
        })
    }

    const decrement = () => {
        setCurSlide(() => {
            let newIndex = curSlide - 1
            if (newIndex === -1) {
                console.log(-1)
                return slides.length - 1;
            }
            return newIndex;
        })
    }



    return (<div>
        <div className="main-page">
            <div className="bg" style={{ backgroundImage: bgImg }}>
                {!slidesLoading && <CSSTransitionGroup
                    transitionName="slider"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={true}
                    transitionLeave={true}><div key={slides[curSlide].id} className="slider">
                        <div className="slider-title">{slides[curSlide].title}</div>
                        <div className="slider-desc">{slides[curSlide].desc}</div>
                        <button className="beni-button-outline" style={{ marginRight: '10px' }} onClick={decrement}><FaAngleLeft /></button>
                        <button className="beni-button-outline" onClick={increment}><FaAngleRight /></button>
                    </div></CSSTransitionGroup>}
                <div className="search-wrapper">
                    <SearchBar />
                </div>
            </div>
            <div className="bg2 recommended-products"><h2>Ajánlott édességek</h2>

                <div className="product-container">

                    {productContainers}

                </div>
                <Link to={'/products'} ><button className="beni-button">Összes termék</button></Link></div>

        </div>
        <SponsorList />
    </div>


    )
}


export default MainPage
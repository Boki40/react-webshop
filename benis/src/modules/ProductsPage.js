import React, { useEffect, useState } from "react"
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'
import ReactPaginate from 'react-paginate';
import './ProductsPage/products-page.css'
import { useSelector } from "react-redux";


function ProductsPage() {
    const selectProducts = state => state.products
    const productData = useSelector(selectProducts)

    const perPage = 6
    const [offset, setOffset] = useState(0)
    let selected = 1
    const pageCount = productData.length / 6

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handlePageClick = (data) => {
        let selected = data.selected;
        setOffset(Math.ceil(selected * perPage));
    }

    let productContainers = productData.slice(offset, perPage + offset).map(productItem => { return <ProductCard key={productItem.id} product={productItem} /> })

    return (
        <div className="products-page">
            <div className="breadcomb">
                <div className="breadcomb-top">Kezdőlap</div>
                <div className="breadcomb-bottom">Édességek</div>
            </div>
            <div className="products-search-wrapper">
                <SearchBar />
            </div>

            <div className="bg2 recommended-products">

                <div className="product-container">
                    {productContainers}
                </div>
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>

        </div>)
}

export default ProductsPage
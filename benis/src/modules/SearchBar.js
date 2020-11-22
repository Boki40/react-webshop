import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import "./Search/search.css"
import SearchResultCard from './Search/SearchResultCard';
import { CSSTransitionGroup } from 'react-transition-group'


function SearchBar() {
    const [keyword, setKeyword] = useState("")
    const productSelector = state => state.products
    const productList = useSelector(productSelector)

    const filteredList = productList.filter(item => { return item.productName.toUpperCase().indexOf(keyword.toUpperCase()) !== -1 })
    const searchCards = filteredList.map(item => { return <SearchResultCard key={item.id} data={item} /> })
    return (<div>
        <div className="searchContainer">
            <input className="searchBox" placeholder="Keress az édességek között!" type="text" value={keyword} onChange={(event) => { setKeyword(event.target.value) }}></input>
            <button className="searchButton"><FaSearch /></button>
        </div>
        <div className="search-results" style={{ display: !keyword.length == 0 ? "flex" : "none" }}>
            <CSSTransitionGroup
                transitionName="product"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
            >
                {keyword.length > 0 && searchCards}
            </CSSTransitionGroup>
        </div>
    </div>
    )

}

export default SearchBar
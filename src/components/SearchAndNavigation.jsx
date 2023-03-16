import React from 'react';
import "./SearchAndNavigationStyles.css";

function SearchAndNavigation() {
  return (
    <section className="search_section">
        <div className="search_container">
            <div className="search_bar_div">
                <input type="text" className="search_bar" placeholder="Search your topic..."/>
            </div>
            <div className="search_btn_div">
                <button className="search_btn">Go</button>
            </div>
            <div className="navigation_div">
                <button className="nav_btn nav_btn_previous"><i class="fa-solid fa-angle-up"></i></button>
                <button className="nav_btn nav_btn_next"><i class="fa-solid fa-angle-down"></i></button>
            </div>
        </div>
    </section>
  )
}

export default SearchAndNavigation;
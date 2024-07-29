// src/SearchBar.js
import React, { useState, useRef, useEffect } from 'react';
import './SearchBar.css'; // You can use this file to style the suggestions dropdown
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ placeholder, data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const searchBarRef = useRef(null);

    const handleSearchClick = (event) => {
        event.stopPropagation();
        setIsExpanded(true);
        const field = document.querySelector('input');
        field.focus();
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value) {
            const filteredSuggestions = data.filter(item =>
                item.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleClickOutside = (event) => {
        if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
            setIsExpanded(false);
            setSearchTerm('');
            setSuggestions([]);
        }
    };

    const handleClickOutside2 = () => {
        setIsExpanded(false);
        setSearchTerm('');
        setSuggestions([]);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="search-wrapper">
            <FaSearch className='fa-search' onClick={handleSearchClick}></FaSearch>
            <div ref={searchBarRef} className={`search-bar-container ${isExpanded ? 'expanded' : 'not-expanded'}`} onClick={handleSearchClick}>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleChange}
                    className="search-input"
                />
                {suggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {suggestions.map((item, index) => (
                            <Link key={index} style={{ color: 'black', textDecoration: "none" }} to={`/product/${item.id}`}>
                                <li onClick={handleClickOutside2} className="suggestion-item">
                                    <div className="search-item">
                                        <img onClick={window.location.pathname.match("product") ? window.scrollTo(0, 0) : () => {}} className="item-img" src={item.image} alt="" />
                                        <p>{item.name}</p>
                                        <div className="search-item-prices">
                                            <div className="search-item-price-new">
                                                €{item.new_price}
                                            </div>
                                            <div className="search-item-price-old">
                                                €{item.old_price}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchBar;

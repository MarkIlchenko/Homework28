
// import { filled, light, logo, message, notification } from '../img';
// import styles from "../index.css"
import * as React from 'react';
import styles from "../index.css";
import { filled, light, logo, message, notification } from '../img';

const Search = () => {
    return (
        <div className="search-box">
            <div className="search-input">
                <div className="left">
                    <img src={light} alt="Icon"/>
                    <div className="frame-22">
                        <p className="search-p">Search or type a command</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Search;
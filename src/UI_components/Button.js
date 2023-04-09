import React from "react";
import Icon from '@mui/material/Icon';
import styles from "../index.css"
import {filled} from "../img"

const Button = () => {
    return (
        <div>
            <a href="#" className="primary px-5 py-3 flex" variant='contained'>
                <img src={filled} className="mr-2"/>
                Create
            </a>
        </div>
    )
}

export default Button;
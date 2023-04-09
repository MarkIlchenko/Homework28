import React, { useState } from "react";
import Search from "../UI_components/Search"
import { filled, light, logo, message, notification } from '../img';
import Button from "../UI_components/Button"
import {navIcons} from "../constants";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Header = () => {
    return (
        <header className="flex justify-between items-center mx-10 my-6 ">
            <Search />
            <div className="flex items-center">
                <Button />
                {navIcons.map((nav, index) => (
                    <a href="#" className="mx-3">
                        <img src={nav.icon}/>
                    </a>
                ))}
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </div>
        </header>
    );
};

export default Header;
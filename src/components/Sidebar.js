import React, {useEffect, useState} from "react";
import { logo} from '../img';
import Logo from "../UI_components/Logo";
import {navLinks} from "../constants/index"
import styles from "../index.css"
import Toggle from "../UI_components/Toggle";


const Sidebar = () => {


    return (
        <div className="sidebar-setup flex flex-col justify-between h-screen p-6 borderRight">
            <div className="top-elements">
                <Logo />
                <div className="nav-stack mt-12">
                    <ul className="list-none   items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins flex font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-6'} `}
                            >
                                <img src={nav.icon}/>
                                <a href={`#${nav.id}`} className="navLinksText ml-3">
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Toggle/>


        </div>
    )
}

export default Sidebar;
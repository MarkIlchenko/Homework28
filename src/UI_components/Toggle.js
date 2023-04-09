import React, {useEffect, useState} from "react";
import styles from "../index.css"
import {swtchLight, swtchDark} from "../constants/index";


const Toggle = () => {


    // function Darkmood() {
    //     let element = document.body;
    //     element.classList.add("dark");
    // }
    // function Lightmood() {
    //     let element = document.body;
    //     element.classList.remove("dark");
    // }

    return (
        <div className={`flex p-1 toggle jstheme ` } >
            {swtchLight.map((swtch, index) => (
                <div
                    key={swtch.id}
                    className={`flex py-1 pr-10 pl-8 `}
                >
                    <img src={swtch.icon}/>
                    <a href={`#${swtch.id}`} className="navLinksText ml-3">
                        {swtch.title}
                    </a>
                </div>
            ))}
            {swtchDark.map((swtch, index) => (
                <div
                    key={swtch.id}
                    className={`flex py-1 pr-10 pl-8 `}
                >
                    <img src={swtch.icon}/>
                    <a href={`#${swtch.id}`} className="navLinksText ml-3">
                        {swtch.title}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Toggle
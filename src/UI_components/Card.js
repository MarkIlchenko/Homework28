import React from "react";
import {cardItems} from "../constants";
import Buttons from "./Buttons";

const Card = () => {
    return (
        <div className="flex">
            {cardItems.map((cardItems, index) => (
                <div className={`w-[360px] card ${
                    index !== cardItems.length - 1 ? "mr-4" : "mr-0"
                }`}>
                    <div className={`flex p-4`}>
                        <img src={cardItems.avatar} className="w-[48px]"/>
                        <div className="text-container ml-3">
                            <h3 >
                                {cardItems.title}
                            </h3>
                            <p className="subText">
                                {cardItems.subtitle}
                            </p>
                        </div>
                    </div>
                    <img className="w-full h-[180px] cardItemImg" src={cardItems.img}/>
                    <div className="p-4">
                        <p className="w-full mt-2 mb-6">
                            {cardItems.text}
                        </p>
                        <Buttons />
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Card
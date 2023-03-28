import React from "react";
import { lensData } from "../../public/data/data";

const Display = () => {
    return (
        <div className="display-container">
            <div className="main">
                {lensData.map((data, key) => {
                    return (
                        <div className="item-container">
                            <div className="item-img">
                                <img src={data.imageFile} key={key}></img>
                            </div>
                            <div className="item-info">{data.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Display;

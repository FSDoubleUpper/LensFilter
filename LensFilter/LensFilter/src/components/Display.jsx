import React from "react";
import { lensData } from "../../public/data/data";

const Display = () => {
    return (
        <div className="display-container">
            <div className="main">
                {lensData.map((data) => {
                    return (
                        <div className="item-container" key={data.id}>
                            <div className="item-img">
                                <img src={data.imageFile}></img>
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

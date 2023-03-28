import React, { useState } from "react";

const FocalRange = (props) => {
    return (
        <div className="focalrange-container">
            <span>Min: </span>
            <input
                type="text"
                value=""
                placeholder="18"
                onChange={props.handleChange}
            />
            mm
            <br />
            <span>Max: </span>
            <input
                type="text"
                value=""
                placeholder="200"
                onChange={props.handleChange}
            />
            <span>mm</span>
        </div>
    );
};

export default FocalRange;

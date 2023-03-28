import React, { useState } from "react";

const Aperture = (props) => {
    return (
        <div>
            <span>Aperture: </span>
            <select value={props.selectedOption} onChange={props.handleChange}>
                <option value="1.4">1.4</option>
                {/* <option value="1.8">1.8</option> */}
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="5.6">5.6</option>
            </select>
        </div>
    );
};

export default Aperture;

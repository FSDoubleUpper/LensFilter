import React, { useState } from "react";

const Options = (props) => {
    return (
        <div>
            <div className="options-title">Options</div>
            <span>Sensor: </span>
            <select value={props.selectedOption} onChange={props.handleChange}>
                <option value="All">All</option>
                <option value="APS-C">APS-C</option>
                <option value="Full Frame">Full Frame</option>
            </select>
            <br />
            <span>Mount: </span>
            <select value={props.selectedOption} onChange={props.handleChange}>
                <option value="All">All</option>
                <option value="XF">XF</option>
                <option value="E">E</option>
                <option value="FE">FE</option>
            </select>
            <br />
            <span>Lens Design: </span>
            <select value={props.selectedOption} onChange={props.handleChange}>
                <option value="All">All</option>
                <option value="Prime">Prime</option>
                <option value="Zoom">Zoom</option>
            </select>
        </div>
    );
};

export default Options;

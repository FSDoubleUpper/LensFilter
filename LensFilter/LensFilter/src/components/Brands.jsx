import React, { useState } from 'react';


const Brands = (props) => {
    return (
        <div className='brands-container'>
            <span>Brands: </span>
            <select value={props.selectedOption} onChange={props.handleChange}>
                <option value="All">All</option>
                <option value="Sony">Sony</option>
                <option value="Fujifilm">Fujifilm</option>
            </select>
        </div>
    );
};

export default Brands;

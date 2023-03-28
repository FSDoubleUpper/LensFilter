import React, { useState } from 'react';


const Brands = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const handleChange = (e) => setSelectedOption(e.target.value);
    return (
        <div>
            <select value={selectedOption} onChange={handleChange}>
                <option value="">Brand</option>
                <option value="Sony">Sony</option>
                <option value="Fujifilm">Fujifilm</option>
            </select>
        </div>
    );
};

export default Brands;

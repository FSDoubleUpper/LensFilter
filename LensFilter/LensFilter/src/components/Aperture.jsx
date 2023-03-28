import React, { useState } from "react";

const Aperture = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const handleChange = (e) => setSelectedOption(e.target.value);
    return (
        <div>
            <span>Aperture: </span>
            <select value={selectedOption} onChange={handleChange}>
                <option value="1.4">1.4</option>
                <option value="1.8">1.8</option>
                <option value="2">2</option>
            </select>
        </div>
    );
};

export default Aperture;

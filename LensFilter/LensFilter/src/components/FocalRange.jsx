import React, { useState } from "react";

const FocalRange = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const handleChange = (e) => setSelectedOption(e.target.value);
    return (
        <div className="focalrange-container">
            <span>Min: </span>
            <input
                type="text"
                value=""
                placeholder="18"
                onChange={handleChange}
            />
            <span>mm Max: </span>
            <input
                type="text"
                value=""
                placeholder="200"
                onChange={handleChange}
            />
            <span>mm</span>
        </div>
    );
};

export default FocalRange;

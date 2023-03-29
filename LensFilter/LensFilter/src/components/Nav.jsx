import React, { useState } from "react";
import Brands from "./Brands";
import FocalRange from "./FocalRange";
import Aperture from "./Aperture";
import Options from "./Options";

const Nav = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const handleChange = (e) => setSelectedOption(e.target.value);
    const [filter, setFilter] = useState({
      brands: ""
    });

    const onfilter = 

    return (
        <div className="nav-container">
            <div className="nav-title">Settings</div>
            <div className="nav-options">
                <Brands
                    selected={setFilter}
                    handleChange={handleChange}
                />
                <FocalRange
                    selectedOption={selectedOption}
                    handleChange={handleChange}
                />
                <Aperture
                    selectedOption={selectedOption}
                    handleChange={handleChange}
                />
                <Options
                    selectedOption={selectedOption}
                    handleChange={handleChange}
                />
            </div>
            <div className="nav-filter-button">
                <button onClick={onfilter}>Filter</button>
            </div>
        </div>
    );
};

export default Nav;

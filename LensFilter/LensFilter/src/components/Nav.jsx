import React, { useState } from 'react';

const Nav = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = e => setSelectedOption(e.target.value);
  return (
    <div className='nav-container'>
        <div>Settings</div>
        <div>
          <select value={selectedOption} onChange={handleChange}>
            <option value="">Brand</option>
            <option value="Sony">Sony</option>
            <option value="Fujifilm">Fujifilm</option>
          </select>
        </div>
    </div>
  )
}

export default Nav
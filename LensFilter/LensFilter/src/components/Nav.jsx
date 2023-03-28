import React, { useState } from 'react';
import Brands from './Brands';
import FocalRange from './FocalRange';
import Aperture from './Aperture';

const Nav = () => {
  return (
    <div className='nav-container'>
        <div>Settings</div>
        <div>
          <Brands />
          <FocalRange />
          <Aperture />
        </div>
    </div>
  )
}

export default Nav
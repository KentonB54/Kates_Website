import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {

  return (
    <div className='all--nav'>
    <div className='nav--container'>
      <h1 className='nav--title'>Kate Fucking Madden</h1>
      <Link to='/' className='nav--home'>Home</Link> 
    </div>
    </div>
  )
}

export default Nav
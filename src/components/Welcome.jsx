import React from 'react'
import image from '../assets/kate.jpg';
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='welcome--container'>
    <img src={image} alt='kate'/>

    <div className='boxes--container'>

<div className='welcome--box'>
<Link to='/artwork'><h1 className='welcome--text'>Artwork</h1></Link>
</div>

<div className='welcome--box'>
<Link to='/about'><h1 className='welcome--text'>About me</h1></Link>
</div>

<div className='welcome--box'>
   <Link to='/resume'><h1 className='welcome--text'>Resume</h1></Link>
</div>

</div>
    </div>
  )
}

export default Welcome

// <Link to='/Home' className='nav--welcome--home'>Home</Link>
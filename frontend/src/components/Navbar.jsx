import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className=''>
        <div className='center-text'>
        Arjun's Mern App
      </div>
        <ul>
            <Link to={'/'}><li><button className='btn'>Home</button></li></Link>            
        </ul>
    </nav>
    
  )
}

export default Navbar
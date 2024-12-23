import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Assets/image.png' 
const Navbar = () => {
  const [isLogedIn, setLogedIn] = useState(true)
  // let isLogedIn = true;

  return (
    <div className='nav'>
      <div className="logo">
        <img src={Logo} width="200px" alt="Logo" />
      </div>
      <div className="links">
        <ul>
            <li><NavLink className='link' to='/'>Home</NavLink></li>
            <li><NavLink className='link' to='/about'>About</NavLink></li>
            <li><NavLink className='link' to='/contact'>Contact</NavLink></li>
            <li><NavLink className='link' to='/services'>Services</NavLink></li>
            <li><NavLink className='link' to='/sample'>Sample</NavLink></li>
            <li><NavLink className='link' to='/products'>Products</NavLink></li>
        </ul>
      </div>
    {  (isLogedIn)?(<div className="btns">
        <button><i className="fa-solid fa-user"></i>Profile</button>
        <button onClick={()=>{
          setLogedIn(false)
        }}><i class="fa-solid fa-right-to-bracket"></i>Logout</button>
        <button><i class="fa-solid fa-right-to-bracket"></i>Dashboard</button>
      </div>):(<div className="li-btn">
        <button onClick={()=>{
          setLogedIn(true)
        }}><i class="fa-solid fa-right-to-bracket"></i>Login</button>
      </div>)}
    </div>
  )
}

export default Navbar

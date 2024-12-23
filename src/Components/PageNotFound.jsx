import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='parent'>
        <div className="div-error">
            <img src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147735273.jpg?ga=GA1.1.682724094.1724996015&semt=ais_hybrid" width="500px" alt="" />
            <h3>It appears you are lost...</h3>
            <p>My Website show you the way</p>
            <NavLink to="/" className="tmh">Take Me Home</NavLink>
        </div>
    </div>
  )
}

export default PageNotFound

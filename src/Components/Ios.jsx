import React from 'react'

import { DataContext } from '../App'
import { useContext } from 'react'

const Ios = () => {
    let data = useContext(DataContext)
    console.log(data)
  return (
    <div className='box'>
        <p>I am Ios Component</p>
        <div className="sub-box">
            <p>Type Of Dev:{data.type}</p>
            <p>Price Of Dev: {data.price}</p>
            <p>Version We Use: {data.version}</p>
            <p>Devices:{data.cate}</p>
        </div>
    </div>
  )
}

export default Ios

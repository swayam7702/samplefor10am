import React, { useEffect, useRef, useState } from 'react'

const Sample = () => {

    // const  [ data,setData] = useState("")


   let data = useRef(null) ;

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    useEffect(()=>{
        data.current.focus()
    },[])


  return (
    <>
      <div>
            <form action="" onSubmit={handleSubmit}>
                <input ref={data} type="text" name="" id="" placeholder='Enter Name.....' />
                <input type="submit" value="Submit" />
            </form>
      </div>
    </>
  )
}

export default Sample

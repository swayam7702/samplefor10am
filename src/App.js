import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import GettingFromJson from './Components/GettingFromJson'
import AgeCaluclate from './Components/AgeCaluclate'
import SignupForm from './Components/SignupForm'
import Services from './Components/Services'

import { createContext } from 'react'
import Responsive from './Components/Responsive'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sample from './Components/Sample'
import Price from './Components/Price'
import Example from './Components/Example'

// let companies = [
//   {
//     name:"Teks",
//     address : "Hyderabad",
//     location:["Hi-Tech City","Ameerpet","Secundrabad","Dilshugnagar","KPHB","Vizag"],
//     type :"Edu Tech"
//   },
//   {
//     name:"Academy",
//     address : "Hyderabad",
//     location:["Hi-Tech City","Ameerpet","Secundrabad","Dilshugnagar","KPHB","Vizag"],
//     type :"Edu Tech"
//   },
//   {
//     name:"Hello",
//     address : "Hyderabad",
//     location:["Hi-Tech City","Ameerpet","Secundrabad","Dilshugnagar","KPHB","Vizag"],
//     type :"Edu Tech"
//   },
//   {
//     name:"Hi",
//     address : "Hyderabad",
//     location:["Hi-Tech City","Ameerpet","Secundrabad","Dilshugnagar","KPHB","Vizag"],
//     type :"Edu Tech"
//   },
//   {
//     name:"VS",
//     address : "Hyderabad",
//     location:["Hi-Tech City","Ameerpet","Secundrabad","Dilshugnagar","KPHB","Vizag"],
//     type :"Edu Tech"
//   },
//   {
//     name:"TA",
//     address : "Hyderabad",
//     location:["Hi-Tech City","Ameerpet","Secundrabad","Dilshugnagar","KPHB","Vizag"],
//     type :"Edu Tech"
//   },
//   {
//     name:"Teks Academy",
//     address : "Hyderabad",
//     location:["Hi-Tech City","Ameerpet","Secundrabad","Dilshugnagar","KPHB","Vizag"],
//     type :"Edu Tech"
//   },
//   {
//     name:"Teks Academy",
//     address : "Hyderabad",
//     location:["Hi-Tech City","Ameerpet","Secundrabad","Dilshugnagar","KPHB","Vizag"],
//     type :"Edu Tech"
//   },
//   {
//     name:"Teks Academy",
//     address : "Hyderabad",
//     location:["Hi-Tech City","Ameerpet","Secundrabad","Dilshugnagar","KPHB","Vizag"],
//     type :"Edu Tech"
//   },
//   {
//     name:"Teks Academy",
//     address : "Hyderabad",
//     location:["Hi-Tech City","Ameerpet","Secundrabad","Dilshugnagar","KPHB","Vizag"],
//     type :"Edu Tech"
//   },
//   {
//     name:"Teks Academy",
//     address : "Hyderabad",
//     location:["Hi-Tech City","Ameerpet","Secundrabad","Dilshugnagar","KPHB","Vizag"],
//     type :"Edu Tech"
//   },
//   {
//     name:"Teks Academy",
//     address : "Hyderabad",
//     location:["Hi-Tech City","Ameerpet","Secundrabad","Dilshugnagar","KPHB","Vizag"],
//     type :"Edu Tech"
//   }
// ]

// console.log(companies.length)


let detailsForApp = {
    type:"IOS",
    price:"Depends On Pages",
    version:"Latest Version in Market",
    cate:"We Can Provide Both for Mobile & Tablets"
};

export let DataContext = createContext()

const App = () => {
  return (
      <>



     
      {/* <div className='parent'>
        {
          companies.map((company)=>{
            return(
              <Information name={company.name} address={company.address} location={company.location[0]} type={company.type}/>
            )
          })
        }
      </div> */}

       <Navbar/>
      <DataContext.Provider value={detailsForApp}>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='json' element={<GettingFromJson/>}/>
          <Route path='age' element={<AgeCaluclate/>}/>
          <Route path='form' element={<SignupForm/>}/>
          <Route path='services' element={<Services />}/>
          <Route path='slider' element={<Responsive/>}/>
          <Route path='sample' element={<Sample/>}/>
          <Route path='price' element={<Example/>}/>
        </Routes>
      </DataContext.Provider> 






      </>

  )

 
}

export default App

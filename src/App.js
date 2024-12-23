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


export let DataContext = createContext()

const App = () => {
  return (
      <Example/>

  )

 
}

export default App

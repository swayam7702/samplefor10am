import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


const Products = () => {
  const [products, setProducts] = useState([])
  const [userInput, setUserInput] = useState("")


// useEffect(() => {
//     AOS.init({
   
//       duration: 700,
//       easing: "ease-out-cubic",
//     });
//   }, []);



useEffect(() => {
  AOS.init({
 
    duration: 700,
    easing: "ease-out-cubic",
  });
}, []);


useEffect(()=>{
   fetch('https://fakestoreapi.com/products')
  .then(Response=>Response.json())
  .then((posts)=>setProducts(posts))
},[])


const filteredProducts = products.filter((product)=>{
  if(userInput === ""){
    return product;
  }
  else if(product.description.toLowerCase().includes(userInput.toLowerCase())||product.title.toLowerCase().includes(userInput.toLowerCase())){
    return product;
  }
})


  return (
    <div>

      <div className="user-input">
      <input type="text" name="input" placeholder='Search Your Products.....' id="" onChange={(e)=>{
        setUserInput(e.target.value)

        console.log(userInput)
      }} />
      </div>

      {
         <div className="products-parent">
         {
            (filteredProducts.length>0)?(filteredProducts.map((product)=>{
             return(
                 <div className='product-card' key={product.id} data-aos="fade-up">
                     <img src={product.image} width="100px" alt="" />
                     <h2>{product.title.slice(0,20)}</h2>
                     <button>{product.rating.rate}|{product.rating.count}</button>
                 </div>
             )
         })):(
           <div className='pn-found'>
             <h1>Products Not Found</h1>
             {/* <img width="250px" src="data:image/png;base64,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" alt="" /> */}
             <p>Your Search: <span className='ui-data'>{userInput}</span></p>
             <b>Suggestions:</b>
 
             <ul>
               <li>Make sure that all words are spelled correctly.</li>
               <li>Try different keywords.</li>
               <li>Try more general keywords.</li>
               <li>Try fewer keywords.</li>
             </ul>
           </div>
         )
         }
        </div>
      }
     
    </div>
  )
}

export default Products

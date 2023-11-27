import { Link } from "react-router-dom"
import { usePropStore } from "../store/store"
import { searchPropertyById } from "../helper/helper"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import Avatar from "../assets/ProfilePic2.jpg"



/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

  // {
  //   id: 1,
  //   name: 'Earthen Bottle',
  //   href: '#',
  //   price: '$48',
  //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
  //   imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  // }
  
  // More products...


export default function Item() {
  const [getData,setData] =useState({})

 const params =useParams()
 console.log(params.id)
 const id = params.id
 let res = searchPropertyById(params.id)
 res.then((data)=>{ const products=data
  console.log(products)
}).catch(()=>{console.log("error in searchPropertyById helper")})

  useEffect(()=>{
  const fetchListing = async ()=>{
    const res = await fetch(`https://serverace.onrender.com/api/searchById/${id}`)
    const data = await res.json()
    console.log(data)
    if (data.succuss===false) {
      return
    }
    setData(data)
    
  }
  fetchListing()
},[id])
 
 console.log(getData)
 var products = [getData]
 console.log(products)

 const bhk = ()=>{
  if (getData.bhk1) {
    console.log("bhk1 present")
    
    document.getElementById("bhk").innerText = "1 BHK" ;
      
    
  }
  else if (getData.bhk2){
    console.log("bhk2 present")
    document.getElementById("bhk").innerText = "2 BHK" 
  }
  else if (getData.bhk3){
    console.log("bhk3 present")
    document.getElementById("bhk").innerText = "3 BHK" 
  }

 }
 bhk()
 const typeOfList = ()=>{
  if (getData.sell) {
    console.log("sell present")
    document.getElementById("type").innerText = "Sell"
  }
  else if (getData.rent){
    console.log("rent present")
    document.getElementById("type").innerText = "Rent"
  }
 

 }
 typeOfList()
 
  return (
    <div >
      
      <div>
      {products.map((product) => (
                <div key={product.id} href={product.prop} className="group">
                  {/* <div className="aspect-h-1 aspect-w-1 w-full p-1.5 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"> 
                    <img 
                      src={product.photo || Avatar }
                      alt={product.imageAlt}
                      
                      className="w-full h-88 object-fit p-5.5  group-hover:opacity-75"
                    />   
                  </div>

                  
                  <h3 className="mt-4 text-xl uppercase font-semibold text-gray-800 p-1.5">{product.propertyname} prices <span> </span></h3>
                  <p className="mt-1 text-lg font-medium text-gray-800 p-1.5" >
                  {product.address}     
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-800 p-1.5" >
                  {product.about}     
                  </p>
                  <div className="flex items-center justify-start gap-5 p-1.5 ">

                  <div  id="bhk"  className="bg-indigo-500 rounded-md p-1.5 text-white w-20"></div>
                  <div  id="type"  className="bg-indigo-500 rounded-md p-1.5 text-white w-20"></div>

                  </div> */}
                    <div className="w-full p-1.5 mx-auto bg-white rounded-2xl overflow-hidden shadow-md ">
      <div className="md:flex flex-col w-full">
        {/* <div className="md:flex-shrink-0 w-full" > */}
          <img
            className="h-72 object-fit w-5/6 ml-7 mt-4 rounded-2xl"
            src={product.photo || Avatar}
            alt="property title"
          />
        {/* </div> */}
        <div className="p-8 ">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Property Details
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium uppercase text-black gap-2">
            Name: <span>{product.propertyname}</span>
          </p>
          
          <div className="mt-4 gap-2">
            <span className="text-gray-500">Address: <span>{product.address}</span></span>
          </div>
          <div className="mt-4">
            <span className="text-gray-500">{product.about}</span>
          </div>
          <div className="mt-4">
            <span className="text-gray-500">Price: {product.price}</span>
          </div>
          <div className="mt-4">
            <span id="bhk" className="bg-indigo-500 rounded-md p-1 text-white w-14"></span>
          </div>
          <div className="mt-4">
            <span id="type" className="bg-indigo-500 rounded-md p-1 text-white w-14"></span>
          </div>
         
          {/* Add more details as needed */}
        </div>
      </div>
    </div>

                  
                </div>
              ))}
      </div>

      
      </div>
    
  )
}

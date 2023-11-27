import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useFormik } from "formik";
import { searchProperty, searchPropertyById } from "../helper/helper";
import { useNavigate,Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { usePropStore } from "../store/store";
import {useFetch} from "../hooks/fetch.hook"
import {useSellFetch} from "../hooks/fetch.sellhook"
import { listItemTextClasses } from "@mui/material";
import Avatar from "../assets/ProfilePic2.jpg"
import { useState } from "react";
import { useParams } from "react-router-dom";

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

var products = [
  // {
  //   id: 1,
  //   name: "Earthen Bottle",
  //   href: "#",
  //   price: "$48",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
  //   imageAlt:
  //     "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  // },
  // {
  //   id: 2,
  //   name: "Nomad Tumbler",
  //   href: "#",
  //   price: "$35",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
  //   imageAlt:
  //     "Olive drab green insulated bottle with flared screw lid and flat top.",
  // },
  // {
  //   id: 3,
  //   name: "Focus Paper Refill",
  //   href: "#",
  //   price: "$89",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
  //   imageAlt:
  //     "Person using a pen to cross a task off a productivity paper card.",
  // },
  // {
  //   id: 4,
  //   name: "Machined Mechanical Pencil",
  //   href: "#",
  //   price: "$35",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
  //   imageAlt:
  //     "Hand holding black machined steel mechanical pencil with brass tip and top.",
  // },
  // More products...
];
var products1 =[];

export default function List() {
const params =useParams()
const [product_id,setProduct_id]=useState({})

  const navigate = useNavigate()
  var search = usePropStore.getState().search 
  let [{apiSellData}] = useSellFetch()
  let [{apiData}] = useFetch()
  // console.log(apiSellData);
   console.log(apiData);

  const itemdetails =(e)=>{
  // var product_id = usePropStore.setState({})
  console.log(e)
  

  }
  
  if(search){
    products=Object.values(apiData)
    console.log(products);
    
  }
  else{ 
     console.log("apiSellData fetched")
     products = Object.values(apiSellData)
     console.log(products); 
  }


  const formik = useFormik({
    initialValues: {
      propertyname: "",
      bhk1: "false",
      bhk2: "false",
      bhk3: "false",
      sell: "false",
      rent: "false",
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async function (vaules) {
      console.log(vaules);
      let res = searchProperty(
         vaules.propertyname,
         vaules.bhk1,
         vaules.bhk2,
         vaules.bhk3,
         vaules.sell,
         vaules.rent,
      );
      toast.promise(res, {
        loading: "searching...",
        success: <b> Search Successful</b>,
        error: <b>Not found in database</b>,
      });
      res.then((result)=>{
        const data= result;
        products1 = Object.values(data)
        console.log(products1)
      })
      usePropStore.setState({ propertyname:vaules.propertyname });
      usePropStore.setState({ bhk1:vaules.bhk1 });
      usePropStore.setState({ bhk2:vaules.bhk2 });
      usePropStore.setState({ bhk3:vaules.bhk3 });
      usePropStore.setState({ sell:vaules.sell });
      usePropStore.setState({ rent:vaules.rent });
      usePropStore.setState({ search:true });
      res.then(()=>{navigate('/list1')})
      
    },
  });

 

  return (
    <div className="flex gap-1">
      <div className="w-1/5 bg-slate-100 h-screen  ">
        <form className="p-1 " onSubmit={formik.handleSubmit}>


          <div className="space-y-12 p-2  bg-slate-100 mx-auto gap-2 rounded-md">
            {/*  */}
            <h2 className="text-base font-semibold leading-7 text-gray-900">
                Property Search
              </h2>


            <div className="border-b border-gray-900/10 pb-1">
              <div className="mt-1 space-y-1">
                
              <div className="mt-1 grid grid-cols-1  sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="propertyname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Property name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="propertyname"
                      id="propertyname"
                      {...formik.getFieldProps("propertyname")}
                      autoComplete="property-name"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    {" "}
                    Property Type{" "}
                  </legend>
                  <div className="mt-2 space-y-2">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="bhk1"
                          name="bhk1"
                          type="checkbox"
                          {...formik.getFieldProps("bhk1")}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="bhk1"
                          className="font-medium text-gray-900"
                        >
                          1 BHK
                        </label>
                        {/* <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p> */}
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="bhk2"
                          name="bhk2"
                          type="checkbox"
                          {...formik.getFieldProps("bhk2")}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="bhk-2"
                          className="font-medium text-gray-900"
                        >
                          2 BHK
                        </label>
                        {/* <p className="text-gray-500">Get notified when a candidate applies for a job.</p> */}
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="bhk3"
                          name="bhk3"
                          type="checkbox"
                          {...formik.getFieldProps("bhk3")}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="bhk3"
                          className="font-medium text-gray-900"
                        >
                          3 BHK
                        </label>
                        {/* <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p> */}
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="text-sm py-2 font-semibold leading-6 text-gray-900">Push Notifications</legend>

                  <div className="">
                    <div className="flex items-center mt-2 gap-x-3">
                      <input
                        id="sell"
                        name="sell"
                        type="checkbox"
                        {...formik.getFieldProps("sell")}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="sell"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Sell
                      </label>
                    </div>
                    <div className="flex items-center mt-2 gap-x-3">
                      <input
                        id="rent"
                        name="rent"
                        type="checkbox"
                        {...formik.getFieldProps("rent")}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="rent"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Rent
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className=" flex mx-2 items-center  ">
            <button
              type="submit"
              className="rounded-md w-4/5 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="w-2/3 bg-slate-800 h-4/5">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              
              {products.map((product) => (
                <div key={product.id} href={product.prop} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Link to={`/item/${product._id}`}>
                    <img 
                      src={product.photo || Avatar}
                      alt={product.imageAlt}
                      
                      className="w-full h-48 object-cover p-0.5  group-hover:opacity-75"
                    />

                    </Link>
                   
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900 text-center" >
                    {product.propertyname}    
                  </p>
                 
                  
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

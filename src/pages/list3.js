import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useFormik } from "formik";
import { searchProperty,deletePropertyHelper, getUsername } from "../helper/helper";
import { useNavigate,Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { usePropStore } from "../store/store";
import {useFetch} from "../hooks/fetch.hook"
import {useSellFetch} from "../hooks/fetch.sellhook"
import {useFetchProperties} from "../hooks/fetch.properties"
// import { listItemTextClasses } from "@mui/material";
import Avatar from "../assets/ProfilePic2.jpg"
// import { data } from "autoprefixer";
import { jwtDecode } from "jwt-decode";
import { logOut } from "../helper/helper";

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
  const navigate = useNavigate()
  var search = usePropStore.getState().search 

  const token = localStorage.getItem('token')
  let decode =jwtDecode(token)
  console.log(decode)
  let {username}=decode
   console.log(username);
  
  let [{apiData1}] = useFetchProperties(username)
  

  let [{apiSellData}] = useSellFetch()
  let [{apiData}] = useFetch()
    
  // console.log(apiSellData);
   console.log(apiData1);
   products=Object.values(apiData1)
    console.log(products);
  
  if(search){
    // products=Object.values(apiData1)
    // console.log(products);
    
  }
  // else{ 
  //    console.log("apiSellData fetched")
  //    products = Object.values(apiSellData)
  //    console.log(products); 
  // }

  const deleteProperty = (e)=>{
console.log("deleteProperty")
let property_id = e.target.value
console.log(property_id)
let res = deletePropertyHelper(property_id)
  
toast.promise(res,{
  loading:'deleting property...',
  success:'deleted Successfully',
  error:'deleteProperty unsuccessfully' 
 })
 res.then(function(){navigate('/list4')}).catch(()=>{console.log("server not respond try again")})
 

  }
  const editProperty = (e)=>{
    console.log("editProperty")
    let property_id = e.target.value
    
    usePropStore.setState({ property_id:property_id });

    navigate('/edit')

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
      <div className="w-1/5 bg-gray-400 mt-5 rounded-2xl  ">
        <form className="p-1 " onSubmit={formik.handleSubmit}>
        <nav class="mt-6">
                <div>
                  <Link
                    class="flex items-center justify-start w-full p-4 my-2 text-white uppercase bg-gray-500 hover:bg-indigo-500"
                    to={"/list3"}
                  >
                    <span class="text-left"></span>
                    <span class="mx-4 text-sm font-normal">Dashboard</span>
                  </Link>
                  <Link
                    class="flex items-center justify-start w-full p-4 my-2  text-white uppercase hover:bg-indigo-500"
                    to={"/list"}
                  >
                    <span class="text-left"></span>
                    <span class="mx-4 text-sm  font-normal">Properties</span>
                  </Link>
                  <Link
                    class="flex items-center justify-start w-full p-4 my-2 text-white uppercase hover:bg-indigo-500"
                    to={"/create"}
                  >
                    <span class="text-left"></span>
                    <span class="mx-4 text-sm font-normal">Create</span>
                  </Link>
                  <Link
                    class="flex items-center justify-start w-full p-4 my-2 text-white uppercase hover:bg-indigo-500"
                    to={"/list"}
                  >
                    <span class="text-left"></span>
                    <span class="mx-4 text-sm font-normal">Search</span>
                  </Link>
                  <Link
                    class="flex items-center justify-start w-full p-4 my-2  text-white uppercase hover:bg-indigo-500"
                    to={'/'}
                  >
                    <span class="text-left"></span>
                    <span class="mx-4 text-sm font-normal">Home</span>
                  </Link>
                  <Link
                    class="flex items-center justify-start w-full p-4 my-2 text-white uppercase hover:bg-indigo-500"
                    to={"/about"}
                  >
                    <span class="text-left"></span>
                    <span class="mx-4 text-sm font-normal">About</span>
                  </Link>
                  <Link
                    class="flex items-center justify-start w-full p-4 my-2 text-white uppercase hover:bg-indigo-500"
                    to={'/signIn'}
                  >
                    
                    <span class="mx-4 text-sm font-normal"onClick={logOut}>log out</span>
                  </Link>
                </div>
              </nav>


        </form>
      </div>
      <div className="w-2/3  h-4/5 mt-5 rounded-2xl">
        <div className="" >
            <div className="h-12 rounded-2xl text-white uppercase bg-gray-400 flex items-center justify-center">
                Properties
            </div>
          <div className="mx-auto max-w-2xl p-2.5 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              
              {products.map((product) => (
                <Link key={product.id} href={product.prop} className="group" to={'/list3'}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.photo || Avatar}
                      alt={product.imageAlt}
                      className="w-full h-48 object-cover p-0.5  group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900 flex p-1 gap-5  items-center justify-center">
                    <span className="bg-slate-200 rounded-lg p-1 trancade ">{product.propertyname}</span>
                   
                  </p>
                  <p className="flex item-cente justify-center gap-5">
                    <Link to={'/edit'}>
                  <span >
                      <button value={product._id} onClick={editProperty} type="button" className="bg-green-500 rounded-md p-1.5 text-white ">Edit</button>
                    </span>

                    </Link>
                    <span >
                      <button value={product._id} onClick={deleteProperty} type="button" className="bg-red-500 rounded-lg p-1.5 text-white ">Delete</button>
                    </span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

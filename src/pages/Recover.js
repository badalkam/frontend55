import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import { useNavigate,Link } from "react-router-dom";
import { getUser, verifypassword } from "../helper/helper";
import { toast,Toaster } from "react-hot-toast";
import { usePropStore} from "../store/store";
import { passwordValidate } from "../helper/validate";
import { generateOTP,verifyOTP } from "../helper/helper";
import { registerMail } from "../helper/helper";




export default function Recover() {
  const [name,setName]=useState({})
  
  const navigate = useNavigate()

  const  generateClick = ()=>{
 
    let res= generateOTP({})
    toast.promise(res,{
      loading:'generating OTP...',
      success:'otp send to mail Success',
      error:'OTP send failed ' 
     })  
  }
 

 const formik = useFormik({
  initialValues :{
    username:"",
    OTP :"",
  },
  
  validateOnChange: false,
  validateOnBlur: false,
  onSubmit : async function(vaules) {
    console.log(vaules)
    usePropStore.setState({ username: vaules.username});  
    const username= usePropStore.getState().username
    console.log(username)
   let res =verifyOTP(username,vaules.OTP)
   toast.promise(res,{
    loading:'VerifyOTp...',
    success:'Verfication Successfully',
    error:'Try Again' 
   })
   res.then(()=>{navigate('/reset')}).catch(()=>{console.log("error")})
    console.log(vaules);
  }, 
   
 })


  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Recovery
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter username
                </label>
                <div className="text-sm">
              
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  // autoComplete="current-password"
                  {...formik.getFieldProps("username")}
                 
                  required
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={generateClick}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Click here to generate OTP
              </button>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="OTP"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter OTP
                </label>
                <div className="text-sm">
              
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="OTP"
                  // name="password"
                  type="password"
                  // autoComplete="current-password"
                  {...formik.getFieldProps("OTP")}
                  required
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Verify OTP
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
}

// export default SignIn
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

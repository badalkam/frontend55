import React from "react";
import { Formik, useFormik } from "formik";
import { useNavigate,Link } from "react-router-dom";
import { verifypassword } from "../helper/helper";
import { toast,Toaster } from "react-hot-toast";
import { usePropStore} from "../store/store";
import { resetPasswordValidate2 } from "../helper/validate";
import { resetPassword } from "../helper/helper";



export default function Reset() {
  
  const navigate = useNavigate()
  
 const formik = useFormik({
  initialValues :{
    password:"",
    cnf_password:""
  },
  validate: resetPasswordValidate2,
  validateOnChange: false,
  validateOnBlur: false,
  onSubmit : async function(vaules) {
    // console.log(vaules)
    const username= usePropStore.getState().username
    console.log(username)
    // console.log(vaules);
    let res =resetPassword(username,vaules.cnf_password)
    toast.promise(res,{
     loading:'reset...',
     success:'reset  Successfully',
     error:'try angain' 
    })
    res.then(()=>{navigate('/list')}).catch(()=>{console.log("error")})
    

      
    
  }

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
            Reset Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
               Enter New password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  {...formik.getFieldProps("password")}
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="cnf_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                 Confirm Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="cnf_password"
                  // name="password"
                  type="password"
                  // autoComplete="current-password"
                  {...formik.getFieldProps("cnf_password")}
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
                Update
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

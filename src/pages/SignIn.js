import React from "react";
import { Formik, useFormik } from "formik";
import { useNavigate,Link } from "react-router-dom";
import { verifypassword } from "../helper/helper";
import { toast,Toaster } from "react-hot-toast";
import { usePropStore} from "../store/store";
import { passwordValidate } from "../helper/validate";




export default function SignIn() {
  
  const navigate = useNavigate()
  
  // refreshOne()

 const formik = useFormik({
  initialValues :{
    username :"",
    password:""
  },
  validate: passwordValidate,
  validateOnChange: false,
  validateOnBlur: false,
  onSubmit : async function(vaules) {
    console.log(vaules)
    let loginPromise = verifypassword({username:vaules.username,password:vaules.password})
    toast.promise(loginPromise,{
     loading:'login...',
     success:'login Success',
     error:'login failed check username password' 
    })
    loginPromise.then((data)=>{
      const loginData=data
      let token =data.data.token
        console.log(token)
        localStorage.setItem('token',token)
    }).catch((error)=>{console.log(error)})
      
    
    loginPromise.then(function(){navigate('/list3')
    window.location.reload()
  
  }).catch(()=>{console.log("error")})
  
  





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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  {...formik.getFieldProps("username")}
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to={'/recoverOTP'}
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  // name="password"
                  type="password"
                  // autoComplete="current-password"
                  {...formik.getFieldProps("password")}
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
                login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/signUp"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              click to sign In
            </Link>
          </p>
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

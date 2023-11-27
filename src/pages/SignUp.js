import React from "react";
import { Formik, useFormik } from "formik";
import { useNavigate,Link } from "react-router-dom";
import { registerUser } from "../helper/helper";
import { toast,Toaster } from "react-hot-toast";
import { usePropStore} from "../store/store";
import { passwordValidate } from "../helper/validate";



export default function SignUp() {
 
  const navigate = useNavigate()

 const formik = useFormik({
  initialValues :{
    email :"",
    username :"",
    password:''
  },
  validate: passwordValidate,
  validateOnChange: false,
  validateOnBlur: false,
  onSubmit : async function(vaules) {
    console.log(vaules)
    // usePropStore.setState({userStore:vaules.username})
    // const username=usePropStore.getState().userStore 
    // console.log(username)
    
    let registerPromise=registerUser({username:vaules.username,password:vaules.password,email:vaules.email})
      toast.promise(registerPromise,{
        loading:'creating...',
        success: <b>Register Successfully</b>,
        error:<b>Register Failed Try Unique Username and Email</b>
      })
      registerPromise.then(function(){navigate('/signIn')}).catch(()=>{console.log("error")})
      

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
      <Toaster position="top-center" reverseOrder="false"></Toaster>
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
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  {...formik.getFieldProps("email")}
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
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already Resister ?{" "}
            <Link
              to="/signIn"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Click to login
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

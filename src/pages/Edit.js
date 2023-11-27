
import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { createProperty, getUsername ,updatePropertyHelper} from "../helper/helper";
import { toast, Toaster } from "react-hot-toast";
import { usePropStore } from "../store/store";
import { covertToBase64 } from "../helper/Convert";
import { jwtDecode } from "jwt-decode";
import { data } from "autoprefixer";


export default function Create() {
 const property_id = usePropStore.getState().property_id
 
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      propertyname: "",
      address: "",
      about: "",
      bhk1: "false",
      bhk2: "false",
      bhk3: "false",
      sell: "false",
      rent: "false",
      photo: "",
      username:"",
      price:"",
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async function (vaules) {
      
      vaules = await Object.assign(vaules, { photo: file });
     
      const usernameLocalStorage =getUsername().then((data)=>{
        console.log(data)
        vaules =  Object.assign(vaules, { username: data });
        const registerPromise = updatePropertyHelper(property_id,vaules
 
        );
        console.log(vaules);
        toast.promise(registerPromise, {
          loading: "updating...",
          success: <b> Successfully</b>,
          error: <b>Update failed</b>,
        });
      }).catch((error)=>{console.log(error)})
      
      // toast.promise(usernameLocalStorage, {
      //   loading: "adding...",
      //   success: <b> user added Successfully</b>,
      //   error: <b>Register Failed Try Unique Username and Email</b>,
      // });
      navigate('/list3')


      // console.log(vaules)
      // let registerPromise = createProperty({
      //   propertyname: vaules.propertyname,
      //   address: vaules.address,
      //   about: vaules.about,
      //   bhk1: vaules.bhk1,
      //   bhk2: vaules.bhk2,
      //   bhk3: vaules.bhk3,
      //   sell: vaules.sell,
      //   rent: vaules.rent,
      //   photo: vaules.photo,
      //   username:vaules.username,
      // });
      // console.log(vaules);
      // toast.promise(registerPromise, {
      //   loading: "creating...",
      //   success: <b> Successfully</b>,
      //   error: <b>Register Failed Try Unique Username and Email</b>,
      // // });
      // registerPromise.then(()=>{navigate('/list')}).catch((error)=>{console.log(error)})
    

    },
  });
  const onUpload = async (e) => {
    const base64 = await covertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <form className="p-10 " onSubmit={formik.handleSubmit}>
      <div className="space-y-12 p-8 w-2/3 bg-slate-100 mx-auto gap-2 rounded-md">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Property
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 focus:outline-none grid grid-cols-1 gap-x-1 gap-y-1 sm:grid-cols-6">
            {/* <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div> */}

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 ">
                <div className="text-center">
                
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none  focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                    
                      <span>Upload a file</span>
                      <img src= {file|| ""} className="h-auto max-w-full rounded-lg shadow-xl
                      "/>
                      <input
                        onChange={onUpload}
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Property Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Property address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  id="address"
                  {...formik.getFieldProps("address")}
                  autoComplete="address"
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  {...formik.getFieldProps("about")}
                  rows={3}
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Notifications
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                {" "}
                Property Type{" "}
              </legend>
              <div className="mt-6 space-y-6">
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
                    <label htmlFor="bhk1" className="font-medium text-gray-900">
                      1 BHK
                    </label>
                    <p className="text-gray-500">
                      Get notified when someones posts a comment on a posting.
                    </p>
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
                    <p className="text-gray-500">
                      Get notified when a candidate applies for a job.
                    </p>
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
                    <label htmlFor="bhk3" className="font-medium text-gray-900">
                      3 BHK
                    </label>
                    <p className="text-gray-500">
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Push Notifications
              </legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                These are delivered via SMS to your mobile phone.
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
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
                <div className="flex items-center gap-x-3">
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
                <div className="sm:col-span-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="price"
                  id="price"
                {...formik.getFieldProps("price")}
                  autoComplete="price"
                  className="block w-3/5 rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
                {/* <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    No push notifications
                  </label>
                </div> */}
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update
        </button>
      </div>
    </form>
  );
}

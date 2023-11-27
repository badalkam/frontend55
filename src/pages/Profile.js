import React, { useState } from "react";

import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { searchPropertyByUsername, getUsername } from "../helper/helper";
import { toast, Toaster } from "react-hot-toast";
import { usePropStore } from "../store/store";
import Avatar from "../assets/ProfilePic2.jpg"
import team1 from "../assets/team1.jpg"
import { jwtDecode } from "jwt-decode";
import { data } from "autoprefixer";

var products = [
  // {
  //   id: 1,
  //   propertyname: "Earthen Bottle",
  //   href: "#",
  //   price: "$48",
  //   photo:
  //     "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
  //   address:
  //     "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  // },
  // {
  //   id: 2,
  //   propertyname: "Earthen Bottle2",
  //   href: "#",
  //   price: "$48",
  //   photo:
  //     "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
  //   address:
  //     "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  // },
  // {
  //   id: 3,
  //   propertyname: "Earthen Bottle3",
  //   href: "#",
  //   price: "$48",
  //   photo:
  //     "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
  //   address:
  //     "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  // },
  // {
  //   id: 4,
  //   propertyname: "Earthen Bottle4",
  //   href: "#",
  //   price: "$48",
  //   photo:
  //     "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
  //   address:
  //     "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  // },
];

export default function Profile() {
  const navigate = useNavigate();
  const getuserNameFromHelper = () => {
    try {
      const username = getUsername()
        .then((data) => {
          console.log(data);
          const List1 = searchPropertyByUsername({ username: data })
            .then((data) => {
              console.log(data);
              const list = data.data;

              products = Object.values(list);

              console.log(products);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  getuserNameFromHelper();

  const getUserProperties = () => {
    console.log();
  };

  const deleteProperty = () => {};

  const editProperty = () => {};

  return (
    <div>
      <div className="w-full p-1.5 mx-auto bg-white rounded-2xl overflow-hidden shadow-md ">
      <div className="md:flex flex-col w-full">
        {/* <div className="md:flex-shrink-0 w-full" > */}
          <img
            className="h-72 object-fit rounded-2xl"
            src={team1}
            alt="property title"
          />
        {/* </div> */}
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            property type
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">
            property title
          </p>
          <p className="mt-2 text-gray-500">property description</p>
          <div className="mt-4">
            <span className="text-gray-500">Price: propertyp rice</span>
          </div>
          <div className="mt-4">
            <span className="text-gray-500">Bedrooms: property bedrooms</span>
          </div>
          <div className="mt-2">
            <span className="text-gray-500">Bathrooms: property bathrooms</span>
          </div>
          <div className="mt-2">
            <span className="text-gray-500">Area:  property area sq. ft.</span>
          </div>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
    </div>
  );
}

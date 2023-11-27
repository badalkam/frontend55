import React, { useState } from "react";

import {Navigate, Link, Outlet } from "react-router-dom";
import {  getUsername } from "../helper/helper";
import { toast, Toaster } from "react-hot-toast";

import { jwtDecode } from "jwt-decode";




export default function ProtectedRoutes() {
    const token = localStorage.getItem("token");
    if (token) {
      var username = true
        
    }
    else{
      username= false
    }
   
   

  return (
   username?<Outlet/>:<Navigate to={'/signIn'}/>
  );
}

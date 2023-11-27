import { replace } from "formik";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"
import { useDogStore } from "../store/store";

export const AuthorizeUser= ({childern})=>{
    const token = localStorage.getItem('token')
    if (!token) {
        return <Navigate to={ '/'}replace={true}></Navigate>
    }
    return childern;
}




export const ProtectRoute= ({childern})=>{
    const username= useDogStore.getState().paw

    if (!username) {
        return <Navigate to={'/'} replace={true}></Navigate>
    }
    return childern;
   
    
}
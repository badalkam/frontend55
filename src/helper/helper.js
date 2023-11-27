// make api request
import { data } from "autoprefixer";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL=process.env.REACT_APP_SERVER_DOMAIN

// to get username from token
export async function getUsername(){
    
    const token = localStorage.getItem('token')

    let decode =jwtDecode(token)
    let {username}=decode
        // console.log(decode);
        return username;
}

// to get username from token
export async function logOut(){
    
    const token = localStorage.clear()
    console.log(token)
    const refreshOne = async function() {
        setTimeout(()=>{
          window.location.reload()
        },55) 
      }
   refreshOne()
    


}
// authenticate function
 export async function authenticate(username){
    try {
        return await axios.get(`https://serverace.onrender.com/api/user/${username}`)
        
    } catch (error) {
        return {error:"axios username does not exit...!"}
    }
 }
 
// authenticate function
export async function getUser(username){
    try {
        const {data}= await axios.get(`https://serverace.onrender.com/api/user/${username}`)
        return {data}
        
    } catch (error) {
        return {error:"Password does not exit...!"}
    }
 }

export async function registerUser({username,password,email}){
    try {

        const{data:{msg},status}=await axios.post('http://localhost:5500/api/register',{username,password,email})
       

        // send mail
        if(status===201){
            const msg = "you have register succusefully"
            await axios.post('http://localhost:5500/api/registerMail',{username,userEmail:email,text:msg,subject:"registation confirmation"})
        }
        return Promise.resolve(msg);


    } catch (error) {
        return Promise.reject({error})
    }
}
export async function sendMail({username,email,code}){
    try {
        const msg = `your otp is ${code}`
            await axios.post('https://serverace.onrender.com/api/otp',{username,userEmail:email,text:msg,subject:"password recovery"})
        
        return Promise.resolve(msg);


    } catch (error) {
        return Promise.reject({error})
    }
}

export async function verifypassword({username,password}){
    try {
        if(username){
            const {data}= await axios.post('https://serverace.onrender.com/api/login',{username,password})
            return Promise.resolve({data})
        }
        
    } catch (error) {
        return Promise.reject({error:" axios Password dosen't match"})
    }

}

export async function updateuser(response){

    try {
        const token = await localStorage.getItem('token');
        const data = await axios.put('https://serverace.onrender.com/api/updateuser',response,{headers:{"Authorization":`Bearer ${token}`}});
         return Promise.resolve({data})
        
    } catch (error) {
        return Promise.reject({error:" axios coulden't update profile"})
    }
}

export async function generateOTP({username}){
    try {
        const {data,status} = await axios.get(`https://serverace.onrender.com/api/generateOTP/`,{params:{username}})
        console.log(data)
        console.log(status)
        let {code} = data
        console.log(code)

       return Promise.resolve(code)
        
    } catch (error) {
        return Promise.reject({error})
        
    }
}

export async function verifyOTP(username,code){
    try {
        const {data,status}= await axios.get('https://serverace.onrender.com/api/verifyOTP',{params:{username,code}});
        return{data,status}
    } catch (error) {
       return Promise.reject(error) 
    }

}

export async function resetPassword(username,password){
    try {
        const {data,status}= await axios.put('https://serverace.onrender.com/api/resetPassword',{username,password})
        return Promise.resolve({data,status})
        
    } catch (error) {
        return Promise.reject({error})
        
    }

}

export async function registerMail(username,password,email,text){
    try {
        const {data,status}= await axios.get('https://serverace.onrender.com/api/registerMail',{username,password,email,text})
        return Promise.resolve({data,status})
        
    } catch (error) {
        return Promise.reject({error})
        
    }

}

export async function login(username,password){
    try {
        const {data,status}= await axios.get('http://localhost:5500/api/login',{username,password})
        return {data,status}
        
    } catch (error) {
        return Promise.reject({error})
        
    }

}

export async function createProperty({propertyname,address,about,bhk1,bhk2,bhk3,sell,rent,photo,username,price}){
    try {

        const{data}=await axios.post('https://serverace.onrender.com/api/create',{propertyname,address,about,bhk1,bhk2,bhk3,sell,rent,photo,username,price})
        return {data}
         
    } catch (error) {
        return Promise.reject({error})
    }
}

export async function searchProperty(propertyname,bhk1,bhk2,bhk3,sell,rent){
    try {

        
        const {data}= await axios.get('https://serverace.onrender.com/api/search',{params:{propertyname,bhk1,bhk2,bhk3,sell,rent}});
        
        console.log({data})
        return {data} 
         
    } catch (error) {
        return Promise.reject({error})
    }
}

export async function searchPropertyByUsername({username}){
    try {

        
        const {data}= await axios.get('https://serverace.onrender.com/api/find',{params:{username}});
        
        console.log({data})
        return data 
         
    } catch (error) {
        return Promise.reject({error})
    }
}
export async function searchPropertyById(id){
    try {

        
        const {data}= await axios.get(`https://serverace.onrender.com/api/searchById/${id}`);
        
        console.log({data})
        return data 
         
    } catch (error) {
        return Promise.reject({error})
    }
}
export async function deletePropertyHelper(id){
   

    try {
       
        const token = await localStorage.getItem('token');
        console.log(token)
        const data = await axios.delete(`https://serverace.onrender.com/api/deteleProperty/${id}`,{headers:{"Authorization":`Bearer ${token}`}});
         return Promise.resolve({})
        
    } catch (error) {
        return Promise.reject({error:" axios coulden't delele property or token not recieve"})
    }
}
export async function updatePropertyHelper(id,response){
   

    try {
       
        const token = await localStorage.getItem('token');
        console.log(token)
        const data = await axios.put(`https://serverace.onrender.com/api/updateProperty/${id}`,response,{headers:{"Authorization":`Bearer ${token}`}});
         return Promise.resolve({})
        
    } catch (error) {
        return Promise.reject({error:" axios coulden't delele property or token not recieve"})
    }
}




import axios from "axios";
import { useEffect, useState } from "react";
import { searchProperty,getUsername,searchPropertyByUsername } from "../helper/helper";


// custom hook
export  function useFetchProperties(query){
  const [getData, setData]= useState({isLoading:false,apiData1:{},status:null,serverError:null})
    
    useEffect(()=>{
        // if(!query) return

        const fetchData = async ()=>{
            try {
                setData(prev=>({...prev,isLoading:true}))
                
                const {data ,status}=await axios.get(`https://serverace.onrender.com/api/find/${query}`)
                
                const apiData1 =data;
                console.log(apiData1)

                if (status===201){
                    setData(prev=>({...prev,isLoading:false}))
                    setData(prev=>({...prev,apiData1: data,status:status}))
                    console.log(apiData1)
                }
                setData(prev=>({...prev,isLoading:false}))
            } catch (error) {
                setData(prev=>({...prev,isLoading:false,serverError:error}))
            }
        };
        fetchData()
    },[query])

 
    return [getData,setData]
    
}


export default useFetchProperties


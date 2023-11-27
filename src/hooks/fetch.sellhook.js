import axios from "axios";
import { useEffect, useState } from "react";


// custom hook
export  function useSellFetch(query){
    const [getData, setData]= useState({isLoading:false,apiSellData:{},status:null,serverError:null})
    
    useEffect(()=>{
        // if(!query) return

        const fetchData = async ()=>{
            try {
                setData(prev=>({...prev,isLoading:true}))
                
                const {data ,status}=await axios.get(`https://serverace.onrender.com/api/searchsell`)
                
                const apiSellData =data;

                if (status===201){
                    setData(prev=>({...prev,isLoading:false}))
                    setData(prev=>({...prev,apiSellData: data,status:status}))
                    console.log(apiSellData)
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


export default useSellFetch


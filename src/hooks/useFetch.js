import axios from "axios";
import { useState,useEffect } from "react";
export default function useFetch(url){
   
    const [data ,setData ] =useState(null)
    const [loading ,setLoading ] =useState(true)
    const [error ,setError ] =useState(null)

  async function FetchData(){
    try {
      const response = await axios.get(url)
      setData(response.data)
      setLoading(false)
    } catch (error) {
        setError(error.message)
        setLoading(false)
    }

  }
    useEffect(() =>{
      FetchData()
    },[])
  
  return {loading,data,error}
}
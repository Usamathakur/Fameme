import { API_URL,authToken } from "./config";
export const listTrends = async()=>{
  
    //fetch trends
    const res = await fetch(`${API_URL}/trend`,{
      headers:{
        Authorization: `Bearer ${authToken}`
      }
    });
    if(res.status!=200){
      throw new Error('Error Fetching Trends')
    }
    return await res.json()
};
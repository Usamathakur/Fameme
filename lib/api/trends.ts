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

export const getTrend = async (id:string)=>{
  //fetch trends by id
  const res = await fetch(`${API_URL}/trend/${id}`,{
    headers:{
      Authorization: `Bearer ${authToken}`
    }
  });
  if(res.status!=200){
    throw new Error('Error Fetching Trends')
  }
  return await res.json()
}

export const createTrend = async (data:{content:string})=>{
  //fetch trends by id
  const res = await fetch(`${API_URL}/trend/`,{
    method:'POST',
    headers:{
      Authorization: `Bearer ${authToken}`,
      'Content-type': 'application/json'
    },
    body:JSON.stringify(data),
  });
  if(res.status!=200){
    throw new Error('Error Creating Your Trend')
  }
  return await res.json()
}
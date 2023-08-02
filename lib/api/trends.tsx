import { PropsWithChildren, createContext, useContext } from "react";
import { API_URL } from "./config";
import { useAuth } from "../../context/AuthContext";

const TrendsApiContext = createContext({});

const TrendsApiContextProvider = ({children}:PropsWithChildren)=>{
  const { authToken, removeAuthToken } = useAuth();
  const listTrends = async()=>{
    if (!authToken) {
      return;
    }
    //fetch trends
    const res = await fetch(`${API_URL}/trend`,{
      headers:{
        Authorization: `Bearer ${authToken}`
      }
    });
    if (res.status === 401) {
      removeAuthToken();
      throw new Error('Not authorized. Please sign in');
    }
    if(res.status!=200){
      throw new Error('Error Fetching Trends')
    }
    return await res.json()
};

const getTrend = async (id:string)=>{
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

const createTrend = async (data:{content:string})=>{
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
  return(
    <TrendsApiContext.Provider value={{
      listTrends,
      getTrend,
      createTrend
    }}>
      {children}
    </TrendsApiContext.Provider>
  )
};
export default TrendsApiContextProvider;

export const useTrendsApi = ()=>useContext(TrendsApiContext);

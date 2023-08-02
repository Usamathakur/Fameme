import { StyleSheet,FlatList, Pressable, ActivityIndicator } from 'react-native';
import { Text, View} from '../../../../components/Themed';
import Tweet from '../../../../components/Tweet';
//import tweets from '../../../../assets/tweets';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
import {useState,useEffect} from 'react'
import { listTrends } from '../../../../lib/api/trends';
import { useQuery } from '@tanstack/react-query/';
export default function FeedScreen() {
  const {data,isLoading,error} = useQuery({
    queryKey:['trends'],
    queryFn: listTrends,
  })
  /* const [trends,setTrend] = useState([]);
  
  useEffect(()=>{
    const fetchTrends = async ()=>{
      const res = await listTrends();
      setTrend(res);
    };
    fetchTrends();
  },[]) */
  if(isLoading){
    return <ActivityIndicator/>
  }
  if(error){
    return <Text>{error.message}</Text>
  }
  return (
    <View style={styles.page}>
      <FlatList data={data} renderItem={({item})=><Tweet tweet={item}/>}/>
      
      <Pressable style={styles.floatingButton}>
      <Link href='/new-tweet' asChild>
      <Entypo name="plus" size={30} color="white" />
      </Link>
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor:'white'
  },
  floatingButton:{
    backgroundColor:'red',
    width:50,
    height:50,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    right:25,
    bottom:15,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
  },
  
});

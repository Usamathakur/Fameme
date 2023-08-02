import Tweet from "../../../../../components/Tweet";
import {ActivityIndicator, Text} from 'react-native'
import { useSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query/";
import { getTrend } from "../../../../../lib/api/trends";
export default function TweetScreen(){
    const {id} = useSearchParams();
    const {data,isLoading,error} = useQuery({
        queryKey:['trend',id],
        queryFn: ()=>getTrend(id as string)
    })

    if(isLoading){
        return <ActivityIndicator/>
    }
    
    if(error){
        return <Text>Tweet {id} not found!</Text>;
    }

    return <Tweet tweet={data}/>;
}
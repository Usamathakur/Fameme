import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Pressable, SafeAreaView } from "react-native";
import { View,StyleSheet, Text, Image, TextInput } from "react-native";
import { useMutation,useQueryClient } from "@tanstack/react-query/";
import { createTrend } from "../lib/api/trends";
const user={
    id: 'u1',
    username: 'VadimNotJustDev',
    name: 'Vadim',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
  }
export default function NewTweet(){
    const [text,setText]=useState('');
    const router = useRouter();
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading, isError, error } = useMutation({
        mutationFn: createTrend,
        onSuccess: (data) => {
          // queryClient.invalidateQueries({ queryKey: ['tweets'] })
          queryClient.setQueriesData(['trends'], (existingTrends) => {
            return [data, ...existingTrends];
          });
        },
      });


    const onTweetPress=async()=>{
        try{
            await mutateAsync({content:text})
            setText('');
            router.back();
        }catch(e){
            console.log("Error",e.message)
        }
        

        
    }
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
            <Link href='../' style={{fontSize:18}}>
                Cancel
            </Link>
            {isLoading && <ActivityIndicator/>}
            <Pressable onPress={onTweetPress} style={styles.button}>
                <Text style={styles.buttonText}>Trend</Text>
            </Pressable>
            </View>
            <View style={styles.inputContainer}>
            <Image src={user.image} style={styles.image}/>
            <TextInput
            value={text}
            onChangeText={(newValue)=>setText(newValue)}
            placeholder="Let's Trend" multiline numberOfLines={3}
            style={{flex:1}}
            />
            </View>
            {isError && <Text>{error.message}</Text>}
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image:{
        width:50,
        aspectRatio:1,
        borderRadius:50,
        marginRight:15
    },
    container:{
        padding:22,
        flex:1
    },
    inputContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flexDirection:'row',
        marginVertical:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    button:{
        backgroundColor:'red',
        padding:5,
        paddingHorizontal:20,
        borderRadius:50
    },
    buttonText:{
        color:'white',
        fontWeight:'500'
    }
})
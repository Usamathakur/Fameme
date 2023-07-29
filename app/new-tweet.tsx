import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView } from "react-native";
import { View,StyleSheet, Text, Image, TextInput } from "react-native";

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
    const onTweetPress=()=>{
        console.warn('Trend Posted ' + text)
        setText('');
        router.back();
    }
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
            <Link href='../' style={{fontSize:18}}>
                Cancel
            </Link>
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
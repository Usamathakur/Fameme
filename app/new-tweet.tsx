import { View,StyleSheet, Text, Image, TextInput } from "react-native";

const user={
    id: 'u1',
    username: 'VadimNotJustDev',
    name: 'Vadim',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
  }
export default function NewTweet(){
    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <Image src={user.image} style={styles.image}/>
            <TextInput
            placeholder="Let's Trend" multiline numberOfLines={3}
            style={{flex:1}}
            />
            </View>
        </View>
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
        padding:10,
        backgroundColor:'white',
        flex:1
    },
    inputContainer:{
        flexDirection:'row'
    }
})
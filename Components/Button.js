import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'


const {width,height} = Dimensions.get("window");


const Button = ({handle}) => {
  return (
    <View>
<TouchableOpacity style={{marginTop:height*0.05,backgroundColor:"#3ddbbd",width:width*0.8,borderRadius:10}} onPress={handle}>
    <Text style={{padding:height*0.02,textAlign:"center",fontWeight:"700",fontSize:17}}>Continue</Text>
</TouchableOpacity>
    </View>
  )
}

export default Button
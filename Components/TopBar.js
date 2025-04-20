import { View, Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';


const {width,height} = Dimensions.get("window");

const TopBar = () => {
  return (
    <SafeAreaView>
<View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

<TouchableOpacity>
<FontAwesome5 name="bars" size={30} color="#3ddbbd" />
</TouchableOpacity>

<TouchableOpacity style={{marginRight:width*0.1}}>
<AntDesign name="questioncircle" size={30} color="#3ddbbd" />
</TouchableOpacity>

</View>
    </SafeAreaView>
  )
}

export default TopBar
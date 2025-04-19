import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { CalculatCalories } from '../AiConfig/Config';
import PromptAi from '../AiConfig/PromptAi';

const {width,height} = Dimensions.get("window");


const Home = () => {



  const handleCalculatWithAi = async () => {
    const data = {
      gender: gender,
      weight: weight + selectedTypeWeight,
      height: Height + selectedTypeHeight, 
      age: age,
      goal: goal,
    };
  
    const prompt = JSON.stringify(data) + "\n\n" + PromptAi.CALCULAT_PROMPT;
  
    try {
      const result = await CalculatCalories(prompt);
      const response = result.choices[0].message.content;
      const JsonResponse = JSON.parse(response);
      console.log(response);
      Alert.alert("Calories = "+JsonResponse.calories+" kcal "+" Carbs :"+JsonResponse.carbs+" g")
    } catch (error) {
      console.error("AI calculation error:", error);
    }
  };
  


const [weight,setWeight] =useState('');
const [selectedTypeWeight,setSelectedTypeWeight] =useState('');
const [Height,setHeight] =useState('');
const [selectedTypeHeight,setSelectedTypeHeight] =useState('');
const [age,setAge] =useState(0);
const [goal,setGoal] =useState('');
const [gender,setGender] = useState('');
  return (
<ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:100}}>
<View style={{marginLeft:width*0.1,marginTop:height*0.07}}>

<View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

<TouchableOpacity>
<FontAwesome5 name="bars" size={30} color="#3ddbbd" />
</TouchableOpacity>

<TouchableOpacity style={{marginRight:width*0.1}}>
<AntDesign name="questioncircle" size={30} color="#3ddbbd" />
</TouchableOpacity>

</View>

<View style={{marginTop:height*0.05}}>
    <Text style={{color:"white",fontWeight:"700",fontSize:23}}>Calorie Calculator</Text>

<View style={{marginTop:height*0.05}}>
<Text style={{color:"#c2cbcc"}}>Gender</Text>
<View style={{marginTop:height*0.015,display:"flex",flexDirection:"row"}}>
<TouchableOpacity style={{backgroundColor:gender==="Male"?"#3ddbbd":"white",width:width*0.4,borderRightWidth:1,borderRightColor:"black",borderTopLeftRadius:10,borderBottomLeftRadius:10}} onPress={()=>setGender("Male")}>
<Text style={{textAlign:"center",padding:height*0.02,fontWeight:"500"}}>Male</Text>
</TouchableOpacity>
<TouchableOpacity style={{backgroundColor:gender==="Female"?"#3ddbbd":"white",width:width*0.4,borderLeftWidth:1,borderLeftColor:"black",borderTopRightRadius:10,borderBottomRightRadius:10}} onPress={()=>setGender("Female")}>
<Text style={{textAlign:"center",padding:height*0.02,fontWeight:"500"}}>Female</Text>
</TouchableOpacity>

</View>
</View>

<View style={{marginTop:height*0.03}}>
<Text style={{color:"#c2cbcc"}}>Weight</Text>

<View style={{marginTop:height*0.015,display:"flex",flexDirection:"row"}}>
<TextInput onChangeText={(e)=>setWeight(e)} keyboardType='numeric' placeholder='Weight ...' placeholderTextColor={"gray"} style={{backgroundColor:"white",width:width*0.46,borderRadius:10,paddingHorizontal:10,fontWeight:"500",color:"black"}}/>

<TextInput  placeholder='Kg...' placeholderTextColor={"gray"} style={{backgroundColor:"white",width:width*0.3,borderRadius:10,paddingHorizontal:10,fontWeight:"500",color:"black",marginLeft:10}} onChangeText={(e)=>setSelectedTypeWeight(e)}/>

</View>
</View>



<View style={{marginTop:height*0.03}}>
<Text style={{color:"#c2cbcc"}}>Height</Text>

<View style={{marginTop:height*0.015,display:"flex",flexDirection:"row"}}>
<TextInput onChangeText={(e)=>setHeight(e)} keyboardType='numeric' placeholder='Height ...' placeholderTextColor={"gray"} style={{backgroundColor:"white",width:width*0.46,borderRadius:10,paddingHorizontal:10,fontWeight:"500",color:"black"}}/>

<TextInput  onChangeText={(e)=>setSelectedTypeHeight(e)} placeholder='cm...' placeholderTextColor={"gray"} style={{backgroundColor:"white",width:width*0.3,borderRadius:10,paddingHorizontal:10,fontWeight:"500",color:"black",marginLeft:10}}/>

</View>


</View>



<View style={{marginTop:height*0.03}}>
<Text style={{color:"#c2cbcc"}}>Age</Text>

<View style={{marginTop:height*0.015,display:"flex",flexDirection:"row"}}>
<TextInput onChangeText={(e)=>setAge(e)} keyboardType='numeric' placeholder='Age ...' placeholderTextColor={"gray"} style={{backgroundColor:"white",width:width*0.8,borderRadius:10,paddingHorizontal:10,fontWeight:"500",color:"black"}}/>

</View>


</View>



<View style={{marginTop:height*0.03}}>
<Text style={{color:"#c2cbcc"}}>Goal</Text>

<View style={{marginTop:height*0.015,display:"flex",flexDirection:"row"}}>
<TextInput onChangeText={(e)=>setGoal(e)} keyboardType='default' placeholder='Loose weight ...' placeholderTextColor={"gray"} style={{backgroundColor:"white",width:width*0.8,borderRadius:10,paddingHorizontal:10,fontWeight:"500",color:"black"}}/>

</View>


</View>








<TouchableOpacity style={{marginTop:height*0.05,backgroundColor:"#3ddbbd",width:width*0.8,borderRadius:10}} onPress={handleCalculatWithAi}>
    <Text style={{padding:height*0.02,textAlign:"center",fontWeight:"700",fontSize:17}}>Continue</Text>
</TouchableOpacity>



</View>



</View>
</ScrollView>

)
}

const styles = StyleSheet.create({
container:{
width:width,
height:"100%",
backgroundColor:"#000f13",
},

})



export default Home
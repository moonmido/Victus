import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import TopBar from './TopBar';
import DATA from '../ActivityData/AData';
import Button from './Button';
import PromptAi from '../AiConfig/PromptAi';
import { CalculatCalories } from '../AiConfig/Config';
import { useNavigation } from '@react-navigation/native';


const {width,height} = Dimensions.get("window");

const Activity = ({hei,wei,age,gen,goal,typewei,typehei}) => {
  const navigation = useNavigation();

    const [activity,setActivity] = useState('');
    const [selected,isSelected] = useState(false);
    
    const handleActivity = ({ item }) => {
        if (item.label === "Sendentary") setActivity("S");
        else if (item.label === "Light") setActivity("L");
        else if (item.label === "Moderate") setActivity("M");
        else if (item.label === "Active") setActivity("A");
        else if (item.label === "Very Active") setActivity("V");
        else if (item.label === "Extra Active") setActivity("E");
      };
      

    const handleCalculatWithAi = async () => {

        const data = {
          gender: gen,
          weight: wei + typewei,
          height: hei + typehei, 
          age: age,
          goal: goal,
          activity:activity
        };
        console.log("hey")


        const prompt = JSON.stringify(data) + "\n\n" + PromptAi.CALCULAT_PROMPT;
        try {
          const result = await CalculatCalories(prompt);
          const response = result.choices[0].message.content;
          const JsonResponse = JSON.parse(response);
          console.log(response);
navigation.navigate("result",{
energy:JsonResponse.energy,
water:JsonResponse.water,
protein:JsonResponse.protein,
carbs:JsonResponse.carbs,
fat:JsonResponse.fat
})
          
        } catch (error) {
          console.error("AI calculation error:", error);
        }
      };
    


  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingBottom:50}}>
    <View style={styles.SubContainer}>

    <TopBar />

<View style={{marginTop:height*0.08}}>
<Text style={{color:"#c2cbcc"}}>Activity</Text>


{DATA.map((item,key)=>{
    const isSelected =
    (item.label === "Sendentary" && activity === "S") ||
    (item.label === "Light" && activity === "L") ||
    (item.label === "Moderate" && activity === "M") ||
    (item.label === "Active" && activity === "A") ||
    (item.label === "Very Active" && activity === "V") ||
    (item.label === "Extra Active" && activity === "E");

return(
    <View key={key}>
<TouchableOpacity style={{backgroundColor:isSelected?"#3ddbbd":"white",width:width*0.79,marginTop:height*0.03,padding:10,paddingHorizontal:20,borderRadius:10}} key={key} onPress={()=>handleActivity({ item })}>
    <Text style={{fontSize:16,fontWeight:"600"}}>{item.label}</Text>
    <Text style={{color:"gray"}}>{item.desc}</Text>
</TouchableOpacity>
</View>
)})
}
<Button handle={handleCalculatWithAi} title={"Calculate"}/>

</View>




    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

container:{
width:width,
height:"100%",
backgroundColor:"#000f13"
},
SubContainer:{
    marginLeft:width*0.1,
    marginTop:height*0.07
}

})


export default Activity
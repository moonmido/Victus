import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Button from './Button';
import TopBar from './TopBar';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation,useRoute } from '@react-navigation/native';

const {width,height} = Dimensions.get("window");

const Result = ({route}) => {
const {energy,water,protein,carbs,fat} = route.params;
    
const handleNavigation=()=>{
navigation.navigate("home")
}

const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
<View style={{marginLeft:width*0.1,marginTop:height*0.07}}>

<TopBar />

<View>
<Text style={{fontSize:27,fontWeight:"700",color:"white",textAlign:"center",marginRight:height*0.05}}>Result</Text>
<MaterialCommunityIcons name="trophy-award" size={104} color="#3ddbbd" style={{textAlign:"center",marginRight:height*0.05,marginTop:height*0.02}} />

<View style={{marginTop:height*0.05}}>
<View style={{marginTop:10}}>
<Text style={styles.label}>Energy consumption </Text>
<Text style={styles.value}>{energy} kcal / day kcal per day</Text>
</View>
<View style={{marginTop:10}}>
<Text style={styles.label}>Water consumption </Text>
<Text style={styles.value}>{water} liters per day</Text>
</View>
<View style={{marginTop:10}}>
<Text style={styles.label}>Protein </Text>
<Text style={styles.value}>{protein} grams per day</Text>
</View>
<View style={{marginTop:10}}>
<Text style={styles.label}>Carbs</Text>
<Text style={styles.value}>{carbs} grams per day</Text>
</View>

<View style={{marginTop:10}}>
<Text style={styles.label}>Fat</Text>
<Text style={styles.value}>{fat} grams per day</Text>
</View>

<View style={{}}>
<Button handle={handleNavigation} title={"Recalculate"}/>
</View>



</View>


</View>




</View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        width:width,
        height:"100%",
        backgroundColor:"#000f13",
    },
    label:{
color:"white",
fontWeight:"600",
fontSize:16
    },
    value:{
color:"#c2cbcc",
paddingTop:3
    }
})


export default Result
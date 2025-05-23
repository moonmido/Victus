import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home';
import Activity from './Components/Activity';
import Result from './Components/Result';
export default function App() {
const stack = createStackNavigator();
  return (
<NavigationContainer>
<stack.Navigator initialRouteName='home'>
<stack.Screen name='home' component={Home} options={{headerShown:false}}/>
<stack.Screen name='activity' component={Activity} options={{headerShown:false}}/>
<stack.Screen name='result' component={Result} options={{headerShown:false}}/>

</stack.Navigator>


</NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

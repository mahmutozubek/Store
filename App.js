import { StatusBar } from "expo-status-bar";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet,Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Menu from "./src/pages/menu/Menu";
import Login from "./src/pages/login/Login";
import Details from "./src/pages/details/Details";

export default function App() {
 
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen 
        name="MenuScreen"
         component={Menu}
        options={{
          headerRight: () =>(
            <TouchableOpacity><Icon name ='logout' size ={25} /></TouchableOpacity>
          )
        }}
         />
        <Stack.Screen 
        name="DetailScreen" 
        component={Details} 
        options={{
          headerRight: () =>(
            <TouchableOpacity><Icon name ='logout' size ={25} /></TouchableOpacity>
          )
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

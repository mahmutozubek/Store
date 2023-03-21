import { View, Text, Image } from "react-native";
import styles from "./Details.style";
import Logout from "../../componentes/logout/Logout";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Detail({ route, navigation }) {
  const { item } = route.params;

  function handleMenu(){
    navigation.navigate('MenuScreen')
  }
  function handleLogout() {
    const storeData = async (key, value) => {
      try {
        await AsyncStorage.setItem(key, value.toString());
        console.log(`Data stored successfully for key: ${key}`);
      } catch (error) {
        console.log("Error storing data: ", error);
      }
    };
    storeData("@User", false);
    navigation.navigate("LoginScreen");
  }

  return (
    <View style={styles.container}>
      <Logout onPressLogout={handleLogout} onpressMenu={handleMenu}/>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );
}

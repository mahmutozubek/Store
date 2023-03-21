import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import Input from "../../componentes/input/Input";
import styles from "./Login.style";
import Button from "../../componentes/button/button";
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const url = "https://fakestoreapi.com/users";
  const { data, error, loading } = useFetch(url);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const value = await AsyncStorage.getItem("@User");
        if (value === "true") {
          // Kullanıcı oturum açmış, menü sayfasına yönlendir.
          navigation.navigate("MenuScreen");
        } else {
          // Kullanıcı oturum açmamış, giriş sayfasına yönlendir.
          navigation.navigate("LoginScreen");
        }
      } catch (error) {
        console.log("Error checking user: ", error);
      }
    };
    checkUser();
  }, []);

  function navigateToMenu() {
    for (let index = 0; index < data.length; index++) {
      if (
        username == data[index].username &&
        password == data[index].password
      ) {
        const storeData = async (key, value) => {
          try {
            await AsyncStorage.setItem(key, value.toString());
            console.log(`Data stored successfully for key: ${key}`);
          } catch (error) {
            console.log("Error storing data: ", error);
          }
        };
        storeData("@User", true);

        dispatch({ type: "Is_Auth", payloads: { isAuth: true } });
        navigation.navigate("MenuScreen");
      }
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: "https://i.hizliresim.com/rnts7eo.png" }}
        />
        <Input
          placeholder="Username"
          iconName="user"
          value={username}
          onType={setusername}
        />
        <Input
          placeholder="Password"
          iconName="key"
          value={password}
          onType={setpassword}
          isSecure ={true}
        />
        <Button buttonText="Log In" onPress={navigateToMenu} />
      </View>
    </View>
  );
}

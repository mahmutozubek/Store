import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./Menu.style";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../../componentes/productCard/ProductCard";
import Logout from "../../componentes/logout/Logout";

export default function Menu({ navigation }) {
  const isAuthselector = useSelector((selector) => selector.isAuthTrue);

  console.log(isAuthselector + "Menu");
  const url = "https://fakestoreapi.com/products";
  const { data, loading, error } = useFetch(url);

  const renderProduct = ({ item }) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item)} />
  );

  const handleProductSelect = (item) => {
    navigation.navigate("DetailScreen", { item });
  };

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

  function handleMenu(){
    navigation.navigate('MenuScreen')
  }
  return (
    <View>
      <Logout onPressLogout={handleLogout} onpressMenu={handleMenu} />
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
}

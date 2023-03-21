import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
export default function Input({ placeholder, iconName, value, onType ,isSecure}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onType}
        secureTextEntry={isSecure}
      />
      <Icon name={iconName} size={30} color="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 15,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 7,
    flexDirection: "row",
  },
  input: {
    flex: 1,
  },
});

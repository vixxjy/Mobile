import React from "react";
import { Button, View, Text } from "react-native";

const DeviceActivation = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Device Activation</Text>
      <Button title="Activate" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default DeviceActivation;

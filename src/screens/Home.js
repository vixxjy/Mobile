import React from "react";
import { Button, View, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="New Beneficiary"
        onPress={() => navigation.navigate("New Beneficiary")}
      />
      <Button
        title="Existing Beneficiary"
        onPress={() => navigation.navigate("Existing Beneficiary")}
      />
    </View>
  );
};

export default Home;

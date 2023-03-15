import React from "react";
import { Button, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login</Text>
      <Button
        title="Sign In"
        onPress={() => navigation.navigate("Device Activation")}
      />
    </View>
  );
};

const DeviceActivation = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Device Activation</Text>
      <Button title="Activate" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
      <AuthStack.Screen
        name="Device Activation"
        component={DeviceActivation}
      ></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

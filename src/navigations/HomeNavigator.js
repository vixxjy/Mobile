import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import DeviceActivation from "../screens/DeviceActivation";
import Home from "../screens/Home";
import NewBeneficiary from "../screens/NewBeneficiary";
import ExistingBeneficiary from "../screens/ExistingBeneficiary";
import Setting from "../screens/Setting";
import ConsentForm from "../screens/ConsentForm";

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Device Activation" component={DeviceActivation} />
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="New Beneficiary" component={NewBeneficiary} />
      <HomeStack.Screen
        name="Existing Beneficiary"
        component={ExistingBeneficiary}
      ></HomeStack.Screen>
      <HomeStack.Screen name="Consent" component={ConsentForm} />
      <HomeStack.Screen name="Settings" component={Setting} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;

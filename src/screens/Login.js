import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
} from "react-native";

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder="example@email.com"
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="useless placeholder"
      />
      <Button
        title="Sign In"
        onPress={() => navigation.navigate("Device Activation")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;

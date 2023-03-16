import React from "react";
import { View, Text } from "react-native";
import { Button, Title, TextInput, Paragraph } from "react-native-paper";

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ width: "80%", alignSelf: "center" }}>
        <Text
          style={{
            alignSelf: "center",
            color: "green",
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 50,
          }}
        >
          NOMIS Child Monitor App
        </Text>

        <Title style={{ fontWeight: "bold" }}>Sign In</Title>
        <Paragraph style={{ marginBottom: 20 }}>
          Hi there! Nice to see you again.
        </Paragraph>

        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Type something"
          onChangeText={onChangeEmail}
          value={email}
          outlineColor="green"
          activeOutlineColor="green"
        />

        <TextInput
          mode="outlined"
          style={{ marginTop: 20 }}
          label="Password"
          onChangeText={onChangePassword}
          value={password}
          outlineColor="green"
          activeOutlineColor="green"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />

        <Button
          style={{ marginTop: 20 }}
          loading={false}
          buttonColor="green"
          mode="contained"
          onPress={() => navigation.navigate("Device Activation")}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

export default Login;

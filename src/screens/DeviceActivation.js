import React from "react";
import { View, Text } from "react-native";
import { Button, Title, TextInput, Paragraph } from "react-native-paper";

const DeviceActivation = ({ navigation }) => {
  const [activation, onChangeActivation] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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

        <Title style={{ fontWeight: "bold" }}>Device Activation</Title>
        <Paragraph style={{ marginBottom: 20 }}>
          Activate this device to start using App.
        </Paragraph>

        <TextInput
          mode="outlined"
          label="Activation Code"
          placeholder="Type something"
          onChangeText={onChangeActivation}
          value={activation}
          outlineColor="green"
          activeOutlineColor="green"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />

        <Button
          style={{ marginTop: 20 }}
          buttonColor="green"
          mode="contained"
          onPress={() => navigation.navigate("Home")}
        >
          Activate
        </Button>
      </View>
    </View>
  );
};

export default DeviceActivation;

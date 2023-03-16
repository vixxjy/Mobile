import React from "react";
import { View } from "react-native";
import { Button, Card, Text } from 'react-native-paper';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ width: "90%", alignSelf: "center" }}>
      <Card>
        <Card.Content>
          <Text variant="titleLarge">Home</Text>
          <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Welcome</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/100' }} />
        <Card.Cover style={{ marginTop: 20 }} source={{ uri: 'https://picsum.photos/2000' }} />
      </Card>
      
      <Button icon="plus" style={{marginTop: 20, height: 50, width: "70%", alignSelf: "center" }} buttonColor="green" mode="contained" onPress={() => navigation.navigate("New Beneficiary")}>New Beneficiary</Button>
      <Button icon="plus" style={{marginTop: 10, height: 50, width: "70%", alignSelf: "center" }} buttonColor="green" mode="contained" onPress={() => navigation.navigate("Existing Beneficiary")}>Existing Beneficiary</Button>
      </View>
    </View>
  );
};

export default Home;

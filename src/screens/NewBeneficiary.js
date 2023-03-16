import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Appbar,
  Avatar,
  Button,
  Card,
  TextInput,
  Title,
  Paragraph,
  IconButton,
} from "react-native-paper";

const NewBeneficiary = ({ navigation }) => {
  const [search, onChangeSearch] = React.useState("");
  const LeftContent = (props) => <Avatar.Icon {...props} icon="file" />;
  const RightContent = (page) => (
    <IconButton
      icon="arrow-right"
      color="#0097e8"
      size={20}
      onPress={() => navigation.navigate(page)}
      style={{ marginBottom: 24 }}
    />
  );

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
        <Appbar.Content title="New Beneficiary" />
      </Appbar.Header>

      <ScrollView style={{ width: "90%", alignSelf: "center", marginTop: 10 }}>
        <Title style={{ fontWeight: "bold" }}>Ref No: 0000</Title>
        <Paragraph style={{ marginBottom: 20 }}>User</Paragraph>

        <TextInput
          icon="magnify"
          mode="outlined"
          label="Search"
          placeholder="Type something"
          onChangeText={onChangeSearch}
          value={search}
          outlineColor="green"
          activeOutlineColor="green"
        />

        <Card>
          <Card.Title
            title="Consent Form"
            left={LeftContent}
            right={() => RightContent("Consent")}
            style={{ backgroundColor: "#d6edd5", marginTop: 5 }}
          />
          <Card.Title
            title="Household Vulnerability"
            left={LeftContent}
            right={() => RightContent("Consent")}
            style={{ backgroundColor: "#d6edd5", marginTop: 5 }}
          />
          <Card.Title
            title="VC Enrollment"
            left={LeftContent}
            right={() => RightContent("Consent")}
            style={{ backgroundColor: "#d6edd5", marginTop: 5 }}
          />
          <Card.Title
            title="VC Service Form"
            left={LeftContent}
            right={() => RightContent("Consent")}
            style={{ backgroundColor: "#d6edd5", marginTop: 5 }}
          />
          <Card.Title
            title="Caregiver Service Form"
            left={LeftContent}
            right={() => RightContent("Consent")}
            style={{ backgroundColor: "#d6edd5", marginTop: 5 }}
          />
          <Card.Title
            title="VC Enrollment"
            left={LeftContent}
            right={() => RightContent("Consent")}
            style={{ backgroundColor: "#d6edd5", marginTop: 5 }}
          />
          <Card.Title
            title="VC Service Form"
            left={LeftContent}
            right={() => RightContent("Consent")}
            style={{ backgroundColor: "#d6edd5", marginTop: 5 }}
          />
          <Card.Title
            title="Caregiver Service Form"
            left={LeftContent}
            right={() => RightContent("Consent")}
            style={{ backgroundColor: "#d6edd5", marginTop: 5 }}
          />
        </Card>
        <Button
          style={{ marginTop: 20, marginBottom: 20 }}
          loading={false}
          buttonColor="green"
          mode="contained"
          onPress={() => navigation.navigate("Home")}
        >
          Done
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewBeneficiary;

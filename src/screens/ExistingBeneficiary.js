import React from "react";
import { StyleSheet, View, Text, SectionList } from "react-native";
import { Appbar, List, Card, TextInput, IconButton } from "react-native-paper";

const patients = [
  {
    title: "Approved",
    data: [
      {
        HospitalNo: "FCT/KS/232/1",
        Name: "Aminu Aminu",
        Status: "Approved",
      },
      {
        HospitalNo: "FCT/KS/232/2",
        Name: "Hanna Aminu",
        Status: "Approved",
      },
      {
        HospitalNo: "FCT/KS/232/3",
        Name: "Awual Awual",
        Status: "Pending Approval",
      },
    ],
  },
];

const ExistingBeneficiary = ({ navigation }) => {
  const [search, onChangeSearch] = React.useState("");
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
        <Appbar.Content title="Existing Beneficiary" />
      </Appbar.Header>

      <View style={{ width: "90%", alignSelf: "center", marginTop: 10 }}>
        {/* <Paragraph style={{ marginBottom: 20 }}>User</Paragraph> */}

        <TextInput
          icon="magnify"
          mode="outlined"
          label="Search"
          placeholder="Search By Household ID"
          onChangeText={onChangeSearch}
          value={search}
          outlineColor="green"
          activeOutlineColor="green"
        />

        <Card style={{ marginTop: 20 }}>
          <List.Section>
            <List.Item
              title="FCT/KS/232/1 Aminu Aminu"
              right={() => <List.Icon icon="account" />}
            />
            <List.Item
              title="FCT/KS/232/2 Hanna Aminu"
              right={() => <List.Icon icon="account" />}
            />
          </List.Section>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ExistingBeneficiary;

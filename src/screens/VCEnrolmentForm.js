import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import RadioForm from "react-native-simple-radio-button";
import { Appbar, Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";
import { DatePickerInput } from "react-native-paper-dates";

const VCEnrolmentForm = ({ navigation }) => {
  const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [isChecked, setChecked] = useState(false);
  const [selected, setSelected] = useState();
  const [inputDate, setInputDate] = React.useState(undefined);

  const handleFormData = (name, value) => {
    //setData({[name]: value});
    setData({ ...formData, [name]: value });
    console.log(formData);
  };

  const onSubmit = () => {
    console.log(formData);
    if (formData.name === undefined) {
      setErrors({ ...errors, name: "Name is required" });
    }
    try {
      db.transaction(async (tx) => {
        // await tx.executeSql(
        //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
        // );
        await tx.executeSql(
          "INSERT INTO household (form, formValues, synced, date) VALUES (?,?,?,?)",
          [JSON.stringify(formData), JSON.stringify(formData), 0, new Date()]
        );
      });
      navigation.navigate("HouseHoldsListScreen");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
        <Appbar.Content title="VC Enrolment" />
      </Appbar.Header>
      <ScrollView style={{ flex: 1, padding: 10 }}>
        <View>
          <Text
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              fontWeight: 700,
              color: "#333",
              marginBottom: 30,
              alignItems: "center",
            }}
          >
            General Information
          </Text>
          <View></View>
          <Text
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              fontWeight: 500,
              color: "#333",
              marginBottom: 5,
              alignItems: "center",
            }}
          >
            Entry Point
          </Text>
          <RadioForm
            style={{ flexDirection: "row", margin: 10 }}
            radio_props={[
              { label: "Facility", value: "facility" },
              { label: "Community", value: "community" },
            ]}
            initial={-1}
            radioStyle={{ paddingRight: 20 }}
            formHorizontal={true}
            buttonSize={15}
            labelHorizontal={true}
            onPress={(value) => setData({ ...formData, entryPoint: value })}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "#ccc",
            borderWidth: 1,
            padding: 10,
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <DatePickerInput
            locale="en"
            label="Birthdate"
            value={inputDate}
            onChange={(d) => setInputDate(d)}
            inputMode="start"
          />
          {/* <TextInput
            placeholder="Date of Enrolment*"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(value) => handleFormData("dateOfEnrolment", value)}
            //value={dateOfEnrolment}
          />
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          /> */}
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            flexDirection: "row",
            borderColor: "#ccc",
            borderWidth: 1,
            padding: 10,
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <TextInput
            placeholder="Unique ID"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(value) => handleFormData("uniqueId", value)}
          />
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            flexDirection: "row",
            borderColor: "#ccc",
            borderWidth: 1,
            padding: 10,
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <TextInput
            placeholder="Child's Surname*"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(value) => handleFormData("surname", value)}
          />
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            flexDirection: "row",
            borderColor: "#ccc",
            borderWidth: 1,
            padding: 10,
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <TextInput
            placeholder="Other Names"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(value) => handleFormData("otherNames", value)}
          />
        </View>
        <View>
          <Text
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              fontWeight: 500,
              color: "#333",
              marginBottom: 5,
              alignItems: "center",
            }}
          >
            Date of birth*
          </Text>
          <RadioForm
            style={{ flexDirection: "row" }}
            radio_props={[
              { label: "Actual", value: "actual" },
              { label: "Estimated", value: "estimated" },
            ]}
            initial={-1}
            radioStyle={{ paddingRight: 20 }}
            formHorizontal={true}
            buttonSize={15}
            labelHorizontal={true}
            onPress={(value) =>
              setData({ ...formData, dateOfBirthType: value })
            }
            style={{ margin: 10 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "#ccc",
            borderWidth: 1,
            padding: 10,
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <DatePickerInput
            locale="en"
            label="Date"
            value={inputDate}
            onChange={(d) => setInputDate(d)}
            inputMode="start"
          />
          {/* <TextInput
            placeholder="Date*"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(value) => handleFormData("date", value)}
          />
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          /> */}
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            flexDirection: "row",
            borderColor: "#ccc",
            borderWidth: 1,
            padding: 10,
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <TextInput
            placeholder="Age"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(value) => handleFormData("age", value)}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            marginBottom: 25,
          }}
        >
          <Text
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              fontWeight: 500,
              color: "#333",
              marginBottom: 5,
              alignItems: "center",
            }}
          >
            Age Unit*
          </Text>
          <RadioForm
            style={{ flexDirection: "row", margin: 10 }}
            radio_props={[
              { label: "Month", value: "month" },
              { label: "Years", value: "years" },
            ]}
            initial={-1}
            radioStyle={{ paddingRight: 20 }}
            formHorizontal={true}
            buttonSize={15}
            labelHorizontal={true}
            onPress={(value) => setData({ ...formData, ageUnit: value })}
          />
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            flexDirection: "row",
            borderColor: "#ccc",
            borderWidth: 1,
            padding: 10,
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <TextInput
            placeholder="Address"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(value) => handleFormData("address", value)}
          />
        </View>
        <Text
          style={{
            // fontFamily: "Roboto-Medium",
            fontSize: 18,
            fontWeight: 700,
            color: "#333",
            marginBottom: 30,
            alignItems: "center",
          }}
        >
          Enrollment Stream
        </Text>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text>1. Child living with HIV (CLHIV)</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>2. HIV Exposed Infants (HEI)</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>
              3. Child living with an HIV Positive Adult
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>
              4. Child at risk or have experienced sexual violence or any other
              form of violence;
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              fontWeight: 700,
              color: "#333",
              marginBottom: 30,
              alignItems: "center",
            }}
          >
            Select all that applies
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text> Physical</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text> Sexual</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text> Emotional</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>5. Teenage mother</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>
              6. Children in need of alternative family care
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>
              7. Children living on the street (exploited almajiri, nomadic,
              militants)
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>8. Children in conflict with law</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>9. Children of KP;</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              fontWeight: 700,
              color: "#333",
              marginBottom: 30,
              alignItems: "center",
            }}
          >
            Select all that applies
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>FSW</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>MSM</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>TG</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>PWID</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>People in Correctional Centre</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>10. Child orphaned by AIDS</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>
              11. Child living in a child Headed Household
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>
              12. Child especially adolescent females at risk of transactional
              sex
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>13. Socially excluded children</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>14. Children with disabilities</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>
              15. Children trafficked/in exploitative labour
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>
              16. Children affected by armed conflict
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.label}>17. Siblings of CLHIV</Text>
          </View>
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            flexDirection: "row",
            borderColor: "#ccc",
            borderWidth: 1,
            padding: 10,
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <TextInput
            placeholder="Indicate the stream on which enrolment is based , numeric only"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(value) => handleFormData("stream", value)}
          />
        </View>
        <Text
          style={{
            // fontFamily: "Roboto-Medium",
            fontSize: 18,
            fontWeight: 700,
            color: "#333",
            marginBottom: 30,
            alignItems: "center",
          }}
        >
          Child's HIV Status
        </Text>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <Text style={styles.label}>Child's HIV Status</Text>
          <Picker
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              color: "#333",
            }}
            selectedValue={selected}
            onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
          >
            <Picker.Item label="--SELECT--" value="" />
            <Picker.Item label="Positive" value="positive" />
            <Picker.Item label="Negative" value="negative" />
            <Picker.Item label="Unknown" value="unknown" />
          </Picker>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "#ccc",
            borderWidth: 1,
            padding: 10,
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <DatePickerInput
            locale="en"
            label="Date of HIV Test"
            value={inputDate}
            onChange={(d) => setInputDate(d)}
            inputMode="start"
          />
          {/* <TextInput
            placeholder="Date of HIV Test"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(value) => handleFormData("dateOfHivTest", value)}
          />
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          /> */}
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <Text style={styles.label}>Select State</Text>
          <Picker
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              color: "#333",
            }}
            selectedValue={selected}
            onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
          >
            <Picker.Item label="--SELECT--" value="" />
            <Picker.Item label="Abia" value="abia" />
            <Picker.Item label="Akwa Ibom" value="akwaIbom" />
          </Picker>
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <Text style={styles.label}>Select LGA</Text>
          <Picker
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              color: "#333",
            }}
            selectedValue={selected}
            onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
          >
            <Picker.Item label="--SELECT--" value="" />
            <Picker.Item label="Abia" value="abia" />
            <Picker.Item label="Akwa Ibom" value="akwaIbom" />
          </Picker>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "#ccc",
            borderWidth: 1,
            padding: 10,
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <DatePickerInput
            locale="en"
            label="Date of HIV Test"
            value={inputDate}
            onChange={(d) => setInputDate(d)}
            inputMode="start"
          />
          {/* <TextInput
            placeholder="Date of HIV Test"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(value) => handleFormData("dateOfHivTest", value)}
          />
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          /> */}
        </View>
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            marginBottom: 25,
          }}
        >
          <Text
            style={{
              // fontFamily: "Roboto-Medium",
              fontSize: 18,
              fontWeight: 500,
              color: "#333",
              marginBottom: 5,
              alignItems: "center",
            }}
          >
            Is Child enrolled on ART?*
          </Text>
          <RadioForm
            style={{ flexDirection: "row", margin: 10 }}
            radio_props={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
            initial={-1}
            radioStyle={{ paddingRight: 20 }}
            formHorizontal={true}
            buttonSize={15}
            labelHorizontal={true}
            onPress={(value) => setData({ ...formData, onART: value })}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "#ccc",
            borderWidth: 1,
            padding: 10,
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <DatePickerInput
            locale="en"
            label="Date of ART Enrollment"
            value={inputDate}
            onChange={(d) => setInputDate(d)}
            inputMode="start"
          />
          {/* <TextInput
            placeholder="Date of ART Enrollment"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(value) =>
              handleFormData("dateOfARTEnrolment", value)
            }
          />
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          /> */}
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <Text style={styles.label}>Select State</Text>
          <Picker
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              color: "#333",
            }}
            selectedValue={selected}
            onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
          >
            <Picker.Item label="--SELECT--" value="" />
            <Picker.Item label="Abia" value="abia" />
            <Picker.Item label="Akwa Ibom" value="akwaIbom" />
          </Picker>
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <Text style={styles.label}>Select LGA</Text>
          <Picker
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              color: "#333",
            }}
            selectedValue={selected}
            onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
          >
            <Picker.Item label="--SELECT--" value="" />
            <Picker.Item label="Abia" value="abia" />
            <Picker.Item label="Akwa Ibom" value="akwaIbom" />
          </Picker>
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <Text style={styles.label}>Select Facility</Text>
          <Picker
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              color: "#333",
            }}
            selectedValue={selected}
            onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
          >
            <Picker.Item label="--SELECT--" value="" />
            <Picker.Item label="Abia" value="abia" />
            <Picker.Item label="Akwa Ibom" value="akwaIbom" />
          </Picker>
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            flexDirection: "row",
            borderColor: "#ccc",
            borderWidth: 1,
            padding: 10,
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <TextInput
            placeholder="ART UID No*"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(value) => handleFormData("artUID", value)}
          />
        </View>
        <Text
          style={{
            // fontFamily: "Roboto-Medium",
            fontSize: 18,
            fontWeight: 700,
            color: "#333",
            marginBottom: 30,
            alignItems: "center",
          }}
        >
          Birth certificates & Education
        </Text>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <Text style={styles.label}>
            Does the child have a birth registration certificate?{" "}
          </Text>
          <Picker
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              color: "#333",
            }}
          >
            <Picker.Item label="--SELECT--" value="" />
            <Picker.Item label="Yes" value="yes" />
            <Picker.Item label="No" value="no" />
          </Picker>
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <Text style={styles.label}>Is the child in school? </Text>
          <Picker
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              color: "#333",
            }}
            placeholder="Is the child in school?"
          >
            <Picker.Item label="--SELECT--" value="" />
            <Picker.Item label="Yes" value="yes" />
            <Picker.Item label="No" value="no" />
          </Picker>
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <Text style={styles.label}>Name of School? </Text>
          <Picker
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              color: "#333",
            }}
          >
            <Picker.Item label="--SELECT--" value="" />
            <Picker.Item label="Godswill Schools" value="godsWill" />
            <Picker.Item label="Prime care" value="primeCare" />
          </Picker>
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <Text style={styles.label}>Child's Class? </Text>
          <Picker
            style={{
              // fontFamily: "Roboto-Medium",
              fontSize: 18,
              color: "#333",
            }}
          >
            <Picker.Item label="--SELECT--" value="" />
            <Picker.Item label="Pre-Nursery" value="abia" />
            <Picker.Item label="Nursery" value="akwaIbom" />
            <Picker.Item label="Primary 1" value="akwaIbom" />
          </Picker>
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <Text style={styles.label}>Is Child on vocational Training? </Text>
          <Picker
            style={{
              // fontFamily: "Roboto-Medium",
              fontSize: 18,
              color: "#333",
            }}
          >
            <Picker.Item label="--SELECT--" value="" />
            <Picker.Item label="Yes" value="yes" />
            <Picker.Item label="No" value="no" />
          </Picker>
        </View>

        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            flexDirection: "row",
            borderColor: "#ccc",
            borderWidth: 1,
            padding: 10,
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <TextInput
            placeholder="Name of vocational training center"
            style={{ flex: 1, paddingVertical: 0 }}
            onChangeText={(value) => handleFormData("stream", value)}
          />
        </View>
        <Text
          style={{
            // fontFamily: "Roboto-Medium",
            fontSize: 18,
            fontWeight: 700,
            color: "#333",
            marginBottom: 30,
            alignItems: "center",
          }}
        >
          Caregiver Information
        </Text>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <Text style={styles.label}>Name of Caregiver? </Text>
          <Picker
            style={{
              //   fontFamily: "Roboto-Medium",
              fontSize: 18,
              color: "#333",
            }}
          >
            <Picker.Item label="--SELECT--" value="" />
            <Picker.Item label="Dorcas" value="dorcas" />
            <Picker.Item label="Niyi" value="niyi" />
            <Picker.Item label="Victor" value="victor" />
          </Picker>
        </View>
        <View
          style={{
            // display: o.display === 'hidden' ? 'none' : 'flex',
            marginBottom: 25,
            borderRadius: 4,
          }}
        >
          <Text style={styles.label}>Caregiver's Relationship to Child? </Text>
          <Picker
            style={{
              // fontFamily: "Roboto-Medium",
              fontSize: 18,
              color: "#333",
            }}
          >
            <Picker.Item label="--SELECT--" value="" />
            <Picker.Item label="Yes" value="yes" />
            <Picker.Item label="No" value="no" />
          </Picker>
        </View>
        <Button
          style={{ marginTop: 20, marginBottom: 30 }}
          loading={false}
          buttonColor="green"
          mode="contained"
          onPress={onSubmit}
        >
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default VCEnrolmentForm;

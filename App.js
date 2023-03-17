import AppNavContainer from "./src/navigations";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./src/theme/Theme";
import "react-native-gesture-handler";
import { enGB, registerTranslation } from "react-native-paper-dates";

registerTranslation("en", {
  save: "Save",
  selectSingle: "Select date",
  selectMultiple: "Select dates",
  selectRange: "Select period",
  notAccordingToDateFormat: (inputFormat) =>
    `Date format must be ${inputFormat}`,
  mustBeHigherThan: (date) => `Must be later then ${date}`,
  mustBeLowerThan: (date) => `Must be earlier then ${date}`,
  mustBeBetween: (startDate, endDate) =>
    `Must be between ${startDate} - ${endDate}`,
  dateIsDisabled: "Day is not allowed",
  previous: "Previous",
  next: "Next",
  typeInDate: "Type in date",
  pickDateFromCalendar: "Pick date from calendar",
  close: "Close",
});

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavContainer></AppNavContainer>
    </PaperProvider>
  );
}

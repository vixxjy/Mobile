import AppNavContainer from "./src/navigations";
import { Provider as PaperProvider } from "react-native-paper";
import theme from './src/theme/Theme'
import "react-native-gesture-handler";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavContainer></AppNavContainer>
    </PaperProvider>
  )
}

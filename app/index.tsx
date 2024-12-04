import { ActivityIndicator } from "react-native";

import Groups from "@screens/Groups";
import { ThemeProvider } from "styled-components/native";
import theme from "@/src/theme";
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';

export default function Index() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Groups /> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}

import { StatusBar } from "react-native";

import Groups from "@screens/Groups";
import NewGroup from "@screens/NewGroup";
import { ThemeProvider } from "styled-components/native";
import theme from "@/src/theme";
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Loading } from "@/src/componentes/Loading";

export default function Index() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#202024"
        translucent
      />
      { fontsLoaded ? <NewGroup /> : <Loading /> }
    </ThemeProvider>
  );
}

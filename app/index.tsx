import Groups from "@screens/Groups";
import { ThemeProvider } from "styled-components/native";
import theme from "@/src/theme";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}

import { Image, Text, View } from "react-native";
import logo from '@assets/logo.png';

export default function Groups() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={logo}/>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

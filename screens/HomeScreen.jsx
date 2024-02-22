import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../constants/Styles";

/* Our HomeScreen is a React Component. Remember, every component is just
    a function that takes in props and returns JSX. We usually use object
    destructuring to grab declare values we need from props right away.
*/
export default function HomeScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={require("../assets/mdb_logo.png")}
          style={styles.imageLogo}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Play")}
      >
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
    </View>
  );
}

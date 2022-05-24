import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import Text from "./text/text";
import { spacing } from "../theme/spacing";
import { colors } from "../theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PlanetHeader({ backButton }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backButton && (
        <Pressable
          style={{ marginRight: spacing[4] }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
      )}
      <Text preset="h2">THE PLANETS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
});

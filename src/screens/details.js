import { View, SafeAreaView, StyleSheet } from "react-native";
import Text from "../components/text/text";
import React from "react";
import PlanetHeader from "../components/planet-header";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Details() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backButton={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: spacing[5],
  },
});

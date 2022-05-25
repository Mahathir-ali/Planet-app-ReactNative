import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import Text from "../components/text/text";
import React from "react";
import PlanetHeader from "../components/planet-header";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import MercurySVG from "../svg/MercurySVG";
// import { useRoute } from "@react-navigation/native";

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text preset="small" style={{ textTransform: "uppercase" }}>
        {title}
      </Text>
      <Text preset="h3">{value}</Text>
    </View>
  );
};

export default function Details({ route }) {
  const planet = route.params.planet;
  const {
    name,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
  } = planet;
  console.log(name);
  // console.log("Planet-->", planet);
  // const route = useRoute();

  // const renderImage = (name) => {
  //   switch (name) {
  //     case "mercury":
  //       return <MercurySVG />;
  //   }
  // };
  const onPressLink = () => {
    Linking.openURL(wikiLink);
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backButton={true} />
      <ScrollView>
        {/* <View style={styles.imageView}>{renderImage(name)} </View> */}
        <View style={styles.detailsView}>
          <Text preset="h1" style={styles.name}>
            {name}
          </Text>
          <Text style={styles.desc}>{description}</Text>
          <Pressable onPress={onPressLink} style={styles.source}>
            <Text>Source:</Text>
            <Text style={styles.wiki}>wikiLink</Text>
          </Pressable>
        </View>
        <PlanetSection title="ROTATION TIME :" value={rotationTime} />
        <PlanetSection title="REVOLUTION TIME :" value={revolutionTime} />
        <PlanetSection title="RADIUS :" value={radius} />
        <PlanetSection title="AVG TEMP :" value={avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: spacing[5],
  },
  detailsView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
    alignItems: "center",
  },
  name: {
    textTransform: "uppercase",
    fontWeight: "700",
  },
  desc: {
    lineHeight: 17,
    letterSpacing: 0.5,
    textAlign: "justify",
    marginTop: spacing[6],
  },
  source: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing[5],
    marginBottom: spacing[10],
  },
  wiki: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    letterSpacing: 1,
    paddingLeft: 6,
  },
  planetSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderColor: colors.grey,
    borderWidth: 0.5,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
  },
});

import { View, StyleSheet, FlatList, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import Text from "../components/text/text";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../components/planet-header";
import { colors } from "../theme/colors";
import { PLANET_LIST } from "../data/planet-list";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PlanetItem = ({ item }) => {
  const { name, color } = item;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Details", { planet: item });
      }}
      style={styles.item}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={[styles.circle, { backgroundColor: color }]} />
        <Text preset="h3" style={styles.itemName}>
          {name}
        </Text>
      </View>
      <AntDesign name="right" size={18} color="white" />
    </Pressable>
  );
};

export default function Home({ navigation }) {
  const [list, setList] = useState(PLANET_LIST);
  const renderItem = ({ item }) => {
    return <PlanetItem item={item} />;
  };
  const searchFilter = (text) => {
    const filteredList = PLANET_LIST.filter((item) => {
      const itemName = item.name.toLowerCase();
      const userTypeText = text.toLowerCase();
      return itemName.indexOf(userTypeText) > -1;
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.black }}>
      <PlanetHeader />
      <TextInput
        placeholder="Type the planet name"
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.search}
        onChangeText={(text) => searchFilter(text)}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={list}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[4],
  },
  list: {
    padding: spacing[4],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[5],
  },
  separator: {
    borderBottomColor: colors.white,
    borderBottomWidth: 0.2,
  },
  search: {
    padding: spacing[4],
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    margin: spacing[5],
  },
});

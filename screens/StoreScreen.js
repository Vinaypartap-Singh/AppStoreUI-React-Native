import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Bars3CenterLeftIcon, BellIcon } from "react-native-heroicons/solid";
import GradientButton from "../components/GradientButton";
import GameCard from "../components/GameCard";

export default function StoreScreen() {
  const categories = [
    "Action",
    "Family",
    "Puzzle",
    "Adventure",
    "Racing",
    "Education",
    "Others",
  ];
  const [activeCategory, setActiveCategory] = useState("Action");

  //   Featured Games Array
  const featured = [
    {
      id: 1,
      title: "Zooba",
      image: require("../assets/images/zooba.png"),
      downloads: "200k",
      stars: 4,
    },
    {
      id: 2,
      title: "Subway Surfer",
      image: require("../assets/images/subway.png"),
      downloads: "5M",
      stars: 4,
    },
    {
      id: 3,
      title: "Free Fire",
      image: require("../assets/images/freeFire.png"),
      downloads: "100M",
      stars: 3,
    },

    {
      id: 4,
      title: "Alto's Adventure",
      image: require("../assets/images/altosAdventure.png"),
      downloads: "20k",
      stars: 4,
    },
  ];

  return (
    <LinearGradient
      colors={["rgba(58, 131, 244, 0.4)", "rgba(9, 181, 211, 0.4)"]}
      style={{ width: "100%", flex: 1 }}
    >
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Bars3CenterLeftIcon color={"#0D163A"} size={35} />
          <BellIcon color={"#0D163A"} size={35} />
        </View>

        {/* Categories */}

        <View style={{ marginTop: 20, paddingLeft: 20 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#0D163A",
              fontSize: 33,
            }}
          >
            Browse Games
          </Text>
          {/* Scroll View */}
          <View style={{ marginTop: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((cat) => {
                if (cat == activeCategory) {
                  return <GradientButton key={cat} value={cat} />;
                } else {
                  return (
                    <TouchableOpacity
                      onPress={() => setActiveCategory(cat)}
                      key={cat}
                      style={{
                        backgroundColor: "white",
                        paddingHorizontal: 18,
                        paddingVertical: 15,
                        borderRadius: 50,
                        marginRight: 15,
                      }}
                    >
                      <Text>{cat}</Text>
                    </TouchableOpacity>
                  );
                }
              })}
            </ScrollView>
          </View>
        </View>

        {/* Featured Section */}

        <View style={{ marginTop: 20, paddingLeft: 20 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#0D163A",
              fontSize: 23,
            }}
          >
            Featured Games
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingTop: 10 }}
          >
            {featured.map((data, index) => {
              return <GameCard gameInfo={data} />;
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});

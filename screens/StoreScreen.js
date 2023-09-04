import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Bars3CenterLeftIcon,
  BellIcon,
  ArrowDownTrayIcon,
} from "react-native-heroicons/solid";
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

  // Top Action Games

  const games = [
    {
      id: 1,
      title: "Shadow Fight",
      image: require("../assets/images/shadowFight.png"),
      downloads: "20M",
      stars: 4.5,
    },
    {
      id: 2,
      title: "Valor Arena",
      image: require("../assets/images/valorArena.png"),
      downloads: "10k",
      stars: 3.4,
    },
    {
      id: 3,
      title: "Frag",
      image: require("../assets/images/frag.png"),
      downloads: "80k",
      stars: 4.6,
    },
    {
      id: 4,
      title: "Zooba Wildlife",
      image: require("../assets/images/zoobaGame.png"),
      downloads: "40k",
      stars: 3.5,
    },
    {
      id: 4,
      title: "Clash of Clans",
      image: require("../assets/images/clashofclans.png"),
      downloads: "20k",
      stars: 4.2,
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

        {/* Top Action Games */}

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#0D163A",
                fontSize: 23,
              }}
            >
              Top Action Games
            </Text>
            <Button title="See All" />
          </View>

          <View>
            <ScrollView
              style={{ height: 320, paddingLeft: 20 }}
              showsVerticalScrollIndicator={false}
            >
              {games.map((data) => {
                return (
                  <View style={{ marginTop: 20, flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                        paddingRight: 20,
                        alignItems: "center",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={data.image}
                          style={{ width: 100, height: 100, borderRadius: 10 }}
                        />
                        <View
                          style={{
                            paddingLeft: 20,
                            justifyContent: "space-between",
                            paddingVertical: 10,
                          }}
                        >
                          <Text style={{ fontWeight: "bold" }}>
                            {data.title}
                          </Text>
                          {/* Ratings & Game Information */}
                          <View
                            style={{
                              marginTop: 10,
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              source={require("../assets/images/fullStar.png")}
                              style={{ width: 20, height: 20 }}
                            />
                            <Text
                              style={{
                                fontWeight: "bold",
                                marginLeft: 10,
                                marginTop: 1,
                              }}
                            >
                              {data.stars} stars
                            </Text>
                          </View>
                          <View
                            style={{
                              marginTop: 10,
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <ArrowDownTrayIcon
                              color={"rgba(9, 181, 211, 0.9)"}
                              size={20}
                            />
                            <Text
                              style={{
                                fontWeight: "bold",
                                marginLeft: 10,
                                marginTop: 1,
                              }}
                            >
                              {data.downloads} downloads
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        <GradientButton value="Play" />
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});

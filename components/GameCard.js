import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { HeartIcon, ArrowDownTrayIcon } from "react-native-heroicons/solid";
import StarRating from "react-native-star-rating";
import { LinearGradient } from "expo-linear-gradient";

export default function GameCard({ gameInfo }) {
  const [favouriteGame, setFavouriteGame] = useState(false);
  return (
    <View style={{ marginRight: 10, position: "relative", marginTop: 10 }}>
      <Image
        source={gameInfo.image}
        style={{
          width: 350,
          height: 300,
          objectFit: "cover",
          borderRadius: 20,
        }}
      />
      <LinearGradient
        style={{ position: "absolute", width: "100%", height: "100%" }}
        colors={["transparent", "rgba(0, 0, 0, 0.6)"]}
      >
        {/* Heart Icon with onPress for favourite Games */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            position: "absolute",
            top: 20,
            right: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => setFavouriteGame(!favouriteGame)}
            style={{
              padding: 10,
              backgroundColor: "rgba(255,255,255, 0.3)",
              borderRadius: 50,
            }}
          >
            <HeartIcon color={`${favouriteGame ? "#F73434" : "white"}`} />
          </TouchableOpacity>
        </View>

        {/* Component for game Ratings and Information */}

        <View style={{ position: "absolute", bottom: 20, left: 20 }}>
          <StarRating
            disabled={true}
            starSize={20}
            maxStars={5}
            rating={gameInfo.stars}
            containerStyle={{ width: 110 }}
            emptyStar={require("../assets/images/emptyStar.png")}
            fullStar={require("../assets/images/fullStar.png")}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              marginTop: 5,
              color: "white",
            }}
          >
            {gameInfo.title}
          </Text>
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
              fontWeight: "bold",
              color: "white",
            }}
          >
            <ArrowDownTrayIcon color={"white"} /> {gameInfo.downloads} downloads
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({});

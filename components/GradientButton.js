import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function GradientButton(props) {
  return (
    <LinearGradient
      colors={["rgba(9, 181, 211, 0.9)", "rgba(58, 131, 244, 0.9)"]}
      end={{ x: 1, y: 1 }}
      start={{ x: 0.1, y: 0.2 }}
      style={{ borderRadius: 50, marginRight: 15 }}
    >
      <TouchableOpacity
        style={{
          paddingHorizontal: 18,
          paddingVertical: 15,
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>
          {props.value}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});

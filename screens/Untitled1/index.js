import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 26,
      top: 44,
      position: "absolute",
      height: 60,
      width: 140,
      backgroundColor: "#f42323",
      borderRadius: 0,
      color: "#777777",
      borderWidth: 8,
      opacity: 0.78
    }}></View><Text style={{
      left: 91,
      top: 183,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Lorem ipsum… </Text><View style={{
      left: 27,
      top: 238,
      position: "absolute",
      height: 90,
      width: 150,
      backgroundColor: "#e3e3e3",
      borderRadius: 0,
      color: "#777777"
    }}></View><View style={{
      left: 1,
      top: 127,
      position: "absolute",
      width: 151,
      height: 99,
      backgroundColor: "#2ec447",
      borderRadius: 0,
      transform: "rotate(90deg)",
      borderColor: "#040303",
      borderWidth: 8
    }}></View></View>;
};

export default Untitled1;
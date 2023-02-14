import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";

function ImageComp({ imgAddress }) {
const [showModal, setShowModal] = useState(false)

  return (
    <Image
      style={styles.image}
      // resizeMode="contain"
      source={require("../assets/purple_flower.jpg")}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: "75%",
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "center",
  },
});

export default ImageComp;

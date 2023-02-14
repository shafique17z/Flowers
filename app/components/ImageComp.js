import React from "react";
import { View, Image, StyleSheet } from "react-native";

function ImageComp(props) {
  return (
      <Image
        style={styles.image}
        source={require("../assets/purple_flower.jpg")}
      />
  );
};

const styles = StyleSheet.create({
  image: { width: "90%", height: "75%", alignItems: "center", justifyContent: "center" },
});

export default ImageComp;

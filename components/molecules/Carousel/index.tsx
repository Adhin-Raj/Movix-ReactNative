import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import BannerImg from "@/assets/images/banner.png";

export default function Carousel() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now Showing</Text>
      <Image source={BannerImg} style={styles.bannerImg} width={320} />
      <View style={styles.overlayContainer}>
        <FlatList
          contentContainerStyle={styles.pointsContainer}
          data={Array.from({ length: 5 })}
          renderItem={(_) => <View style={styles.activePoint}></View>}
        />
        <Text style={styles.movieTitle}>The Last Kingdom</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    color: "#F5F5F5",
    fontFamily: "GeneralSans",
  },
  bannerImg: {
    width: "100%",
    resizeMode: "contain",
    marginTop: 20,
  },
  overlayContainer: {
    position: "absolute",
    bottom:0,
    alignItems:'center',
    flexDirection:'row',
    paddingInline:20,
    marginBottom:20
  },
  movieTitle: {
    fontFamily: "GeneralSans",
    color: "#F5F5F5",
  },
  pointsContainer:{
    flexDirection:'row',
    gap:5
  },
  activePoint:{
    backgroundColor:'#F5F5F5',
    height:8,
    width:8,
    borderRadius:100,
  }
});

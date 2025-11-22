import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BannerImg from "@/assets/images/banner.png";
import { API_KEY } from "@/constants";

export default function Carousel() {

   const [popular,setPopular] = useState()
   const [activeIndex,setActiveIndex] = useState(0)

  async function fetchApi() {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`)
      const {results} = await response.json()
      setPopular(results.slice(0,5))
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(()=>{
    fetchApi()

  const interval=   setInterval(() => {
      setActiveIndex(prev=>(prev + 1) % popular.length)
    }, 1000);

    return ()=>clearInterval(interval)
  },[])

console.log(activeIndex)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now Showing</Text>
      <Image source={BannerImg} style={styles.bannerImg} width={320} />
      <View style={styles.overlayContainer}>
        <FlatList
          contentContainerStyle={styles.pointsContainer}
          data={popular}
          renderItem={({item}) => <View style={styles.activePoint}></View>}
        />
        <Text style={styles.movieTitle}>The Kingdom</Text>
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

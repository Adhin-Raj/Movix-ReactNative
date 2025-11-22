import UserProfile from "@/components/atom/UserProfile";
import Carousel from "@/components/molecule/Carousel";
import Genre from "@/components/organism/Genre";
import { actionUrl, adventureUrl, animationUrl, comedyUrl, fantasyUrl, horrorUrl, romanceUrl, sci_fiUrl, thrillerUrl } from "@/constants";
import React from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";

export default function Home() {
 
  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <UserProfile />
      <Carousel />
      <Genre genre="Action" url={actionUrl}/>
      <Genre genre="Adventure" url={adventureUrl}/>
      <Genre genre="Comedy" url={comedyUrl}/>
      <Genre genre="Animation" url={animationUrl}/>
      <Genre genre="Thriller" url={thrillerUrl}/>
      <Genre genre="Science Fiction" url={sci_fiUrl}/>
      <Genre genre="Horror" url={horrorUrl}/>
      <Genre genre="Romance" url={romanceUrl}/>
      <Genre genre="Fantasy" url={fantasyUrl}/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505ff",
  },
});

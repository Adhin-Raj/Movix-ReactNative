import UserProfile from "@/components/atom/UserProfile";
import Carousel from "@/components/molecule/Carousel";
import Genre from "@/components/organism/Genre";
import {
  actionUrl,
  adventureUrl,
  animationUrl,
  comedyUrl,
  crimeUrl,
  documentaryUrl,
  dramaUrl,
  familyUrl,
  fantasyUrl,
  historyUrl,
  horrorUrl,
  musicUrl,
  mysteryUrl,
  romanceUrl,
  sci_fiUrl,
  warUrl,
  westerUrl,
} from "@/constants";
import React from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <UserProfile />
      <Carousel />
      <Genre genre="Action" url={actionUrl} />
      <Genre genre="Adventure" url={adventureUrl} />
      <Genre genre="Animation" url={animationUrl} />
      <Genre genre="Comedy" url={comedyUrl} />
      <Genre genre="Crime" url={crimeUrl} />
      <Genre genre="Documentary" url={documentaryUrl} />
      <Genre genre="Drama" url={dramaUrl} />
      <Genre genre="Family" url={familyUrl} />
      <Genre genre="Fantasy" url={fantasyUrl} />
      <Genre genre="History" url={historyUrl} />
      <Genre genre="Horror" url={horrorUrl} />
      <Genre genre="Music" url={musicUrl} />
      <Genre genre="Mystery" url={mysteryUrl} />
      <Genre genre="Romance" url={romanceUrl} />
      <Genre genre="Science Fiction" url={sci_fiUrl} />
      <Genre genre="War" url={warUrl} />
      <Genre genre="Western" url={westerUrl} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505ff",
  },
});

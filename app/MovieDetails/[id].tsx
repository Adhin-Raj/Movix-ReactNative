import arrowLeft from "@/assets/images/arrow-left.png";
import Star from "@/assets/images/star.png";
import CustomButton from "@/components/atom/CustomButton";
import { genres, imageUrl } from "@/constants";
import { useRouter } from "expo-router";
import React, { useContext } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { MovieContext } from "@/context/MovieContext";

export default function MovieDetails() {
  const { data } = useContext(MovieContext);
  console.log("id", data);
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: imageUrl + data?.poster_path }}
        style={styles.bannerImg}
        height={500}
      />
      <Pressable style={styles.backBtn} onPress={() => router.back()}>
        <Image source={arrowLeft} width={24} height={24} />
      </Pressable>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.titles}>{data?.title}</Text>
          <Text style={styles.titles}>{data?.release_date.slice(0, 4)}</Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}
        >
          <Text style={styles.cardText}>{data?.vote_average.toFixed(1)} </Text>
          <Image style={styles.starIcon} source={Star} />
        </View>
        <Text style={styles.plotTitle}>Genre</Text>
        <FlatList
          data={data?.genre_ids}
          horizontal
          contentContainerStyle={styles.genreList}
          renderItem={({ item }) => (
            <CustomButton
              btnLabel={genres[item]}
              ctaType="outlined"
              customTextStyle={styles.buttonLabel}
              customBtnStyle={styles.genreBtn}
            />
          )}
        />
        <Text style={styles.plotTitle}>Plot</Text>
        <Text style={styles.description}>{data?.overview}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0412",
  },
  bannerImg: {
    resizeMode: "cover",
    position: "relative",
  },
  backBtn: {
    position: "absolute",
    top: 30,
    left: 20,
    backgroundColor: "#B090F4",
    opacity: 0.7,
    padding: 6,
    borderRadius: 12,
  },
  content: {
    marginInline: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  titles: {
    color: "#F5F5F5",
    fontFamily: "GeneralSans",
    fontSize: 20,
    maxWidth: 250,
  },
  genreList:{
   gap:16
  },
  genreBtn: {
    alignSelf: "flex-start",
    borderRadius: 20,
    paddingBlock: 8,
    paddingInline: 20,
    marginTop: 8,
    
  },
  buttonLabel: {
    color: "#B090F4",
    fontSize: 16,
  },
  description: {
    color: "#F5F5F5",
    fontFamily: "GeneralSans",
    fontSize: 14,
    marginBottom: 20,
  },
  plotTitle: {
    color: "#F5F5F5",
    fontFamily: "GeneralSans",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 8,
  },
  cardText: {
    color: "#F5F5F5",
    fontFamily: "GeneralSans",
  },
  starIcon: {
    width: 10,
    height: 10,
  },
});

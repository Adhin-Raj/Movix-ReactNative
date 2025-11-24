import HeartIcon from "@/assets/images/heart-icon.png";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconButton from "../../atom/IconButton";
import { imageUrl } from "@/constants";
import Star from "@/assets/images/star.png";
import { useRouter } from "expo-router";
import { MovieContext } from "@/context/MovieContext";

export interface MovieType {
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  id: string;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  overview: string;
  popularity: number;
  video: boolean;
  vote_count: number;
  genre_ids:number[]
}

export default function Card(movie: MovieType) {
  const router = useRouter();

  const { setData } = useContext(MovieContext);

  const handleNavigate = () => {
    setData(movie);
    router.push(`/MovieDetails/${movie.id}`);
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleNavigate}>
      <Image
        style={styles.moviePoster}
        source={{ uri: `${imageUrl}${movie.poster_path}` }}
      />
      <View style={styles.content}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.movieTitle}>
          {movie.title}
        </Text>
        <View style={styles.textContainer}>
          <Text style={styles.cardText}>{movie.release_date.slice(0, 4)}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.cardText}>
              {movie.vote_average.toFixed(1)}{" "}
            </Text>
            <Image style={styles.starIcon} source={Star} />
          </View>
        </View>
      </View>
      <IconButton customStyle={styles.iconButton}>
        <Image source={HeartIcon} width={24} height={24} />
      </IconButton>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
  },
  movieBanner: {
    borderRadius: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  moviePoster: {
    resizeMode: "cover",
    height: 200,
    borderRadius: 20,
  },
  movieTitle: {
    color: "#F5F5F5",
    fontFamily: "GeneralSans",
    fontSize: 16,
    marginTop: 4,
    maxWidth: 150,
    flex: 1,
  },
  cardText: {
    color: "#F5F5F5",
    fontFamily: "GeneralSans",
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 20,
    right: 10,
    top: 10,
  },
  content: {
    flex: 1,
  },
  starIcon: {
    width: 10,
    height: 10,
  },
});

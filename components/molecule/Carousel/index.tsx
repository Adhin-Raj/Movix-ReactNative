import { API_KEY, imageUrl } from "@/constants";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MovieType } from "../Card";

export default function Carousel() {
  const [popular, setPopular] = useState<MovieType[] | []>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchApi() {
    try {
      setIsLoaded(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`
      );
      const { results } = await response.json();
      setPopular(results.slice(4, 9));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    fetchApi();

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <View style={styles.container}>
          <Text style={styles.title}>Now Showing</Text>
          <Image
            source={{ uri: imageUrl + popular[activeIndex]?.poster_path }}
            style={styles.bannerImg}
            height={400}
          />

          <View style={styles.overlayContainer}>
            <FlatList
              contentContainerStyle={styles.pointsContainer}
              data={popular}
              scrollEnabled={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ index }) => (
                <View
                  style={[
                    styles.activePoint,
                    activeIndex === index
                      ? { backgroundColor: "#F5F5F5" }
                      : { backgroundColor: "gray" },
                  ]}
                ></View>
              )}
            />
            <Text style={styles.movieTitle}>{popular[activeIndex]?.title}</Text>
          </View>
        </View>
      ) : (
        <ActivityIndicator size={24} />
      )}
    </>
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
    resizeMode: "stretch",
    marginTop: 20,
    borderRadius: 20,
  },
  overlayContainer: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    flexDirection: "row",
    paddingInline: 20,
    marginBottom: 16,
  },
  movieTitle: {
    fontFamily: "GeneralSans",
    color: "#F5F5F5",
  },
  pointsContainer: {
    flexDirection: "row",
    gap: 5,
  },
  activePoint: {
    height: 8,
    width: 8,
    borderRadius: 100,
  },
});

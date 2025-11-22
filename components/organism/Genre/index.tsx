import Card, { MovieType } from "@/components/molecule/Card";
import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

interface GenreProps {
  url: string;
  genre: string;
}

export default function Genre({ url, genre }: GenreProps) {
  const [movieData, setMovieData] = useState<MovieType[]>([]);

  async function fetchApi() {
    try {
      const response = await fetch(url);
      const { results } = await response.json();
      setMovieData(results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApi();
  }, [movieData]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.genreTitle}>{genre}</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.cardContainer}
        horizontal
        data={movieData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <Card {...item} />;
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginBottom: 16,
  },
  genreTitle: {
    color: "#F5F5F5",
    fontSize: 24,
    fontFamily: "GeneralSans",
  },
  viewAll: {
    fontSize: 16,
    fontFamily: "GeneralSans",
    color: "#F5F5F5",
  },
  cardContainer: {
    gap: 20,
    paddingRight: 20,
  },
});

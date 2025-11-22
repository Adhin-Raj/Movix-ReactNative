import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import userIcon from "@/assets/images/userIcon.png";

export default function UserProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={userIcon} width={48} height={48} />
      </View>
      <View>
        <Text style={styles.headText}>Welcome!</Text>
        <Text style={styles.subText}>Movie Magic Awaits!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 24,
    flexDirection:'row'
  },
  userContainer: {
    shadowColor: "#F4CE9B",
    elevation: 50,
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 40,
    shadowOpacity: 0.4,
    borderRadius: 20,
    marginRight:10
  },
  headText:{
    color:'#F5F5F5',
    fontSize:18,
    fontFamily:"GeneralSans"
  },
  subText:{
    color:'#E1E1E1',
    marginTop:4,
    fontFamily:"GeneralSans"
  }
});

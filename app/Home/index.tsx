import {  StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import UserProfile from '@/components/atom/UserProfile'
import Carousel from '@/components/molecule/Carousel'

export default function Home() {
  return (
    <View style={styles.container}>
        <StatusBar/>
    <UserProfile/>
    <Carousel/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#050505ff",
    },
})
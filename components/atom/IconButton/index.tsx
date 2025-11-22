import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'

interface IconButtonProps{
    children:ReactNode,
    customStyle?:Object
}

export default function IconButton({children,customStyle}:IconButtonProps) {
  return (
    <TouchableOpacity style={[styles.container,customStyle]}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        backgroundColor:'#B090F4',
        justifyContent:'center',
        alignItems:'center'
    }
})
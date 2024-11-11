import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors';
export default function Discover() {
  return (
    <View style={{
      padding:25,
      paddingTop:60,
      backgroundColor: Colors.white,
      height:'100%'
    }}>
      <Text style={{
        fontSize:50,
        fontWeight:600
      }}>Find Trip</Text>
    </View>
  )
}
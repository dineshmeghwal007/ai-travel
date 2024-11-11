import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors';
export default function Profile() {
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
      }}>My Profile</Text>
    </View>
  )
}
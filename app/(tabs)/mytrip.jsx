import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import Startnewtripcard from '../../components/MyTrips/Startnewtripcard';
export default function MyTrip() {

  const [userTrips,setuserTrips]=useState([]);
  return (
    <View style={{
      padding:25,
      paddingTop:60,
      backgroundColor: Colors.white,
      height:'100%'
    }}>
      <View style={{

        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-between'
      }}>
        
      <Text style={{
        fontSize:40,
        fontWeight:600
      }}>My Trips</Text>
      <Ionicons name="add-circle" size={50} color="black" />
      
      </View>

      {userTrips?.length==0?
      
      <Startnewtripcard/>
:null      
      }
    </View>
  )
}
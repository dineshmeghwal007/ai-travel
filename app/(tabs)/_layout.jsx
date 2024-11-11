import React from 'react';
import { StatusBar } from 'react-native';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import { Colors } from '../../constants/Colors';
export default function TabLayout() {
  return (
    <>
      {/* Set the StatusBar for the entire app */}
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

      {/* Tab Navigation */}
      <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primery
      }}>
        <Tabs.Screen name="mytrip"  
        options={{
          tabBarLabel: "My Trip",
          tabBarIcon: ({ color}) => (
            <FontAwesome name="paper-plane-o" size={24} color={color} />
          )
        }}/>
        <Tabs.Screen name="discover"     options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color}) => (
            <AntDesign name="find" size={24} color={color} />
          )
        }}/>
        <Tabs.Screen name="profile"     options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color}) => (
            <Octicons name="person" size={24} color={color}  />
          )
        }}/>
      </Tabs>
    </>
  );
}

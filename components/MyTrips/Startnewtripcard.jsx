import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Startnewtripcard()  {

  const router = useRouter();

    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{
        padding: 20,
        marginTop: 100,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }}>
        <FontAwesome5 name="car-side" size={50} color="black" />
        <Text style={{
          fontSize: 30,
          fontWeight: 700

        }}>No Trip Planned Yet!</Text>


        <Text style={{
          fontSize: 25,
          textAlign: 'center',


        }}>Look like its time to plan a new travel experience! Get Started below</Text>


        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('create-trip/search-place')}
        >
          <Text style={styles.buttonText}>
            Start A New Trip!
            </Text>
        </TouchableOpacity>

      </View>
      </GestureHandlerRootView>
    )
  }


const styles = StyleSheet.create({


  button: {
    padding: 15,
    backgroundColor: Colors.primery,
    borderRadius: 15,
    width: '100%',
    marginTop:10
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
  }
})
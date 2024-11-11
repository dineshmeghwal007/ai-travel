import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../config/firebaseconfig';
import Toast from 'react-native-toast-message';

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onsignin = () => {

    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Please enter all details!',
      });
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Handle successful sign-in (e.g., navigate to a home screen or display success message)
        router.replace('mytrip');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/invalid-credential') {
          Toast.show({
            type: 'error',
            text1: 'Invalid Credentials!',
          });
        }
      });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={style.container}>
        <Text style={style.header}>Welcome Back!</Text>

        <View style={style.inputContainer}>
          <Text style={style.label}>Email</Text>
          <TextInput
            style={style.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={style.inputContainer}>
          <Text style={style.label}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={style.input}
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={style.button} onPress={onsignin}>
          <Text style={style.buttontext}>Login Now!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button}
          onPress={() => router.push('/auth/sign-up')}
        >
          <Text style={style.buttontext}>Create Account!</Text>
        </TouchableOpacity>
      </View>

      <Toast />
    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingTop: 10,
    padding: 25,
    height: '100%',
  },
  header: {
    marginTop: 90,
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
  },
  button: {
    marginTop: '5%',
    padding: 13,
    backgroundColor: Colors.primery,
    borderRadius: 99,
    width: '100%',
  },
  buttontext: {
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
  },
});

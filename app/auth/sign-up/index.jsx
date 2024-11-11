import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebaseconfig';
import Toast from 'react-native-toast-message';

export default function SignUp() {
  const router = useRouter();

  const [fullname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onCreateAccount = () => {
    if (!email || !password || !fullname) {
      Toast.show({
        type: 'error',
        text1: 'Please enter all details!',  // Customize the error message
      });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.replace('mytrip');
        // Handle successful sign-up
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Toast.show({
          type: 'error',
          text1: errorMessage || 'Error occurred during sign-up!',  // Display error message from Firebase
        });
      });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={style.container}>
        <Text style={style.header}>Create Account</Text>

        <View style={style.inputContainer}>
          <Text style={style.label}>Full Name</Text>
          <TextInput
            style={style.input}
            placeholder="Enter Full Name"
            value={fullname}
            onChangeText={setName}
          />
        </View>

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

        <TouchableOpacity style={style.button} onPress={onCreateAccount}>
          <Text style={style.buttontext}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button}
          onPress={() => router.push('/auth/sign-in')}
        >
          <Text style={style.buttontext}>Login!</Text>
        </TouchableOpacity>
      </View>
      
      {/* Make sure Toast is rendered at the root level of your component tree */}
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
    marginTop: 60,
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

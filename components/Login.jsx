import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Login() {
    const router = useRouter();

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View>
                <Image
                    source={require('../assets/images/back.jpg')}
                    style={styles.image}
                />
                <View style={styles.container}>
                    <Text style={styles.headerText}>
                        Travel Planner
                    </Text>

                    <Text style={styles.descriptionText}>
                        Embark on your summer vacations with Goibibo, India’s 2nd largest travel app! Whether you're dreaming of cool hill stations, sunny beaches, or exciting city trips, we've got you covered.
                    </Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => router.push('/auth/sign-in')}
                    >
                        <Text style={styles.buttonText}>
                            Login Now!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 600,
    },
    container: {
        backgroundColor: Colors.white,
        marginTop: -40,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%',
        padding: 20,
        textAlign: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.primery,
        textAlign: 'center',
        marginTop:10,
    },
    descriptionText: {
        textAlign: 'center',
    },
    button: {
        marginTop: '10%',
        padding: 13,
        backgroundColor: Colors.primery,
        borderRadius: 99,
        width: '100%',
    },
    buttonText: {
        fontSize: 20,
        color: Colors.white,
        textAlign: 'center',
    },
});

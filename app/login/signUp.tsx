import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import Colors from '@/constant/Colors';
import { useRouter } from 'expo-router';
import { auth } from '../../config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const OnCreateAccount = () => {
        if (!email || !password) { // Fixed syntax error here
             ToastAndroid.show('Please fill all details', ToastAndroid.BOTTOM);
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User created:", user);

                 ToastAndroid.show('Account Created Successfully', ToastAndroid.BOTTOM);

                setTimeout(() => {
                    router.push('/(tabs)');  // Use replace() instead of push() for better UX
                }, 500);
            })
            .catch((error) => {
                console.log("Error:", error.code, error.message);

                if (error.code === 'auth/email-already-in-use') {
                    ToastAndroid.show('Email already exists', ToastAndroid.BOTTOM);
                } else if (error.code === 'auth/weak-password') {
                    ToastAndroid.show('Password should be at least 6 characters', ToastAndroid.BOTTOM);
                } else {
                    ToastAndroid.show('An error occurred. Please try again.', ToastAndroid.BOTTOM);
                }
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Let's Create an Account</Text>
            <Text style={styles.subText}>Welcome Here</Text>
            <Text style={styles.subText}>We've been looking for you!</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Full Name</Text>
                <TextInput placeholder='Full Name' style={styles.TextInput} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    placeholder='Email'
                    style={styles.TextInput}
                    onChangeText={(value) => setEmail(value)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    placeholder='Password'
                    style={styles.TextInput}
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={OnCreateAccount}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCreate} onPress={() => router.push('/login/signIn')}>
                <Text style={styles.buttonCreateText}>Already have an Account? Log In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        backgroundColor: Colors.grey,
        height: '100%',
    },
    textHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.darkblue,
        marginTop: 20,
    },
    subText: {
        fontSize: 25,
        marginTop: 10,
        color: Colors.darklight,
    },
    inputContainer: {
        marginTop: 25,
    },
    inputLabel: {
        fontSize: 16,
    },
    TextInput: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: Colors.darkblue,
        padding: 15,
        borderRadius: 99,
        marginTop: 25,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors.grey,
    },
    buttonCreate: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 99,
        marginTop: 20,
        borderWidth: 2,
        borderColor: Colors.darkblue,
    },
    buttonCreateText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors.darkblue,
    }
});

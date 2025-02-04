import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ToastAndroid, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Colors from '@/constant/Colors';
import { useRouter } from 'expo-router';
import { auth } from '../../config/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../config/firebaseConfig';
import { Picker } from '@react-native-picker/picker';


export default function SignUp() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [passport, setPassport] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountType,setAccountType] = useState('');

    const accountTypes = [
        {id:'1', name:'Admin'},
        {id:'1', name:'Customer'}
    ]

    const OnCreateAccount = async () => {
        if (!email || !password || !fullName || !telephone || !passport || !address) {
            ToastAndroid.show('Please fill all details', ToastAndroid.BOTTOM);
            return;
        }
    
        try {
            // ✅ Create user with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user,{
                displayName:fullName
            });

            console.log("User Authenticated",user.uid)
            
            //✅ Save user details in Firestore using the generated UID
            const registeredUser=await setDoc(doc(db, "users", user.uid), {
                fullName,
                email,
                telephone,
                passport,
                address,
                accountType,
            });

            console.log("Saved User", registeredUser);
    
            console.log("User saved in Firestore!");
    
            ToastAndroid.show('Account Created & Saved Successfully', ToastAndroid.BOTTOM);
    
            setTimeout(() => {
                router.replace('/(tabs)');
            }, 500);
        } catch (error) {
            console.log("Error:", error.code, error.message);
    
            if (error.code === 'auth/email-already-in-use') {
                ToastAndroid.show('Email already exists', ToastAndroid.BOTTOM);
            } else if (error.code === 'auth/weak-password') {
                ToastAndroid.show('Password should be at least 6 characters', ToastAndroid.BOTTOM);
            } else {
                ToastAndroid.show('An error occurred. Please try again.', ToastAndroid.BOTTOM);
            }
        }
    };
    

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={styles.container}
        >
            <ScrollView 
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                <Text style={styles.textHeader}>Let's Create an Account</Text>
                <Text style={styles.subText}>Welcome Here!</Text>
                <Text style={styles.subText}>We've been looking for you</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Full Name</Text>
                    <TextInput 
                        placeholder='Full Name' 
                        style={styles.TextInput} 
                        value={fullName}
                        onChangeText={(value)=>setFullName(value)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Telephone</Text>
                    <TextInput
                        placeholder='Telephone'
                        style={styles.TextInput}
                        value={telephone}
                        onChangeText={(value)=>setTelephone(value)}
                        keyboardType="phone-pad"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Passport/NIC Number</Text>
                    <TextInput
                        placeholder='Passport/NIC Number'
                        style={styles.TextInput}
                        value={passport}
                        onChangeText={(value)=>setPassport(value)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Address</Text>
                    <TextInput
                        placeholder='Address'
                        style={styles.TextInput}
                        value={address}
                        onChangeText={(value)=>setAddress(value)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Account Type</Text>
                    <View style={styles.pickerView}>
                    <Picker
                        selectedValue={accountType}
                        onValueChange={(itemValue) => setAccountType(itemValue)}
                        style={styles.PickerInput}
                        >
                        <Picker.Item label="Select a method" value="" />
                        {accountTypes.map((method) => (
                            <Picker.Item key={method.id} label={method.name} value={method.id} />
                        ))}
                    </Picker>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        placeholder='Email'
                        style={styles.TextInput}
                        value={email}
                        onChangeText={(value)=>setEmail(value)}                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        placeholder='Password'
                        style={styles.TextInput}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(value)=>setPassword(value)}                    />
                </View>

                
                <TouchableOpacity style={styles.button} onPress={OnCreateAccount}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCreate} onPress={() => router.push('/login/signIn')}>
                    <Text style={styles.buttonCreateText}>Already have an Account? Log In</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey,
    },
    scrollContainer: {
        padding: 25,
        paddingBottom: 50,
    },
    textHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.darkblue,
        marginTop: 20,
        textAlign: 'left',
    },
    subText: {
        fontSize: 25,
        marginTop: 10,
        color: Colors.darklight,
        textAlign: 'left',
    },
    inputContainer: {
        marginTop: 20,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: Colors.darkblue,
    },
    TextInput: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        fontSize: 16,
        borderColor: Colors.darklight,
    },
    pickerView:{
        padding: 0,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        fontSize: 16,
        borderColor: Colors.darklight,
    },
    PickerInput:{
        
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

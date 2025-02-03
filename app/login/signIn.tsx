import React, { useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, TextInput, ToastAndroid, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constant/Colors';
import { useRouter } from 'expo-router';
import { auth } from '../../config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn() {
  const router=useRouter();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const OnSignInClick=()=>{
    if(!email || !password){
        ToastAndroid.show('Please enter Email and Password',ToastAndroid.BOTTOM);
        //Alert.alert('Please enter Email and Password');
        return;
    }
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);

        router.replace('/(tabs)');
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode==='auth/invalid-cred'){
            ToastAndroid.show('Invalid Email or Password',ToastAndroid.BOTTOM);
            //Alert.alert('Invalid Email or Password');
        }
    });
  }
  return (
    <View style={{
        padding:25,
        backgroundColor:Colors.grey,
        height:'100%'
    }}>
      <Text style={styles.textHeader}>Let's Sign You In</Text>
      <Text style={styles.subText}>Welcome Back</Text>
      <Text style={styles.subText}>You've been Missed!</Text>
        <View style={{
            marginTop:25
        }}>
            <Text style={{
                fontSize:16
            }}> Email</Text>
            <TextInput 
                placeholder='Email' 
                style ={styles?.TextInput}
                onChangeText={(value)=>setEmail(value)}
            />
            
        </View>
        <View style={{
            marginTop:25
        }}>
            <Text style={{
                fontSize:16
            }}> Password</Text>
            <TextInput 
                placeholder='Password' 
                style ={styles?.TextInput}
                secureTextEntry={true}
                onChangeText={(value)=>setPassword(value)}

                />
            
        </View>
        <TouchableOpacity style={styles?.button}>
            <Text style={{
                textAlign:'center',
                fontWeight:'bold',
                fontSize:16,
                color:Colors.grey,
            }}
            onPress={OnSignInClick}
            >
                Log In
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles?.buttonCreate}
            onPress={()=>router.push('/login/signUp')}
        >
            <Text style={{
                textAlign:'center',
                fontWeight:'bold',
                fontSize:16,
                color:Colors.darkblue,
            }}>
                Create Account
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    textHeader:{
        fontSize:30,
        fontWeight:'bold',
        color:Colors.darkblue,
        marginTop:20,
    },
    subText:{
        fontSize:25,
        marginTop:10,
        color:Colors.darklight
    },
    TextInput:{
        padding:15,
        borderWidth:1,
        borderRadius:10,
        marginTop:5,
        backgroundColor:'white',
        
    },
    button:{
        backgroundColor:Colors.darkblue,
        padding:15,
        borderRadius:99,
        marginTop:25

    },
    buttonCreate:{
        backgroundColor:'white',
        padding:15,
        borderRadius:99,
        marginTop:20,
        borderWidth:2,
        borderColor:Colors.darkblue

    }
});

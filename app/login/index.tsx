import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constant/Colors';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
    const router = useRouter();
  return (
    <View>
      <View style={{
        display:'flex',
        alignItems:'center',
      }}>
        <Image source={require('../../assets/images/homeImg.jpg')}
          style={styles?.image}
        />
      </View>
      <View style={{
        padding:25,
        backgroundColor:Colors.darkblue,
        height:'100%'
      }}>
        <Text style={styles?.welcometo}>
          Welcome to
          
        </Text>
        <Text style={styles?.trackit}>
          TrackIT
        </Text>
        
        <Text  style={styles?.description}>
        Your ultimate logistics companion!
        </Text>
        <TouchableOpacity style={styles?.button}
          onPress={()=>router.push('/login/signIn')}
        >
          <Text style={styles?.btntext}>
            Continue
          </Text>
        </TouchableOpacity>
        <Text  style={
          {
            marginTop:4,
            color:Colors.ligt,
            fontSize:12,
            textAlign:'center',
          }
        }>
          Note: Bu Clicking Continue button, you will agree to our Terms and Conditions!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    width:400,
    height:500
  },
  welcometo:{
    color:Colors.ligt,
    textAlign:'center',
    fontSize:20,
  },
  trackit:{
    color:Colors.lightblue,
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    marginTop: 5,
    marginBottom: 1,
  },
  description:{
    marginTop:5,
    color:Colors.ligt,
    fontSize:16,
    textAlign:'center',
  },
  button:{
    padding:15,
    backgroundColor:Colors.ligt,
    borderRadius:99,
    marginTop:25
  },
  btntext:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:16,
    color:Colors.darkblue
  }
});

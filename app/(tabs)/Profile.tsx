import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Colors from '@/constant/Colors';

export default function Profile() {
  return (
    <View style={styles.mainview}>
      <Text style={styles.title}>Profile</Text>

      {/* Profile Picture */}
      <View style={styles.profilePicContainer}>
        <Image 
          source={require('../../assets/images/user.png')} 
          style={styles.profilePic}
        />
        
      </View>

      {/* Profile Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Full Name</Text>
        <Text style={styles.detail}>John Doe</Text>

        <Text style={styles.label}>Telephone</Text>
        <Text style={styles.detail}>+123 456 7890</Text>

        <Text style={styles.label}>Passport/NIC Number</Text>
        <Text style={styles.detail}>A1234567</Text>

        <Text style={styles.label}>Address</Text>
        <Text style={styles.detail}>123 Main Street, City, Country</Text>
      </View>

      {/* Edit Details Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    padding: 20,
    backgroundColor: Colors.grey,
    height: '100%',
  },
  title: {
    color: Colors.lightblue,
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profilePicContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 150,  
    height: 150, 
    borderRadius: 75, 
    borderWidth: 3,
    borderColor: Colors.darkblue,
  },
  detailsContainer: {
    marginBottom: 30,
  },
  label: {
    color: Colors.darkblue,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detail: {
    color: Colors.darklight,
    fontSize: 14,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: Colors.darkblue,
    padding: 10,
    borderRadius: 99,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

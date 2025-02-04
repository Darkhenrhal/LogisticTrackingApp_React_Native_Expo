import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';  // Ensure this is installed
import Colors from '@/constant/Colors';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

export default function EditUser() {
  const [fullName, setFullName] = useState('John Doe');
  const [telephone, setTelephone] = useState('+123 456 7890');
  const [passport, setPassport] = useState('A1234567');
  const [address, setAddress] = useState('123 Main Street, City, Country');
  const [profileImage, setProfileImage] = useState(null);  // State for the profile image
  const router = useRouter();

  // Function to pick an image from the gallery or camera
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);  // Set the selected image URI
    }
  };

  const handleSave = () => {
    // Save logic goes here (e.g., send updated data to API)
    alert('Profile updated successfully!');
  };

  return (
    <View style={styles.mainview}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/(tabs)')}>
          <FontAwesome name="arrow-left" size={24} color={Colors.lightblue} />
        </TouchableOpacity>
        <Text style={styles.titlemain}>Edit User</Text>
      </View>

      <View style={styles.detailsContainer}>
        {/* Profile Picture Section */}
        <View style={styles.profilePicContainer}>
          <TouchableOpacity onPress={pickImage}>
            <Image
              source={profileImage ? { uri: profileImage } : require('../../assets/images/user.png')}
              style={styles.profilePic}
            />
            <Text style={styles.changePicText}>Change Picture</Text>
          </TouchableOpacity>
        </View>

        {/* Editable Profile Details */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telephone</Text>
          <TextInput
            style={styles.input}
            value={telephone}
            onChangeText={setTelephone}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Passport/NIC Number</Text>
          <TextInput
            style={styles.input}
            value={passport}
            onChangeText={setPassport}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
        </View>
      </View>

      {/* Save Changes Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    padding: 20,
    backgroundColor: Colors.grey,
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  titlemain: {
    color: Colors.lightblue,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  detailsContainer: {
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: Colors.darkblue,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 16,
    borderColor: Colors.darklight,
  },
  saveButton: {
    backgroundColor: Colors.darkblue,
    padding: 10,
    borderRadius: 99,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
  changePicText: {
    marginTop: 10,
    color: Colors.darkblue,
    fontSize: 16,
    textAlign:'center'
  },
});

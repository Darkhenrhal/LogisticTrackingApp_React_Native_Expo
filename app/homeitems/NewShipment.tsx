import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Colors from '@/constant/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function NewShipment() {
  const [shipmentName, setShipmentName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [address, setAddress] = useState('');
  const [pickupDate, setPickUpDate] = useState('');
  const [shipmentDate, setShipmentDate] = useState('');
  const [description, setDescription] = useState('');
  const [shipmentType, setShipmentType] = useState('');
  const [weight, setWeight] = useState('');

  const router = useRouter();

  const handleSubmit = () => {
    console.log('New shipment details:', {
      shipmentName,
      receiverName,
      address,
      shipmentDate,
      description,
      shipmentType,
      weight,
    });
    // You can handle the form submission logic here (e.g., sending data to API)
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/(tabs)')}>
          <FontAwesome name="arrow-left" size={24} color={Colors.lightblue} />
        </TouchableOpacity>
        <Text style={styles.titlemain}>Make New Shipment</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Shipment Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Shipment Name"
          value={shipmentName}
          onChangeText={setShipmentName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Receiver Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Receiver Name"
          value={receiverName}
          onChangeText={setReceiverName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Delivery Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Delivery Address"
          value={address}
          onChangeText={setAddress}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Pick-Up Date</Text>
        <TextInput
          style={styles.input}
          placeholder="Pick-Up Date (e.g., Feb 1, 2025)"
          value={pickupDate}
          onChangeText={setPickUpDate}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Shipment Date</Text>
        <TextInput
          style={styles.input}
          placeholder="Shipment Date (e.g., Feb 5, 2025)"
          value={shipmentDate}
          onChangeText={setShipmentDate}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Shipment Type (e.g., Standard, Express)</Text>
        <TextInput
          style={styles.input}
          placeholder="Shipment Type"
          value={shipmentType}
          onChangeText={setShipmentType}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Weight (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Weight (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Shipment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: Colors.grey,
    flexGrow: 1, // To make sure the scroll works even when content is less than screen height
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
  inputContainer: {
    marginTop: 15,
  },
  inputLabel: {
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
  button: {
    backgroundColor: Colors.darkblue,
    padding: 15,
    borderRadius: 99,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

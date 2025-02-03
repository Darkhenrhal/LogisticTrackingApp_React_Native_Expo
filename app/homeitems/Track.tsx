import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Colors from '@/constant/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const trackingUpdates = [
  { id: '1', status: 'Package Dispatched', date: 'Feb 3, 2025', time: '10:00 AM', location: 'Warehouse, City A' },
  { id: '2', status: 'In Transit', date: 'Feb 3, 2025', time: '12:30 PM', location: 'City A, Enroute to City B' },
  { id: '3', status: 'Arrived at Sorting Facility', date: 'Feb 3, 2025', time: '3:00 PM', location: 'Sorting Center, City B' },
  { id: '4', status: 'Out for Delivery', date: 'Feb 4, 2025', time: '9:00 AM', location: 'City B Distribution Hub' },
  { id: '5', status: 'Delivered', date: 'Feb 4, 2025', time: '12:00 PM', location: 'Delivered to Customer, City B' },
];

export default function Track() {
  const [trackingNo, setTrackingNumber] = useState('');
  const router = useRouter();

  const handleTrackButtonPress = () => {
    // Implement your logic to handle the tracking number (API call or state change)
    // For now, it's just updating the tracking number state
    setTrackingNumber(trackingNo);
  };

  return (
    <ScrollView style={styles.mainview}>
      {/* Back Button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/(tabs)')}>
          <FontAwesome name="arrow-left" size={24} color={Colors.lightblue} />
        </TouchableOpacity>
        <Text style={styles.title}>Tracking</Text>
      </View>

      {/* Tracking Number Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter your Tracking Number</Text>
        <TextInput 
          placeholder="Tracking Number" 
          style={styles.TextInput}
          value={trackingNo}
          onChangeText={(value) => setTrackingNumber(value)}  // Update state as user types
        />
      </View>

      {/* Track Shipment Button */}
      <TouchableOpacity
        onPress={handleTrackButtonPress}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Track Shipment</Text>
      </TouchableOpacity>

      {/* Map Image */}
      <Image source={require('../../assets/images/map.png')} style={styles.map} />

      {/* Tracking Updates */}
      {trackingNo ? (
        <View style={styles.updatesContainer}>
          <Text style={styles.updatesTitle}>Tracking Updates</Text>
          <FlatList
            data={trackingUpdates}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.updateItem}>
                <Text style={styles.updateStatus}>{item.status}</Text>
                <Text style={styles.updateDetails}>{item.date} | {item.time}</Text>
                <Text style={styles.updateLocation}>{item.location}</Text>
              </View>
            )}
          />
        </View>
      ) : (
        <Text style={styles.placeholderText}>Enter a tracking number to see updates</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainview: {
    padding: 20,
    backgroundColor: Colors.grey,
    flex: 1,  // Ensures that the main view takes up available space
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  title: {
    color: Colors.lightblue,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  inputContainer: {
    marginTop: 25,
    marginBottom: 25,
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
  updatesContainer: {
    marginBottom: 25,
  },
  updatesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkblue,
    marginBottom: 10,
    marginTop: 20,
  },
  updateItem: {
    backgroundColor: Colors.darkblue,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  updateStatus: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  updateDetails: {
    color: '#fff',
    fontSize: 14,
  },
  updateLocation: {
    color: Colors.darklight,
    fontSize: 12,
    marginTop: 5,
  },
  placeholderText: {
    color: Colors.darklight,
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    backgroundColor: Colors.darkblue,
    padding: 10,
    borderRadius: 99,
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  map: {
    width: '100%',
    height: 400,
    borderWidth: 3,
    borderColor: Colors.darkblue,
    marginTop: 20,
  },
});

import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Colors from '@/constant/Colors';

const shipmentHistory = [
  { id: '1', title: 'Order #1001', status: 'Delivered', date: 'Jan 30, 2025' },
  { id: '2', title: 'Order #1002', status: 'In Transit', date: 'Feb 1, 2025' },
  { id: '3', title: 'Order #1003', status: 'Pending', date: 'Feb 2, 2025' },
];

const recentShipments = [
  { id: '1', title: 'Shipment to New York', weight: '20kg', date: 'Feb 1, 2025' },
  { id: '2', title: 'Shipment to LA', weight: '15kg', date: 'Feb 3, 2025' },
];

export default function Activities() {
  return (
    <View style={styles.mainview}>
      <Text style={styles.title}>Activities</Text>

      {/* Shipment History Section */}
      <Text style={styles.sectionTitle}>Shipment History</Text>
      <FlatList
        data={shipmentHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listTitle}>{item.title}</Text>
            <Text style={styles.listSub}>{item.status} - {item.date}</Text>
          </View>
        )}
      />

      {/* Recent Shipments Section */}
      <Text style={styles.sectionTitle}>Recent Shipments</Text>
      <FlatList
        data={recentShipments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listTitle}>{item.title}</Text>
            <Text style={styles.listSub}>{item.weight} - {item.date}</Text>
          </View>
        )}
      />
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkblue,
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: Colors.darkblue,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  listTitle: {
    color: Colors.ligt,
    fontSize: 16,
    fontWeight: 'bold',
  },
  listSub: {
    color: Colors.grey,
    fontSize: 14,
  },
});

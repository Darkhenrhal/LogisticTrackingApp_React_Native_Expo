import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import Colors from '@/constant/Colors';


const notifications = [
  { id: '1', message: 'Order #1001 has been shipped to your address.', date: 'Jan 30, 2025' },
  { id: '2', message: 'Order #1002 is currently in transit and will arrive soon.', date: 'Feb 1, 2025' },
  { id: '3', message: 'Order #1003 is delayed due to weather conditions.', date: 'Feb 2, 2025' },
  { id: '4', message: 'Your package has been delivered successfully.', date: 'Feb 3, 2025' },
];

export default function Notifications() {
  return (
    <View style={styles.mainview}>
      <Text style={styles.title}>Notifications</Text>
      
      {/* List of Notifications */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationMessage}>{item.message}</Text>
            <Text style={styles.notificationDate}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    height: '100%',
  },
  title: {
       color: Colors.lightblue,
       textAlign: 'left',
       fontSize: 30,
       fontWeight: 'bold',
       marginBottom: 20,
  },
  notificationItem: {
    backgroundColor: Colors.darkblue,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  notificationMessage: {
    color: Colors.ligt,
    fontSize: 14,
  },
  notificationDate: {
    color: Colors.grey,
    fontSize: 12,
    marginTop: 5,
  },
});

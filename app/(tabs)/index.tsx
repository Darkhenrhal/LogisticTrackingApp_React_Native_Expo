import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Colors from '@/constant/Colors';
import { useRouter } from 'expo-router';

const newsItems = [
  { id: '1', title: 'New Shipment Regulations Coming Soon', date: 'Feb 3, 2025' },
  { id: '2', title: 'Global Shipping Rates Update', date: 'Feb 2, 2025' },
  { id: '3', title: 'Tracking System Enhancements', date: 'Feb 1, 2025' },
];

export default function HomeScreen() {

    const router = useRouter();

  return (
    <View style={styles.mainview}>
      <Text style={styles.trackit}>TrackIT</Text>

      {/* First Row: New Shipment & Ongoing Shipping */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>New Shipment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Ongoing Shipping</Text>
        </TouchableOpacity>
      </View>

      {/* Second Row: Shipping Charge Calculator & Tracking */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Shipping Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}
          onPress={()=>router.replace('/homeitems/Track')}
        >
          <Text style={styles.cardText}>Tracking</Text>
        </TouchableOpacity>
      </View>


      
      <Text style={styles.sectionTitle}>News</Text>
      <FlatList
        data={newsItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDate}>{item.date}</Text>
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
  trackit: {
    color: Colors.lightblue,
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.darkblue,
      marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    flex: 1,
    backgroundColor: Colors.darkblue,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  fullWidth: {
    width: '100%',
    marginHorizontal: 0,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  newsItem: {
    backgroundColor: Colors.darklight,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  newsTitle: {
    color: Colors.ligt,
    fontSize: 16,
    fontWeight: 'bold',
  },
  newsDate: {
    color: Colors.grey,
    fontSize: 14,
    marginTop: 5,
  },
});

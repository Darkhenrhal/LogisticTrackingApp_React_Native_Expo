import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Colors from '@/constant/Colors';
import { useRouter } from 'expo-router';

const newsItems = [
  { id: '1', title: 'New Shipment Regulations Coming Soon', date: 'Feb 3, 2025' },
  { id: '2', title: 'Global Shipping Rates Update', date: 'Feb 2, 2025' },
  { id: '3', title: 'Tracking System Enhancements', date: 'Feb 1, 2025' },
];

const ongoingShipments = [
  { id: '1', shipmentName: 'Shipment 1', status: 'Pending', date: 'Feb 5, 2025' },
  { id: '2', shipmentName: 'Shipment 2', status: 'Pending', date: 'Feb 6, 2025' },
  { id: '3', shipmentName: 'Shipment 3', status: 'Delivered', date: 'Feb 1, 2025' },
  { id: '4', shipmentName: 'Shipment 4', status: 'In Transit', date: 'Feb 3, 2025' },
  { id: '5', shipmentName: 'Shipment 5', status: 'Pending', date: 'Feb 7, 2025' },
];


export default function HomeScreen() {

    const router = useRouter();

  return (
    <View style={styles.mainview}>
      <Text style={styles.trackit}>TrackIT</Text>

      {/* First Row: New Shipment & Ongoing Shipping */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}
          onPress={()=>router.replace('/homeitems/NewShipment')}>
          <Text style={styles.cardText}>New Shipment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}
          onPress={()=>router.replace('/homeitems/Shipments')}
        >
          <Text style={styles.cardText}>My Shipments</Text>
        </TouchableOpacity>
      </View>

      {/* Second Row: Shipping Charge Calculator & Tracking */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}
          onPress={()=>router.replace('/homeitems/ShippingCalculator')}
        >
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

    //Do a conditional rendering on Account Type
    // for admin Dashboard code
    // <View style={styles.mainview}>
    //   <Text style={styles.trackit}>TrackIT</Text>

    //   {/* First Row: New Shipment & Ongoing Shipping */}
    //   <View style={styles.row}>
    //     <TouchableOpacity style={styles.card}
    //       onPress={()=>router.replace('/homeitems/NewShipment')}>
    //       <Text style={styles.cardText}>Customers</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.card}
    //       onPress={()=>router.replace('/homeitems/Track')}
    //     >
    //       <Text style={styles.cardText}>Tracking</Text>
    //     </TouchableOpacity>
        
    //   </View>

    //   {/* Second Row: Shipping Charge Calculator & Tracking */}
    //   <View style={styles.row}>
    //     <TouchableOpacity style={styles.card}
    //       onPress={()=>router.replace('/homeitems/ShippingCalculator')}
    //     >
    //       <Text style={styles.cardText}>Shipping Calculator</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.card}
    //       onPress={()=>router.replace('/homeitems/Shipments')}
    //     >
    //       <Text style={styles.cardText}>Company Staff</Text>
    //     </TouchableOpacity>
    //   </View>


      
    //   <Text style={styles.sectionTitle}>Ongoing Shipments</Text>
    //   <FlatList
    //     data={ongoingShipments}
    //     keyExtractor={(item) => item.id}
    //     renderItem={({ item }) => (
    //       <View style={styles.newsItem}>
    //         <Text style={styles.newsTitle}>{item.shipmentName}</Text>
    //         <Text style={styles.newsDate}>{item.date}</Text>
    //         <Text style={styles.newsDate}>{item.status}</Text>
    //       </View>
    //     )}
    //   />
    // </View>

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

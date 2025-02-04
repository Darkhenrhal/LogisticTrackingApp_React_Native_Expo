import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Colors from '@/constant/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import { useRouter } from 'expo-router';

// Sample Data for Shipments
const pendingShipments = [
  { id: '1', shipmentName: 'Shipment 1', status: 'Pending', date: 'Feb 5, 2025' },
  { id: '2', shipmentName: 'Shipment 2', status: 'Pending', date: 'Feb 6, 2025' },
];

const allShipments = [
  { id: '3', shipmentName: 'Shipment 3', status: 'Delivered', date: 'Feb 1, 2025' },
  { id: '4', shipmentName: 'Shipment 4', status: 'In Transit', date: 'Feb 3, 2025' },
  { id: '5', shipmentName: 'Shipment 5', status: 'Pending', date: 'Feb 7, 2025' },
];

export default function Shipments() {
  const [index, setIndex] = useState(0);
  const router= useRouter();
  // Render Pending Shipments Tab
  const renderPendingShipments = () => (
    <View style={styles.tabContainer}>
      {pendingShipments.length > 0 ? (
        <FlatList
          data={pendingShipments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.shipmentItem}>
              <Text style={styles.shipmentTitle}>{item.shipmentName}</Text>
              <Text style={styles.shipmentDetails}>{item.status} | {item.date}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyState}>No pending shipments.</Text>
      )}
    </View>
  );

  // Render All Shipments Tab
  const renderAllShipments = () => (
    <View style={styles.tabContainer}>
      {allShipments.length > 0 ? (
        <FlatList
          data={allShipments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.shipmentItem}>
              <Text style={styles.shipmentTitle}>{item.shipmentName}</Text>
              <Text style={styles.shipmentDetails}>{item.status} | {item.date}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyState}>No shipments available.</Text>
      )}
    </View>
  );

  // Tab Scenes
  const renderScene = SceneMap({
    pending: renderPendingShipments,
    all: renderAllShipments,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/(tabs)')}>
          <FontAwesome name="arrow-left" size={24} color={Colors.lightblue} />
        </TouchableOpacity>
        <Text style={styles.title}>Tracking</Text>
      </View>
      <TabView
        navigationState={{
          index,
          routes: [
            { key: 'pending', title: 'Pending Shipments' },
            { key: 'all', title: 'All Shipments' },
          ],
        }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={styles.tabBar}
            labelStyle={styles.tabLabel}
            indicatorStyle={styles.tabIndicator}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  tabContainer: {
    flex: 1,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop:15
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
  shipmentItem: {
    backgroundColor: Colors.darkblue,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  shipmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.ligt,
  },
  shipmentDetails: {
    color: Colors.lightblue,
    fontSize: 14,
    marginTop: 5,
  },
  emptyState: {
    fontSize: 16,
    color: Colors.darklight,
    textAlign: 'center',
    marginTop: 20,
  },
  tabBar: {
    backgroundColor: Colors.darkblue,
    elevation: 4, // Shadow effect for tab bar
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  tabIndicator: {
    backgroundColor: Colors.ligt,
  },
});

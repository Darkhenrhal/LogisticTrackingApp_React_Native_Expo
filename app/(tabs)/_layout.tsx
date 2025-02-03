import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';
import Colors from '@/constant/Colors';

export default function TabLayout() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User UID:', user.uid);
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (authenticated === false) {
      router.push('/login');
    }
  }, [authenticated]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabbar, 
        tabBarActiveTintColor: Colors.ligt, 
        tabBarInactiveTintColor: Colors.lightblue, 
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Activities"
        options={{
          tabBarLabel: 'Activities',
          tabBarIcon: ({color}) => <FontAwesome name="th-list" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color}) => <FontAwesome name="bell" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: Colors.darkblue, 
    height:55
  },
});

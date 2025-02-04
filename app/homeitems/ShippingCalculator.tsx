import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker'; // Import Picker from correct package
import Colors from '@/constant/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const sampleDestinations = [
  { id: '1', name: 'New York, USA' },
  { id: '2', name: 'London, UK' },
  { id: '3', name: 'Tokyo, Japan' },
];

const sampleShippingMethods = [
  { id: '1', name: 'Standard (5-7 days)', rate: 5 },
  { id: '2', name: 'Express (2-3 days)', rate: 15 },
  { id: '3', name: 'Overnight', rate: 25 },
];

export default function ShippingCalculator() {
  const [weight, setWeight] = useState('');
  const [height,setHeight]=useState('');
  const [width,setWidth]=useState('');
  const [length,setLength]=useState('');
  const [destination, setDestination] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');
  const [shippingCost, setShippingCost] = useState(null);

  const router=useRouter();

  const calculateShipping = () => {
    // Basic validation
    if (!weight || !destination || !shippingMethod) {
      alert('Please fill in all fields');
      return;
    }

    // Calculate cost based on weight, destination, and shipping method
    const selectedMethod = sampleShippingMethods.find((method) => method.id === shippingMethod);
    if (selectedMethod) {
      const cost = selectedMethod.rate * parseFloat(weight);
      setShippingCost(cost);
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.push('/(tabs)')}>
            <FontAwesome name="arrow-left" size={24} color={Colors.lightblue} />
            </TouchableOpacity>
        <Text style={styles.title}>Shipping Calculator</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Package Weight (kg)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Weight in kg"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Package Height (cm)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Height in cm"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Package Length (cm)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Length in cm"
          value={length}
          onChangeText={(text) => setLength(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Package Width (cm)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Width in cm"
          value={width}
          onChangeText={(text) => setWidth(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Destination</Text>
        <View style={styles.pickerView}>
          <Picker
            selectedValue={destination}
            onValueChange={(itemValue) => setDestination(itemValue)}
            style={styles.inputpicker}
          >
            <Picker.Item label="Select a destination" value="" />
            {sampleDestinations.map((dest) => (
              <Picker.Item key={dest.id} label={dest.name} value={dest.id} />
            ))}
          </Picker>
        </View>
        
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Shipping Method</Text>
        <View style={styles.pickerView}>
        <Picker
          selectedValue={shippingMethod}
          onValueChange={(itemValue) => setShippingMethod(itemValue)}
          style={styles.inputpicker}
        >
          <Picker.Item label="Select a method" value="" />
          {sampleShippingMethods.map((method) => (
            <Picker.Item key={method.id} label={method.name} value={method.id} />
          ))}
        </Picker>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={calculateShipping}>
        <Text style={styles.buttonText}>Calculate Shipping Cost</Text>
      </TouchableOpacity>

      {shippingCost !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Estimated Shipping Cost: ${shippingCost.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.grey,
    flex: 1,
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
    marginBottom: 20,
  
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight:'bold',
    color: Colors.darkblue,
  },
  input: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft:15,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 16,
    borderColor: Colors.darklight,
  },
  pickerView:{
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: 'white',
          fontSize: 16,
          borderColor: Colors.darklight,
  },
  inputpicker:{
 
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
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: Colors.ligt,
    borderRadius: 8,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkblue,
  },
});

import { View, Text } from 'react-native'
import React from 'react'
import Colors from '@/constant/Colors'

export default function NewShipment() {
  return (
    <View style={{
            padding:25,
            backgroundColor:Colors.grey,
            height:'100%'
    }}>
      <Text>NewShipment</Text>
    </View>
  )
}
import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View , Image} from 'react-native'

const Index = () => {
  return (
 <Stack.Screen options={{ 
  headerTransparent: true,
  headerTitle: "",
  headerLeft: () => (
    <TouchableOpacity onPress={() => {}} style{{ marginleft:20 }}>
      <Image
source={{
  url: "",
  }}
  style={{ width:40, height: 40, borderRadius: 10 }}
      />
    </TouchableOpacity>
  ),
  }} />
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  

  }
})
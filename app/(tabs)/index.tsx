import { Ionicons } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import React from 'react'
import Colors from '@/constants/Colors';
import { StyleSheet, Text, Touchable, TouchableOpacity, View , Image} from 'react-native'

const Index = () => {
  return (
    <>
 <Stack.Screen options={{ 
  headerTransparent: true,
  headerTitle: "",
  headerLeft: () => (
    <TouchableOpacity onPress={() => {}} style={{ marginLeft:20 }}>
      <Image
source={{
  uri: "https://xsgams.co/randomusers/avater.php?g=female"
  }}
  style={{ width:40, height: 40, borderRadius: 10 }}
      />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity onPress={() => {}} style={{ 
      marginRight:20,
      backgroundColor: Colors.white,
      padding:10,
      borderRadius:10,
      shadowColor: "#171717",
      shadowOffset: { width: 2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
     }}>
<Ionicons name="notifications" size={20} color={Colors.black} />
    </TouchableOpacity>
  ),
  }} 
  />
  <View style={styles.container}>
    <Text>Explore The Beautiful World!</Text>
  </View>
  </>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  

  }
})
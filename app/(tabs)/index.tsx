import { Ionicons } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import React from 'react'
import Colors from '@/constants/Colors';
import { StyleSheet, Text, Touchable, TouchableOpacity, View , Image} from 'react-native'
import {useHeaderHeight} from '@react-navigation/elements';
import { TextInput } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-screens';


const Index = () => {
  const headerHeight = useHeaderHeight();
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
  <View style={[styles.container, {paddingTop: headerHeight}]}>
    <Text style={styles.headingTxt}>Explore The Beautiful World!</Text>
   <View style={styles.searchSectionWrapper}>
    <View style={styles.SearchBar}>
   <Ionicons name='search' 
   size={18}
   style={{ marginRight: 5 }} 
   color={Colors.black}
   />
   <TextInput placeholder='Search.....' />
   </View>
   <TouchableOpacity onPress={() => {styles.filterBtn}}>
    <Ionicons name='options' size={28} color={Colors.white} />
   </TouchableOpacity>
  </View>
  </View>
  </>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingTxt: {
fontSize: 20,
fontWeight: '800',
color:  Colors.black,
marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: 'row',
    marginVertical: 20,


  },
  SearchBar: {
flexDirection: 'row',
backgroundColor: Colors.white,
padding: 16,
borderRadius: 10,
flex: 1,

  },
  filterBtn:{
    backgroundColor:Colors.primaryColor

  }

})
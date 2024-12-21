import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { ListingType } from '@/types/listingType';
import ListingData from '@/data/destination.json';
import { Feather, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';



const {width} = Dimensions.get('window');
const IMG_HEIGHT = 300;
const ListingDetails = () => {
    const {id} = useLocalSearchParams();
const listing:ListingType  = (ListingData as ListingType[]).find(
(item) => item.id === id
);

const router =  useRouter();
  return (
    <>
    <Stack.Screen options={{ 
      headerTransparent: true,
      headerTitle: "",
      headerLeft: () => (
        <TouchableOpacity onPress={()  =>  router.back()} style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius:10,
          padding: 4,

        }} >
          <View 
          style={{
            backgroundColor: Colors.white,
            padding:6,
            borderRadius: 10,

            }} 
            > 
            <Feather  name='arrow-left' size={20}/>
          </View>
        
         
        </TouchableOpacity>
      ),
      headerRight: () =>  (
        <TouchableOpacity onPress={()  =>  {}} style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius:10,
          padding: 4,

        }} >
          <View 
          style={{
            backgroundColor: Colors.white,
            padding:6,
            borderRadius: 10,

            }} 
            > 
            <MaterialIcons name="bookmark-outline" size={20}  />

          </View>
        
         
        </TouchableOpacity>
      ),
     }} />
    <View style={styles.container}>
      <Image source={{uri:listing.image }}  style={styles.image}/>
   <View>
   
    <View style={styles.contentWrapper}>
      <Text style={styles.listingName}> {listing.name}</Text>
      <View style={styles.listingLocationWrapper}>
      <FontAwesome5 name="map-marker-all" size={18} color={Colors.primaryColor} />
   <Text style={styles.listinglocation}>{listing.location}</Text>
    </View>
   </View>
    </View>
    </View>
    </>
  )
}

export default ListingDetails

const styles = StyleSheet.create({
  image: {
width: width,
height: IMG_HEIGHT,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentWrapper: {
   padding: 20
  },
  listingName: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.black,
    letterSpacing:0.5
  },
  listingLocationWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  listinglocation: {
    fontSize: 14,
    marginLeft: 5,
    color:  Colors.black,
  }
  
})
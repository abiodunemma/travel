import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import Colors from '@/constants/Colors';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import CategoryButton from '@/components/CategoryButton';
import Listings from '@/components/Listings';
import ListingData from '@/data/destination.json';
import GroupListing from '@/components/GroupListing';
import gropdata from "@/data/groups.json";

const Index = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState('All');

  const onCatChanged = (category: string) => {
    console.log("category:", category);
    setCategory(category);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://img.freepik.com/free-photo/beautiful-black-woman-with-afro-curls-hairstyle-smiling-model-orange-hoodie-trendy-jeans-clothes_158538-18903.jpg?t=st=1734345274~exp=1734348874~hmac=de544b341055d5b0351cfd244342983b9245f2a437184ee0e97e5a77ceb2c5c0&w=740"
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={20} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={[styles.container, { paddingTop: headerHeight }]} showsVerticalScrollIndicator={false}>
        <Text style={styles.headingTxt}>Explore The Beautiful World!</Text>

        <View style={styles.searchSectionWrapper}>
          <View style={styles.SearchBar}>
            <Ionicons
              name="search"
              size={18}
              style={{ marginRight: 5 }}
              color={Colors.black}
            />
            <TextInput placeholder="Search....." />
          </View>

          <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
            <Ionicons name="options" size={28} color={Colors.white} />
          </TouchableOpacity>
        </View>

        <CategoryButton onCagtegoryChanged={onCatChanged} />

        {/* Listings Component */}
        <Listings listings={ListingData} category={{ category }} />
     <GroupListing  listings={gropdata} />
      </ScrollView>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingTxt: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.black,
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
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
});

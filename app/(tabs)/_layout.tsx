import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
 
export default function Layout() {
  return (
   <Tabs>
    
    <Tabs.Screen name='index'  options={{ tabBarIcon: ({ color }) => (
     <Ionicons name="compass" size={28} color="blue" />
    ) }}/>

    <Tabs.Screen name='category'
     options={{ tabBarIcon: ({ color }) => (
      <MaterialIcons name="space-dashboard" size={24} color="black" />
    ),
     }}/>

    <Tabs.Screen name='search'
     options={{ tabBarIcon: ({ color }) => (
      <Ionicons name="search" size={24} color="black" />
    ),
   }} />
    <Tabs.Screen name='bookmarks'
     options={{ tabBarIcon: ({ color }) => (
      <Ionicons name="bookmark" size={24} color="black" />
    ),
    }} />
    <Tabs.Screen name='profile' 
     options={{ tabBarIcon: ({ color }) => (
      <FontAwesome name="user" size={24} color="black" />
    ),
  }}/>

   </Tabs>
  )
}
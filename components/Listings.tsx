import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'

type Props = {
  listings: any[]
}

const Listings = ({ listings }: Props) => { 

  const renderItems = ({  item  }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  }


  return (
    <View>
    <FlatList data={listings} renderItem={renderItems} />
    </View>
  )
}


export default Listings

const styles = StyleSheet.create({})

interface RootObject {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  price: string;
  duration: string;
  location: string;
  category: string;
}

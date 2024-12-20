import { StyleSheet, Text, View, ListRenderItem, Image } from 'react-native'
import React from 'react'
import { GroupType } from '@/types/groupType'
import { FlatList } from 'react-native'
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const GroupListing = ({listings}: {listings: GroupType[]}) => {
 const renderItem:ListRenderItem<GroupType > = ({item}) => {
    return(
<View style={styles.item}>
    <Image source={{ uri: item.image }} style={styles.image} />
<View>
   
    <Text style={styles.itemTxt}>{item.name}</Text>
    <View style={{flexDirection: 'row',alignItems: 'center'}}>
        <Ionicons name='star' size={28} color={Colors.primaryColor} />
    <Text>{item.rating}</Text>
    <Text>{item.reviews}</Text>
    </View>
</View>
</View>
    );
 };
    return (
    <View style={{ marginVertical: 20 }} >
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList data={listings} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false}
       />
       
   
    </View>
  );
};

export default GroupListing

const styles = StyleSheet.create({
    title:{
        fontSize: 22,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 10,



    },
    item: {
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 100,
        borderRadius: 18,
        marginRight: 10,

    },
    itemTxt: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
    }
    
})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Colors from '@/constants/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import destinationCategoies from '@/data/category'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const categorybutton = () => {
    const itemRef = useRef<TouchableOpacity [] | nul[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handlerSelectCategory = (index: number) => {

    }

  return (
    <View>
      <Text style={styles.title}>categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ 
        gap: 20,
        paddingVertical:10,
        marginBottom: 10,
       }}>
        {destinationCategoies.map((item,index) => (
            <TouchableOpacity
            key={index}
            ref={(el) => itemRef.current[index] == el}
            onPress={() => handlerSelectCategory(index)}
            style={styles.categorybtnTxt}
               >
                <MaterialCommunityIcons
                 name={item.iconName as any}
                 size={20} 
                 color={Colors.black}
                 />
            <Text style={styles.categorybtnTxt}>{item.title}</Text>
            </TouchableOpacity>
           
        ))}
      </ScrollView>
    </View>
  );
};

export default categorybutton

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: Colors.black,
    },
    catergoryBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: "#333333",
        shadowOffset: { width: 1, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 3,


    },
    categorybtnTxt: {
        marginLeft: 5,
        color: Colors.black,

    }
})
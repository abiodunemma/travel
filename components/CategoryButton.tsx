import {  TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import Colors from '@/constants/Colors'
import destinationCategoies from '@/data/category'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'


type Props = {
  onCagtegoryChanged: (category: string) => void;
}

const categorybutton = ({onCagtegoryChanged}: Props) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemRef = useRef<TouchableOpacity[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handlerSelectCategory = (index: number) => {
      const selected = itemRef.current[index];
        setActiveIndex(index);

        selected?.measure((x) => {
          scrollRef.current?.scrollTo({ x: x, y: 0, animated: true});
        });
     
        onCagtegoryChanged(destinationCategoies[index].title);
    };

  return (
    <View>
      <Text style={styles.title}>categories</Text>
      <ScrollView 
      ref={scrollRef}
      horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{ 
        gap: 20,
        paddingVertical:10,
        marginBottom: 10,
       }}
       >
        {destinationCategoies.map((item,index) => (
            <TouchableOpacity
            key={index}
            ref={(el) => itemRef.current[index] = el}
            onPress={() => handlerSelectCategory(index)}
            style={activeIndex == index ? styles.categorybtnActive : styles.catergoryBtn}
               >
                <MaterialCommunityIcons
                 name={item.iconName as any}
                 size={20} 
                 color={activeIndex == index ? Colors.white : Colors.black}
                 />
            <Text style={activeIndex == index
               ? styles.categorybtnTxtActive
                : styles.catergoryBtnTxt}>{item.title}
                </Text>
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

    },
    categorybtnActive: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.primaryColor,
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 10,
      shadowColor: "#333333",
      shadowOffset: { width: 1, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 3,


    },
    categorybtnTxtActive: {
marginLeft: 5,
color: Colors.white,


    }
})
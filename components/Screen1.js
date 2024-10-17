/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const {height, width} = Dimensions.get('window');
export default function Screen1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([{id: 1, title: 'Redefine fitness with the new Healthify',backgroundColor: 'pink'}, {id: 2, title: 'Track your calories with just a photo',backgroundColor: 'mediumpurple'}, {id: 3, title: 'Get instant insights on your daily activities',backgroundColor: 'deepskyblue'}, {id: 4, title: 'Drive lasting behaviour changes', backgroundColor: 'khaki'}, {id: 5, title: 'Achieve goals faster and stay motivated',backgroundColor: 'lightgreen'}]);
  return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <View style={{height: height/2}}>
        <FlatList
          data={data}
          horizontal
          pagingEnabled
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: width,
                  height: height / 2,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <TouchableOpacity disabled={true} style={{
                  width: '90%',
                  height: '90%',
                  backgroundColor: item.backgroundColor,
                  borderRadius: 10,
                  alignItems: 'center', justifyContent: 'center'
                }}>
                 <Text style={{  // <-- the magic
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  fontSize: 20}}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            );
          }} />
      </View>
      <View style={{
        flexDirection: 'row',
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {
        data.map((item, index) => {
          return (
            <View style={{
              width: currentIndex == index ? 20 : 8,
              height: 8,
              borderRadius: 4,
             backgroundColor: currentIndex == index ? 'green' : 'gray',
              marginLeft: 5
            }}></View>
          );
        })}
      </View>
    </View>
     
   
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


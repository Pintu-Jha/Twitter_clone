import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ForYouColums from '../colums/ForYouColums';
const ForYouComponent = ({dummyData}) => {
  console.log(dummyData);
  return (
    <FlatList
      data={dummyData}
      renderItem={({item, index}) => {
        return (
          <ForYouColums
            item={item}
            index={index}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
          />
        );
      }}
    />
  );
};

export default ForYouComponent;

const styles = StyleSheet.create({});

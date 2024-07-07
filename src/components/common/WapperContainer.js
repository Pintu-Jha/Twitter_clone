import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WapperContainer = ({style = {}, children}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          ...styles.container,
          ...style,
          backgroundColor: '#080808',
        }}>
        {children}
      </View>
    </SafeAreaView>
    //
  );
};

export default WapperContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

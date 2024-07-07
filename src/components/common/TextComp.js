import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { textScale } from '../../styles/responsiveStyles';

const TextComp = ({text = '', style = {}, children, ...props}) => {
 
  return (
    <Text
      style={{
        ...styles.textStyle,
        color:'#fff',
        ...style,
      }}
      {...props}>
      {text}
      {children}
    </Text>
  );
};

export default TextComp;

const styles = StyleSheet.create({
  textStyle: {
    // fontFamily: fontNames.,
    color: '#fff',
    fontSize: textScale(12),
  },
});

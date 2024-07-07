import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {spacing} from '../../styles/spacing';
import {textScale} from '../../styles/responsiveStyles';

const BottonComp = ({
  onPress = () => {},
  text = '',
  style = {},
  isleftImg = null,
  leftSvg,
  textStyle = {},
  isLoading = false,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...style}}
      onPress={onPress}
      activeOpacity={0.6}
      disabled={disabled}>
      {isleftImg && <View>{leftSvg}</View>}
      {isLoading ? (
        <ActivityIndicator size={'small'} color={'white'} />
      ) : (
        <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>
      )}
      <View />
    </TouchableOpacity>
  );
};

export default BottonComp;

const styles = StyleSheet.create({
  container: {
    borderRadius: spacing.RADIUS_12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // paddingVertical: spacing.PADDING_16,
    alignSelf: 'center',
  },
  textStyle: {
    // fontFamily: fontFamily.Medium,
    color: '#fff',
    fontSize: textScale(14),
  },
});

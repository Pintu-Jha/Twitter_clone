import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {spacing} from '../../styles/spacing';
import {
  moderateScale,
  scale,
  textScale,
  verticalScale,
} from '../../styles/responsiveStyles';
import LogoSvg from '../../assets/SVG/LogoSvg';
import {fontNames} from '../../styles/typography';

const HeaderComp = ({
  onPressLeft,
  isCenterImg,
  isLeftImage = false,
  leftImg,
  isRightImg = false,
  rightImg,
  style = {},
  onPressRightImg = () => {},
}) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{...styles.container, ...style}}>
        {isLeftImage ? (
          <TouchableOpacity onPress={!!onPressLeft ? onPressLeft : () => {}}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&s',
              }}
              style={{
                width: scale(30),
                height: scale(30),
                borderRadius: scale(30) / 2,
                resizeMode: 'cover',
              }}
            />
          </TouchableOpacity>
        ) : null}

        {!!isCenterImg ? (
          <Image
            source={require('../../assets/Image/Frame.png')}
            style={{
              resizeMode: 'contain',
              width: scale(35),
              height: verticalScale(35),
            }}
          />
        ) : null}

        {!!isRightImg ? (
          <TouchableOpacity onPress={onPressRightImg}>
            <Text>{rightImg}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
  },
  textStyle: {
    fontSize: textScale(16),
    fontFamily: fontNames.FONT_FAMILY_MEDIUM,
  },
});
export default HeaderComp;

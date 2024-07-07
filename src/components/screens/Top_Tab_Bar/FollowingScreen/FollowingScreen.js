import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WapperContainer from '../../../common/WapperContainer';
import ForYouComponent from '../../../modules/ForYouComponent';
import {textScale} from '../../../../styles/responsiveStyles';

const FollowingScreen = () => {
  return (
    <WapperContainer>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text style={{color: '#fff', fontSize: textScale(20)}}>
          FollowingScreen
        </Text>
      </View>
    </WapperContainer>
  );
};

export default FollowingScreen;

const styles = StyleSheet.create({});

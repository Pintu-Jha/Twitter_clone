import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WapperContainer from '../../../common/WapperContainer';
import { textScale } from '../../../../styles/responsiveStyles';

const CommunitiesScreen = () => {
  return (
    <WapperContainer>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text style={{color: '#fff', fontSize: textScale(20)}}>
          CommunitiesScreen
        </Text>
      </View>
    </WapperContainer>
  );
};

export default CommunitiesScreen;

const styles = StyleSheet.create({});

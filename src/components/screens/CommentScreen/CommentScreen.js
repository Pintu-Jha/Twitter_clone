import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WapperContainer from '../../common/WapperContainer';
import {textScale} from '../../../styles/responsiveStyles';

const CommentScreen = () => {
  return (
    <WapperContainer>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: textScale(16), color: '#fff'}}>
          CommentScreen Comeing Soon...
        </Text>
      </View>
    </WapperContainer>
  );
};

export default CommentScreen;

const styles = StyleSheet.create({});

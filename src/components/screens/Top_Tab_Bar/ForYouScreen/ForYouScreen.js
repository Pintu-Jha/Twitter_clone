import {
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import WapperContainer from '../../../common/WapperContainer';
import VirtualizedView from '../../../common/VirtualizedView'
import ForYouComponent from '../../../modules/ForYouComponent';
import dummyData from '../../../../../dummy.json';

const ForYouScreen = () => {
 
  return (
    <WapperContainer>
      <VirtualizedView>
        <ForYouComponent dummyData={dummyData}/>
      </VirtualizedView>
    </WapperContainer>
  );
};

export default ForYouScreen;

const styles = StyleSheet.create({

});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WapperContainer from '../../../common/WapperContainer';
import HeaderComp from '../../../common/HeaderComp';
import SettingSvg from '../../../../assets/SVG/SettingSvg';
import * as Screens from '../../index';
import navigationString from '../../../../navigation/navigationString';
import TopBar from '../../../common/TopTab/CommonTabBar';

const HomeScreen = () => {
  const tabsData = [
    {
      name: navigationString.FOR_YOU_SCREEN,
      label: 'For you',
      component: Screens.ForYouScreen,
    },
    {
      name: navigationString.FOLLOWING_SCREEN,
      label: 'Following',
      component: Screens.FollowingScreen,
    },
  ];
  return (
    <WapperContainer>
      <HeaderComp
        isLeftImage={true}
        leftImg={<SettingSvg />}
        isRightImg={true}
        rightImg={<SettingSvg />}
        isCenterImg={true}
      />
      <TopBar tabsData={tabsData} />
    </WapperContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

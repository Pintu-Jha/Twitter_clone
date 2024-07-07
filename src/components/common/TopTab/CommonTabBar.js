import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {spacing} from '../../../styles/spacing';
import {fontNames} from '../../../styles/typography';
import {
  moderateScale,
  scale,
  textScale,
  verticalScale,
} from '../../../styles/responsiveStyles';
import React from 'react';

const Tab = createMaterialTopTabNavigator();
const tabBarColor = '#000';

const TopBar = ({tabsData}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'gray',
          // tabBarAllowFontScaling:true,
          // tabBarScrollEnabled:true,
          tabBarPressColor: '#000',
          tabBarIndicatorStyle: {
            backgroundColor: '#0c97fa',
            height: verticalScale(4),
            width: '45%',
            left: scale(5),
            borderRadius: moderateScale(10),
          },
          tabBarLabelStyle: ({focused}) => ({
            fontSize: textScale(12),
            fontFamily: fontNames.FONT_FAMILY_MEDIUM,
            color: focused ? '#fff' : 'gray',
          }),
          tabBarStyle: {
            backgroundColor: tabBarColor,
          },
          tabBarItemStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            width: spacing.FULL_WIDTH / 2,
          },
        }}>
        {tabsData.map((item, index) => {
          return (
            <Tab.Screen
              key={`TopTabBar${index.toString()}`}
              name={item.name}
              component={item.component}
              options={{
                tabBarLabel: item.label,
                tabBarLabelStyle: {
                  textTransform: 'none',
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </SafeAreaView>
  );
};
export default React.memo(TopBar);

const styles = StyleSheet.create({});

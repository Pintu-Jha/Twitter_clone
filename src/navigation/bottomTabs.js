import React, {FC, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {spacing} from '../styles/spacing';
import * as Screen from '../components/screens/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationString from './navigationString';
import Home from '../assets/SVG/Home';
import Search from '../assets/SVG/Search';
import Notification from '../assets/SVG/Notification';
import Inbox from '../assets/SVG/Inbox';
import User from '../assets/SVG/User';
import Home_solid from '../assets/SVG/Home-solid';
import User_soild from '../assets/SVG/User_soild';
import Notification_solid from '../assets/SVG/Notification_solid';
import Inbox_solid from '../assets/SVG/inbox_solid';
import Search_solid from '../assets/SVG/search-solid';

const tabBarColor = '#000';

const Tab = createBottomTabNavigator();

const tabData = [
  {
    name: navigationString.HOME_SCREEN,
    icon: <Home />,
    focusedIcon: <Home_solid />,
    component: Screen.HomeScreen,
  },
  {
    name: navigationString.SEARCH_SCREEN,
    icon: <Search />,
    focusedIcon: <Search_solid />,
    component: Screen.SearchScreen,
  },
  {
    name: navigationString.COMMUNITIES_SCREEN,
    icon: <User />,
    focusedIcon: <User_soild />,
    component: Screen.CommunitiesScreen,
  },
  {
    name: navigationString.NOTIFICATION_SCREEN,
    icon: <Notification />,
    focusedIcon: <Notification_solid />,
    component: Screen.NotificationScreen,
  },
  {
    name: navigationString.INDOX_SCREEN,
    icon: <Inbox />,
    focusedIcon: <Inbox_solid />,
    component: Screen.InboxScreen,
  },
];

function BottomTabs() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: tabBarColor,
              paddingBottom: 0,
              height: spacing.HEIGHT_50,
            },

            headerShown: false,
          }}>
          {tabData.map((item, index) => {
            return (
              <Tab.Screen
                key={`bottomTabMain_${index.toString()}`}
                name={item.name}
                component={item.component}
                listeners={({navigation, route}) => ({})}
                options={{
                  tabBarLabel: item.label,
                  tabBarIcon: ({focused}) => {
                    const Icon = focused ? item.focusedIcon : item.icon;
                    return (
                      <>
                        <View style={[styles.iconContainerStyle]}>
                          <Text>{Icon}</Text>
                        </View>
                      </>
                    );
                  },
                }}
              />
            );
          })}
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default React.memo(BottomTabs);

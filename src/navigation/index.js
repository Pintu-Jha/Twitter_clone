import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';

const AppStack = () => {
  const AuthUserDetails = useSelector(state => state?.auth?.userCredential);
  console.log("AuthUserDetails>",AuthUserDetails);
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {!!AuthUserDetails ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </View>
  );
};

export default AppStack;

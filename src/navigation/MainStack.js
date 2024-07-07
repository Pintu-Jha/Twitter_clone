import React from 'react';
import navigationString from './navigationString';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import bottomTabs from './bottomTabs';
import  * as Screen from '../components/screens'


const Stack = createNativeStackNavigator();

const MainStack= () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
          animation: 'slide_from_right',
          animationTypeForReplace: 'push',
        }}>
        <Stack.Screen
          name={navigationString.BOTTON_TAB_BAR}
          component={bottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationString.Comment_Screen}
          component={Screen.CommentScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name={navigationString.Comments_List_Screen}
          component={Screen.CommentsListScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;

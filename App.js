import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Index from './src/navigation/index';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {retrieveItem, USER_Credensial} from './src/utills/CustomAsyncStorage';
import {saveUserCredential} from './src/redux/reducers/auth';
import LoadingScreen from './src/components/common/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    initUser();

    const loadApp = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoading(false);
    };

    loadApp();
  }, []);

  const initUser = async () => {
    try {
      let data = await retrieveItem('userCredensial');
      console.log(data);
      dispatch(saveUserCredential(data));
    } catch (error) {
      console.log('no data found');
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <Index />
      </Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

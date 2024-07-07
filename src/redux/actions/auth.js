import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../store';
import types from '../types';
import {
  retrieveItem,
  storeItem,
  USER_DATA,
} from '../../utills/CustomAsyncStorage';
const {dispatch} = store;

export const userSignup = async item => {
  try {
    const jsonOfItem = JSON.stringify(item);
    await AsyncStorage.setItem('userData', jsonOfItem);
  } catch (error) {
    console.error('Error storing item:', error);
  }
};

export const userLogin = () => {
  return retrieveItem(USER_DATA);
};

export function logout() {
  AsyncStorage.removeItem(USER_DATA);
  dispatch({type: types.CLEAR_REDUX_STATE});
}

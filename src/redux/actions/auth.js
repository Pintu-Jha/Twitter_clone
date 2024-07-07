import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../store';
import types from '../types';
import {retrieveItem, storeItem, USER_Credensial} from '../../utills/CustomAsyncStorage';
const {dispatch} = store;

export const userSignup = data => {
  return storeItem('userCredensial', data);
};
export const userLogin = () => {
  return retrieveItem('userCredensial');
};

export function logout() {
  AsyncStorage.removeItem('userCredensial');
  dispatch({type: types.CLEAR_REDUX_STATE});
}

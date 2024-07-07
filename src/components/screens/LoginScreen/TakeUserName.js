import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import {spacing} from '../../../styles/spacing';
import WapperContainer from '../../common/WapperContainer';
import TextComp from '../../common/TextComp';
import {
  moderateScale,
  scale,
  textScale,
  verticalScale,
} from '../../../styles/responsiveStyles';
import TextInputComp from '../../common/TextInputComp';
import BottonComp from '../../common/BottonComp';
import navigationString from '../../../navigation/navigationString';
import {fontNames} from '../../../styles/typography';
import {retrieveItem, USER_Credensial} from '../../../utills/CustomAsyncStorage';

const TakeUserName = ({navigation}) => {
  const [username, setuserName] = useState('');
  const [error, setError] = useState(null);

  const handleIsUserNameValid = async () => {
    try {
      const res = await retrieveItem(USER_Credensial);
      if (res.email === username || res.name === username) {
        navigation.navigate(navigationString.LOGIN_SCREEN, {username,res});
      }
      else if(res.email !== username || res.name !== username){
        setError('somthing went wrong')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WapperContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              paddingHorizontal: moderateScale(16),
              paddingTop: moderateScale(16),
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View>
              <TextComp
                text={
                  'To get started,first enter your phone,email address or @username'
                }
                style={styles.headerStyle}
              />
              <TextInputComp
                value={username}
                label=" Phone, email address, or username "
                onChangeText={value => setuserName(value)}
                keyboardType="default"
                errorText={error}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: moderateScale(35),
              }}>
              <BottonComp
                text={'Forgot password?'}
                onPress={() => {}}
                style={{
                  borderWidth: 1,
                  borderColor: '#B9C4CA',
                  paddingHorizontal: scale(14),
                  paddingVertical: verticalScale(8),
                  borderRadius: moderateScale(18),
                }}
                textStyle={{
                  fontSize: textScale(12),
                  color: '#fff',
                  fontFamily: fontNames.FONT_FAMILY_HEAVY,
                }}
              />
              <BottonComp
                text={'Next'}
                onPress={handleIsUserNameValid}
                disabled={username === '' ? true : false}
                style={{
                  backgroundColor: username ? '#e3e5e6' : '#b4b6b8',
                  paddingHorizontal: scale(14),
                  paddingVertical: verticalScale(8),
                  borderRadius: moderateScale(18),
                }}
                textStyle={{
                  fontSize: textScale(14),
                  color: '#000',
                  fontFamily: fontNames.FONT_FAMILY_MEDIUM,
                  opacity: 0.9,
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </WapperContainer>
  );
};

export default TakeUserName;

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: textScale(20),
    color: '#fff',
    marginVertical: spacing.MARGIN_16,
    fontFamily: fontNames.FONT_FAMILY_MEDIUM,
    lineHeight: verticalScale(30),
    opacity: 0.8,
  },
  descStyle: {
    fontSize: textScale(24),
    fontWeight: '500',
    marginBottom: spacing.MARGIN_16,
  },
  forgotTextStyle: {
    fontSize: textScale(14),
    fontWeight: '500',
    alignSelf: 'flex-end',
    color: 'blue',
  },
  loggingWithSocialMedia: {},
});

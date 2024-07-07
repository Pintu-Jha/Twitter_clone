import {
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
import EyeSvg from '../../../assets/SVG/EyeSvg';
import HideEyeSvg from '../../../assets/SVG/HideEyeSvg';
import validator from '../../../utills/validations';
import {fontNames} from '../../../styles/typography';
import {userLogin} from '../../../redux/actions/auth';
import {useDispatch} from 'react-redux';
import {saveUserCredential, saveUserData, saveUseruserCredential} from '../../../redux/reducers/auth';

const LoginScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [error, setError] = useState(null);
  const {username} = route.params;

  const isValidData = () => {
    const error = validator({
      password,
    });
    if (error) {
      setError(error);
      return false;
    }
    return true;
  };
  const handleLogin = async () => {
    const validations = isValidData();
    if (validations) {
      try {
        const response = await userLogin();
        console.log('response>>', response);
        dispatch(saveUserCredential(response));
      } catch (err) {
        console.error(err);
      }
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
              padding: spacing.PADDING_16,
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View>
              <TextComp
                text={'Enter your password'}
                style={styles.headerStyle}
              />
              <TextInputComp
                value={username}
                editable={false}
                style={{marginVertical: moderateScale(16)}}
              />
              <TextInputComp
                value={password}
                label=" Enter Password "
                onChangeText={value => setPassword(value)}
                secureTextEntry={secureText}
                secureText={secureText ? <HideEyeSvg /> : <EyeSvg />}
                onPressSecure={() => setSecureText(!secureText)}
                keyboardType="visible-password"
                errorText={error}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom:moderateScale(16)
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
                text={'Log In'}
                onPress={handleLogin}
                disabled={password === '' ? true : false}
                style={{
                  backgroundColor: password ? '#e3e5e6' : '#b4b6b8',
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

export default LoginScreen;

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: textScale(20),
    color: '#fff',
    fontFamily: fontNames.FONT_FAMILY_HEAVY,
    marginTop: moderateScale(16),
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

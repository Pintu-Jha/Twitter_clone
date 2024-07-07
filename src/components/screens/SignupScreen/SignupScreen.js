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
import validator from '../../../utills/validations';
import navigationString from '../../../navigation/navigationString';
import {fontNames} from '../../../styles/typography';
import {userSignup} from '../../../redux/actions/auth';
import {useDispatch} from 'react-redux';
import {saveUserCredential, saveUserData, saveUseruserCredential} from '../../../redux/reducers/auth';

const SignupScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const isValidData = () => {
    const error = validator({
      name,
      email,
      Password
    });
    if (error) {
      setError(error);
      return false;
    }
    return true;
  };
  const handleSignup = async () => {
    const validations = isValidData();
    if (validations) {
      try {
        const newUser = {
          name,
          email,
          Password,
        };
        const response = await userSignup(newUser);
        console.log('response>>>',response);
        dispatch(saveUserCredential(newUser));
      } catch (err) {
        console.error(err);
        console.log('isError>>', err);
      }
    }
  };

  return (
    <WapperContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, padding: spacing.PADDING_16}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <TextComp text={'Create your account'} style={styles.headerStyle} />
            <View>
              <TextInputComp
                value={name}
                label=" Enter Name "
                onChangeText={value => setName(value)}
                style={{marginVertical: moderateScale(16)}}
                keyboardType="default"
                errorText={error}
              />
              <TextInputComp
                value={email}
                label=" Enter Email "
                onChangeText={value => setEmail(value)}
                keyboardType="email-address"
                errorText={error}
              />
              <TextInputComp
                value={Password}
                label=" Enter Password "
                onChangeText={value => setPassword(value)}
                keyboardType="default"
                style={{marginVertical: moderateScale(16)}}
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
                text={'Use email instead'}
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
                onPress={()=>handleSignup()}
                disabled={name && email === '' ? true : false}
                style={{
                  backgroundColor:
                    name && email && Password ? '#e3e5e6' : '#b4b6b8',
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

export default SignupScreen;

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

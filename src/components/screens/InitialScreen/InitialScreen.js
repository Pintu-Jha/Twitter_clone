import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import WapperContainer from '../../common/WapperContainer';
import {
  moderateScale,
  scale,
  textScale,
  verticalScale,
  width,
} from '../../../styles/responsiveStyles';
import {spacing} from '../../../styles/spacing';
import {fontNames} from '../../../styles/typography';
import TextComp from '../../common/TextComp';
import BottonComp from '../../common/BottonComp';
import GoogleSvg from '../../../assets/SVG/GoogleSvg';
import navigationString from '../../../navigation/navigationString';

const InitialScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);

  const privacyPolicy = (type = 1) => {
    if (type == 1) {
      navigation.navigate(navigationString.WEBVIEW, {type});
    } else {
      navigation.navigate(navigationString.WEBVIEW, {type});
    }
  };

  return (
    <WapperContainer>
      <View
        style={{
          alignItems: 'center',
          padding: moderateScale(16),
          flex: 1,
        }}>
        <View
          style={{
            flex: 0.8,
            alignItems: 'flex-start',
            justifyContent: 'center',
            borderColor: '#fff',
          }}>
          <TextComp text="Need another account?" style={styles.headingStyle} />
          <TextComp
            text={`Whether you need another account for work or just don't want your mum seeting your spicy takes, we've got you covered.`}
            style={styles.descriptionStyle}
          />
        </View>
        <View style={{flex: 0.2, borderColor: '#fff'}}>
          <BottonComp
            text="Continue with Google"
            style={{
              backgroundColor: '#fff',
              width: scale(width) / 1.25,
              paddingVertical: verticalScale(10),
              borderRadius: moderateScale(18),
            }}
            textStyle={{
              color: '#000',
              fontFamily: fontNames.FONT_FAMILY_BOLD,
              fontSize: textScale(14),
              marginLeft: moderateScale(8),
            }}
            isleftImg={true}
            leftSvg={<GoogleSvg />}
          />
          <BottonComp
            text="Create account"
            style={{
              backgroundColor: '#fff',
              width: scale(width) / 1.25,
              paddingVertical: verticalScale(10),
              borderRadius: moderateScale(18),
              marginTop: moderateScale(16),
            }}
            textStyle={{
              color: '#000',
              fontFamily: fontNames.FONT_FAMILY_BOLD,
              fontSize: textScale(14),
            }}
            onPress={() => navigation.navigate(navigationString.SIGNUP_SCREEN)}
          />
        </View>
        <TextComp
          text="By signing up, you agree to our"
          style={{
            fontFamily: fontNames.FONT_FAMILY_LIGHT,
            letterSpacing: 0.5,
            lineHeight: verticalScale(20),
            color: '#fff',
            fontSize: textScale(12),
            flexWrap: 'wrap',
            overflow: 'hidden',
            opacity: 0.7,
            marginRight: moderateScale(10),
          }}>
          <Text style={{color: '#0c97fa'}}>{' Terms, Privacy Policy '}</Text>
          {'and'}
          <Text style={{color: '#0c97fa'}}>{' Cookie Use.'}</Text>
        </TextComp>
        <TextComp
          text="Have an account already?"
          style={{
            alignSelf: 'flex-start',
            fontFamily: fontNames.FONT_FAMILY_LIGHT,
            letterSpacing: 0.5,
            color: '#fff',
            fontSize: textScale(12),
            opacity: 0.7,
            marginLeft: moderateScale(16),
            marginTop: moderateScale(16),
          }}>
          <Text
            style={{color: '#0c97fa'}}
            onPress={() => navigation.navigate(navigationString.Take_User_Name_For_Login)}>
            {'Log in'}
          </Text>
        </TextComp>
      </View>
    </WapperContainer>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  logoStyle: {
    width: spacing.WIDTH_196,
    height: spacing.HEIGHT_196,
    borderRadius: spacing.RADIUS_196 / 2,
  },
  textStyle: {
    fontFamily: fontNames.FONT_FAMILY_MEDIUM,
    color: '#fff',
    textAlign: 'center',
    fontSize: textScale(12),
    textTransform: 'capitalize',
  },
  circularStyle: {
    height: spacing.HEIGHT_40,
    width: spacing.WIDTH_40,
    borderRadius: spacing.RADIUS_20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  langHeadingStyle: {
    fontFamily: fontNames.FONT_FAMILY_BOLD,
    color: '#000',
    fontSize: textScale(14),
    textTransform: 'capitalize',
    marginBottom: spacing.MARGIN_16,
  },
  langTextStyle: {
    fontFamily: fontNames.FONT_FAMILY_MEDIUM,
    color: '#000',
    fontSize: textScale(12),
    textTransform: 'capitalize',
    marginVertical: spacing.MARGIN_8,
  },
  modalStyle: {
    backgroundColor: '#fff',
    minHeight: spacing.FULL_HEIGHT / 4,
    borderTopRightRadius: spacing.RADIUS_10,
    borderTopLeftRadius: spacing.RADIUS_10,
    padding: spacing.PADDING_16,
  },
  headingStyle: {
    fontFamily: fontNames.FONT_FAMILY_BOLD,
    color: '#fff',
    fontSize: textScale(25),
    opacity: 0.9,
  },
  descriptionStyle: {
    fontFamily: fontNames.FONT_FAMILY_LIGHT,
    letterSpacing: 0.5,
    lineHeight: verticalScale(20),
    color: '#fff',
    fontSize: textScale(13),
    flexWrap: 'wrap',
    overflow: 'hidden',
    opacity: 0.5,
  },
});

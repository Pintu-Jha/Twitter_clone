import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  moderateScale,
  scale,
  textScale,
  verticalScale,
} from '../../styles/responsiveStyles';
import {fontNames} from '../../styles/typography';
import {spacing} from '../../styles/spacing';

const TextInputComp = ({
  label,
  errorText,
  value,
  style,
  onBlur,
  onFocus,
  secureText = false,
  onPressSecure = () => {},
  editable = true,
  ...restOfProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value]);

  let color = isFocused ? '#0c97fa' : '#B9C4CA';
  if (errorText) {
    color = '#B00020';
  }

  return (
    <>
      <View
        style={{
          ...styles.container,
          ...style,
          borderColor: color,
        }}>
        <TextInput
          style={styles.input}
          editable={editable}
          ref={inputRef}
          {...restOfProps}
          value={value}
          onBlur={event => {
            setIsFocused(false);
            onBlur?.(event);
          }}
          onFocus={event => {
            setIsFocused(true);
            onFocus?.(event);
          }}
        />
        <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
          <Animated.View
            style={[
              styles.labelContainer,
              {
                transform: [
                  {
                    translateY: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-5, -30],
                    }),
                  },
                  {
                    translateX: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -8],
                    }),
                  },
                ],
              },
            ]}>
            <Text
              style={[
                styles.label,
                {
                  color,
                },
              ]}>
              {label}
              {errorText ? '*' : ''}
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        {!!secureText ? (
          <Text style={{flex: 0}} onPress={onPressSecure}>
            {secureText}
          </Text>
        ) : null}
      </View>
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: fontNames.FONT_FAMILY_MEDIUM,
    fontSize: textScale(14),
    color: '#B9C4CA',
    flex: 1,
  },
  labelContainer: {
    position: 'absolute',
    backgroundColor: '#000',
    left: scale(20),
    bottom: verticalScale(12),
  },
  label: {
    fontFamily: fontNames.FONT_FAMILY_BOLD,
    fontSize: textScale(12),
    opacity: 0.7,
    letterSpacing: 1,
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 12,
    color: '#B00020',
    fontFamily: 'Avenir-Medium',
  },
  container: {
    width: spacing.FULL_WIDTH / 1.1,
    borderRadius: moderateScale(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: moderateScale(12),
  },
});

export default TextInputComp;

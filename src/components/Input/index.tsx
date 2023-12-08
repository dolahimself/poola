import React from 'react';
import {Text, TextInput, View, useColorScheme} from 'react-native';
import {fontSz, hp} from '../../utils';
import colors from '../../utils/colors';

const Input = (props: {
  containerStyle?: any;
  value: any;
  label?: any;
  placeholder?: any;
  inputStyle?: any;
  prependComponent?: any;
  appendComponent?: any;
  onChange?: any;
  onEndEditing?: any;
  onFocus?: any;
  secureTextEntry?: any;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | undefined;
  autoCompleteType?:
    | 'off'
    | 'birthdate-day'
    | 'birthdate-full'
    | 'birthdate-month'
    | 'birthdate-year'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-day'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'email'
    | 'gender'
    | 'name'
    | 'name-family'
    | 'name-given'
    | 'name-middle'
    | 'name-middle-initial'
    | 'name-prefix'
    | 'name-suffix'
    | 'password'
    | 'password-new'
    | 'postal-address'
    | 'postal-address-country'
    | 'postal-address-extended'
    | 'postal-address-extended-postal-code'
    | 'postal-address-locality'
    | 'postal-address-region'
    | 'postal-code'
    | 'street-address'
    | 'sms-otp'
    | 'tel'
    | 'tel-country-code'
    | 'tel-national'
    | 'tel-device'
    | 'username'
    | 'username-new'
    | 'off'
    | undefined;
  autoCapitalize?: 'none' | undefined;
  errorMsg?: string | undefined;
  multiline?: boolean | undefined;
  numberOfLines?: number;
  isLoading?: boolean;
}) => {
  const {
    value,
    containerStyle,
    label,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    onEndEditing,
    onFocus,
    secureTextEntry,
    keyboardType = 'default',
    autoCompleteType = 'off',
    autoCapitalize = 'none',
    errorMsg = ' ',
    multiline = false,
    numberOfLines = 1,
    isLoading = false,
  } = props;
  const isDarkMode = useColorScheme();

  return (
    <View style={{...containerStyle}}>
      {/* Label and error message */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: colors[isDarkMode ?? 'dark'].text,
            fontFamily: 'Satoshi-Medium',
            fontSize: fontSz(12),
            fontWeight: '500',
          }}>
          {label}
        </Text>
        <Text
          style={{
            color: colors[isDarkMode ?? 'dark'].red,
            fontFamily: 'Satoshi-Medium',
            fontSize: fontSz(12),
            fontWeight: '500',
          }}>
          {errorMsg}
        </Text>
      </View>

      {/* Text Input */}
      <View
        style={{
          flexDirection: 'row',
          height: hp(35),
          paddingHorizontal: fontSz(7.5),
          borderRadius: fontSz(7),
          borderColor: colors[isDarkMode ?? 'dark'].searchInputBackground,
          borderWidth: fontSz(0),
          backgroundColor: colors[isDarkMode ?? 'dark'].searchInputBackground,
        }}>
        {prependComponent}

        <TextInput
          style={{
            flex: 1,
            ...inputStyle,
            color: colors[isDarkMode ?? 'dark'].text,
            fontFamily: 'Satoshi-Medium',
          }}
          placeholder={placeholder}
          value={value}
          placeholderTextColor={colors[isDarkMode ?? 'dark'].searchInputIcon}
          onChangeText={text => onChange(text)}
          onEndEditing={text => onEndEditing(text)}
          onFocus={text => onFocus()}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoComplete={autoCompleteType}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />

        {appendComponent}
      </View>
    </View>
  );
};

export default Input;

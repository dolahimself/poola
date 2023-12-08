import React from 'react';
import {Platform, StyleSheet, View, useColorScheme} from 'react-native';
import {fontSz, globalStyles, hp, wp} from '../../utils';
import colors from '../../utils/colors';
import {
  DropDownIcon,
  LogoText,
  MessengerIcon,
  UploadIcon,
} from '../../assets/svg';
import {CustomPressable} from '../Pressable';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = () => {
  const isDarkMode = useColorScheme();

  return (
    <View style={[globalStyles.rowBetween, styles.container]}>
      <CustomPressable
        style={[
          globalStyles.rowStart,
          {
            alignItems: 'flex-start',
          },
        ]}>
        <LogoText
          style={{
            marginRight: wp(20),
          }}
        />
        <DropDownIcon
          style={{
            alignItems: 'center',
          }}
        />
      </CustomPressable>
      <View style={[globalStyles.rowEnd]}>
        <CustomPressable>
          <AntDesign
            name={'hearto'}
            style={{
              fontSize: fontSz(25),
              color: colors[isDarkMode ?? 'dark'].text,
            }}
          />
        </CustomPressable>
        <CustomPressable
          style={{
            marginLeft: wp(50),
          }}>
          <MessengerIcon color={colors[isDarkMode ?? 'dark'].text} />
        </CustomPressable>
        <CustomPressable
          style={{
            marginLeft: wp(50),
          }}>
          <UploadIcon color={colors[isDarkMode ?? 'dark'].text} />
        </CustomPressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? hp(40) : hp(10),
    paddingBottom: hp(10),
    paddingHorizontal: wp(40),
  },
  dropdownImage: {
    height: fontSz(17.5),
    width: fontSz(17.5),
    alignItems: 'center',
  },
});

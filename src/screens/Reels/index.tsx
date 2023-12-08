import React from 'react';
import {Platform, StyleSheet, Text, View, useColorScheme} from 'react-native';
import {fontSz, globalStyles, height, hp, width, wp} from '../../utils';
import {CameraIcon, DropDownIcon} from '../../assets/svg';
import colors from '../../utils/colors';
import {CustomPressable} from '../../components/Pressable';
import {CustomText} from '../../components/Text';
import RealTray from '../../components/RealTray';

const Reels = () => {
  const isDarkMode = useColorScheme();

  return (
    <View
      style={{
        width: width,
        height: height,
        position: 'relative',
        backgroundColor: 'black',
      }}>
      <View
        style={{
          position: 'absolute',
          top: Platform.OS === 'ios' ? hp(40) : hp(5),
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}>
        <CustomPressable
          style={[
            globalStyles.rowStart,
            {
              alignItems: 'flex-start',
            },
          ]}>
          <CustomText
            style={{
              marginRight: wp(20),
            }}
            fontWeight="600"
            color={colors[isDarkMode ?? 'dark'].text}
            fontSize={fontSz(21.5)}
            text={`Reels`}
          />
          <DropDownIcon
            style={{
              alignItems: 'center',
            }}
          />
        </CustomPressable>
        <CustomPressable>
          <CameraIcon color={colors[isDarkMode ?? 'dark'].text} />
        </CustomPressable>
      </View>
      <RealTray />
    </View>
  );
};

export default Reels;

const styles = StyleSheet.create({});

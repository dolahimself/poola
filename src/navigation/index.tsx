import React from 'react';
import {Image, useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabRoutes} from '../routes';
import {fontSz, hp} from '../utils';
import Icon from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Upload from '../screens/Upload';
import Reels from '../screens/Reels';
import Profile from '../screens/Profile';
import colors from '../utils/colors';
import {HomeIcon, ReelIcon, SearchIcon, UploadIcon} from '../assets/svg';

const Tab = createBottomTabNavigator<TabRoutes>();

const TabStack = () => {
  const isDarkMode = useColorScheme();

  return (
    <Tab.Navigator
      id="tabs"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors[isDarkMode ?? 'dark'].text,
        tabBarInactiveTintColor: colors[isDarkMode ?? 'dark'].border,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors[isDarkMode ?? 'dark'].background,
        },
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          size = focused ? size + fontSz(6) : size + fontSz(2);
          if (route.name === 'Home') {
            return <HomeIcon height={size} width={size} color={color} />;
          } else if (route.name === 'Search') {
            return <SearchIcon height={size} width={size} color={color} />;
          } else if (route.name === 'Reels') {
            return <ReelIcon height={size} width={size} color={color} />;
          } else if (route.name === 'Upload') {
            return <UploadIcon height={size} width={size} color={color} />;
          } else if (route.name === 'Profile') {
            iconName = 'account-circle-outline';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Upload" component={Upload} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabStack;

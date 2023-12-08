import React, {useState} from 'react';
import {View, StatusBar, useColorScheme} from 'react-native';
import SearchTray from '../../components/SearchTray';
import colors from '../../utils/colors';

const Search = () => {
  const isDarkMode = useColorScheme();

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: colors[isDarkMode ?? 'dark'].background,
        position: 'relative',
      }}>
      <SearchTray />
      <StatusBar
        backgroundColor={colors[isDarkMode ?? 'dark'].background}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        animated={true}
      />
    </View>
  );
};

export default Search;

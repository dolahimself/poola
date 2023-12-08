import React from 'react';
import {StatusBar, StyleSheet, View, useColorScheme} from 'react-native';
import colors from '../../utils/colors';
import Header from '../../components/Header';
import Posts from '../../components/Posts';

const Home = () => {
  const isDarkMode = useColorScheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors[isDarkMode ?? 'dark'].background,
      }}>
      <Header />
      <Posts />
      <StatusBar
        backgroundColor={colors[isDarkMode ?? 'dark'].background}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        animated={true}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

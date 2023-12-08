import React from 'react';
import {View, FlatList, useColorScheme} from 'react-native';
import FastImage from 'react-native-fast-image';
import {CustomPressable} from '../Pressable';
import {Colors, fontSz, hp, wp} from '../../utils';
import {AddStoryIcon} from '../../assets/svg';
import {CustomText} from '../Text';
import colors from '../../utils/colors';
import {data} from '../../../feeds.json';

const Story = ({
  id,
  name,
  image,
  myStory,
}: {
  id?: string;
  name?: string;
  image?: any;
  myStory?: boolean;
}) => {
  const isDarkMode = useColorScheme();

  return (
    <CustomPressable>
      <View
        style={{
          flexDirection: 'column',
          marginHorizontal: wp(20),
          position: 'relative',
          width: fontSz(69.231),
        }}>
        {myStory && (
          <AddStoryIcon
            style={{
              position: 'absolute',
              top: fontSz(42.5),
              right: fontSz(2),
              zIndex: 999,
            }}
          />
        )}
        <View
          style={{
            width: fontSz(69.231),
            height: fontSz(69.231),
            backgroundColor: Colors.white,
            borderWidth: fontSz(1.8),
            borderRadius: fontSz(69.231),
            borderColor: Colors.storyBorder,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FastImage
            style={{
              width: '92%',
              height: '92%',
              borderRadius: fontSz(100),
              backgroundColor: 'orange',
            }}
            source={{
              uri: image,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        {!myStory && (
          <CustomText
            numberOfLines={1}
            style={{
              width: '92.5%',
              paddingTop: hp(4),
              alignSelf: 'center',
            }}
            fontWeight="400"
            textAlign="center"
            color={colors[isDarkMode ?? 'dark'].text}
            fontSize={fontSz(12)}
            text={`${name ?? ''}`}
          />
        )}
      </View>
    </CustomPressable>
  );
};

const Stories = () => {
  const getData = () => {
    return data.splice(1, 10);
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      contentContainerStyle={{paddingVertical: hp(7.5)}}
      data={getData()}
      ListHeaderComponent={
        <Story
          id={data[0]?.id}
          name={''}
          image={`${data[0]?.link}media/?size=m`}
          myStory={true}
        />
      }
      renderItem={({item, index}) => {
        return (
          <Story
            key={index}
            id={item?.id}
            name={item?.user?.username}
            image={`${item?.link}media/?size=m`}
          />
        );
      }}
      keyExtractor={(item, index) => `${index}`}
    />
  );
};

export default Stories;

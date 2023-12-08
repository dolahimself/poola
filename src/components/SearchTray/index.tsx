import React, {useState, useRef} from 'react';
import {View, FlatList, Platform, useColorScheme} from 'react-native';
import FastImage from 'react-native-fast-image';
import {hp, searches, wp} from '../../utils';
import {CustomPressable} from '../Pressable';
import Input from '../Input';
import colors from '../../utils/colors';
import {InputSearchIcon} from '../../assets/svg';

const SearchItem = ({item}: {item?: any}) => {
  switch (item?.id) {
    case 0:
      return (
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          {item?.images.map(
            (imageData: any, imgIndex: React.Key | null | undefined) => {
              return (
                <CustomPressable
                  key={imgIndex}
                  onPressIn={() => {}}
                  onPressOut={() => {}}
                  style={{paddingBottom: 2, width: '33%'}}>
                  <FastImage
                    style={{width: '100%', height: hp(150)}}
                    source={{
                      uri: `${imageData}media/?size=m`,
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </CustomPressable>
              );
            },
          )}
        </View>
      );
    case 1:
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '66.5%',
              justifyContent: 'space-between',
            }}>
            {item.images
              .slice(0, 4)
              .map((imageData: any, imgIndex: React.Key | null | undefined) => {
                return (
                  <CustomPressable
                    key={imgIndex}
                    onPressIn={() => {}}
                    onPressOut={() => {}}
                    style={{paddingBottom: 2, width: '49.5%'}}>
                    <FastImage
                      style={{width: '100%', height: hp(150)}}
                      source={{
                        uri: `${imageData}media/?size=m`,
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.cover}
                    />
                  </CustomPressable>
                );
              })}
          </View>
          <CustomPressable
            onPressIn={() => {}}
            onPressOut={() => {}}
            style={{marginLeft: 2, width: '33%'}}>
            <FastImage
              style={{width: '100%', height: hp(300)}}
              source={{
                uri: `${item?.images[5]}media/?size=m`,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </CustomPressable>
        </View>
      );
    case 2:
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <CustomPressable
            onPressIn={() => {}}
            onPressOut={() => {}}
            style={{paddingRight: 2, width: '66.5%'}}>
            <FastImage
              style={{width: '100%', height: hp(300)}}
              source={{
                uri: `${item.images[2]}media/?size=m`,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </CustomPressable>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '33%',
              justifyContent: 'space-between',
            }}>
            {item.images
              .slice(0, 2)
              .map((imageData: any, imgIndex: React.Key | null | undefined) => {
                return (
                  <CustomPressable
                    key={imgIndex}
                    onPressIn={() => {}}
                    onPressOut={() => {}}
                    style={{paddingBottom: 2, width: '100%'}}>
                    <FastImage
                      style={{width: '100%', height: hp(150)}}
                      source={{
                        uri: `${imageData}media/?size=m`,
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.cover}
                    />
                  </CustomPressable>
                );
              })}
          </View>
        </View>
      );
    default:
      break;
  }
};

const SearchTray = () => {
  const isDarkMode = useColorScheme();
  const listRef = useRef<FlatList>(null);
  const [searchText, setSearchText] = useState<string>('');

  const getData = () => {
    return searches;
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? hp(40) : hp(10),
      }}>
      <Input
        value={searchText}
        placeholder={'Search'}
        onChange={setSearchText}
        onFocus={() => {}}
        onEndEditing={() => {}}
        containerStyle={{
          marginBottom: hp(10),
          marginHorizontal: wp(40),
        }}
        prependComponent={
          <CustomPressable
            style={{
              justifyContent: 'center',
            }}>
            <InputSearchIcon
              color={colors[isDarkMode ?? 'dark'].searchInputIcon}
              style={{
                marginRight: wp(10),
              }}
            />
          </CustomPressable>
        }
      />
      <FlatList
        ref={listRef}
        showsVerticalScrollIndicator={false}
        data={getData()}
        renderItem={({item, index}) => {
          return <SearchItem key={index} item={item} />;
        }}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};

export default SearchTray;

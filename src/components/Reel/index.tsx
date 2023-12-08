import React, {useRef, useState} from 'react';
import {View, useColorScheme, Platform} from 'react-native';
import Video from 'react-native-video';
import FastImage from 'react-native-fast-image';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fontSz, height, hp, width, wp, ASPECT_RATIO} from '../../utils';
import {CustomPressable} from '../Pressable';
import {
  CommentReelIcon,
  MusicIcon,
  SeeMoreIcon,
  ShareReelIcon,
} from '../../assets/svg';
import colors from '../../utils/colors';
import {CustomText} from '../Text';

const Reel = ({
  item,
  index,
  currentIndex,
}: {
  item: any;
  index: number;
  currentIndex: number;
}) => {
  const isDarkMode = useColorScheme();
  const videoRef = useRef<Video>(null);
  const [seeMore, setSeeMore] = useState(false);
  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(item.isLike);

  const onBuffer = (buffer: any) => {
    console.log('buffering the video', buffer);
  };

  const onError = (error: any) => {
    console.log('error', error);
  };

  return (
    <View
      style={{
        width: width,
        height: height,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CustomPressable
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          ref={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={currentIndex == index ? false : true}
          source={item.video}
          muted={mute}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </CustomPressable>
      {mute && (
        <Ionic
          name="volume-mute"
          style={{
            fontSize: mute ? fontSz(40) : 0,
            color: 'white',
            position: 'absolute',
            padding: mute ? 20 : 0,
          }}
        />
      )}

      <View
        style={{
          position: 'absolute',
          width: width,
          zIndex: 1,
          bottom: Platform.OS === 'ios' ? fontSz(90) : fontSz(70), //edited
          paddingHorizontal: wp(10),
        }}>
        <View style={{}}>
          <CustomPressable style={{width: wp(width - 70)}}>
            <View
              style={{
                width: wp(300),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: fontSz(36),
                  height: fontSz(36),
                  borderRadius: fontSz(36),
                  margin: 10,
                }}>
                <FastImage
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 100,
                  }}
                  source={{
                    uri: `${item.postProfile}media/?size=m`,
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </View>
              <CustomText
                numberOfLines={1}
                fontWeight="600"
                color={colors[isDarkMode ?? 'dark'].background}
                fontSize={fontSz(13.5)}
                text={`${item.title ?? ''}`}
              />
            </View>
          </CustomPressable>

          <CustomPressable
            onPress={() => {
              setSeeMore(!seeMore);
            }}>
            <CustomText
              numberOfLines={seeMore ? 0 : 1}
              fontWeight="400"
              color={colors[isDarkMode ?? 'dark'].background}
              fontSize={fontSz(13.5)}
              text={`${item.description} Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
              style={{
                width: '88.5%',
                paddingHorizontal: wp(20),
              }}
            />
          </CustomPressable>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: fontSz(10),
              paddingVertical: fontSz(10),
            }}>
            <MusicIcon color={colors[isDarkMode ?? 'dark'].text} />
            <CustomText
              numberOfLines={1}
              fontWeight="400"
              color={colors[isDarkMode ?? 'dark'].background}
              fontSize={fontSz(12.5)}
              text={`Music Playing`}
              style={{
                paddingHorizontal: wp(10),
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: Platform.OS === 'ios' ? fontSz(90) : fontSz(70),
          right: 0,
        }}>
        <CustomPressable
          onPress={() => setLike(!like)}
          style={{paddingHorizontal: fontSz(10), alignItems: 'center'}}>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={{
              fontSize: fontSz(25),
              color: like
                ? colors[isDarkMode ?? 'dark'].red
                : colors[isDarkMode ?? 'dark'].text,
            }}
          />
          <CustomText
            numberOfLines={1}
            textAlign="center"
            fontWeight="600"
            color={colors[isDarkMode ?? 'dark'].text}
            fontSize={fontSz(12)}
            text={`${item?.likes}`}
          />
        </CustomPressable>
        <CustomPressable
          style={{
            paddingHorizontal: fontSz(10),
            paddingVertical: hp(12.5),
            alignItems: 'center',
          }}>
          <CommentReelIcon color={colors[isDarkMode ?? 'dark'].text} />
          <CustomText
            numberOfLines={1}
            textAlign="center"
            fontWeight="600"
            color={colors[isDarkMode ?? 'dark'].text}
            fontSize={fontSz(12)}
            text={`${item?.likes}`}
          />
        </CustomPressable>
        <CustomPressable
          style={{paddingHorizontal: fontSz(10), alignItems: 'center'}}>
          <ShareReelIcon color={colors[isDarkMode ?? 'dark'].text} />
        </CustomPressable>
        <CustomPressable
          style={{
            paddingHorizontal: fontSz(10),
            paddingTop: hp(5),
            alignItems: 'center',
          }}>
          <SeeMoreIcon color={colors[isDarkMode ?? 'dark'].text} />
        </CustomPressable>
        <View
          style={{
            width: fontSz(30),
            height: fontSz(30),
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'white',
            margin: 10,
          }}>
          <FastImage
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
            source={{
              uri: `${item.postProfile}media/?size=m`,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      </View>
    </View>
  );
};

export default Reel;

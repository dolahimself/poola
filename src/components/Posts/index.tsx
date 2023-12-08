import React, {useState, useRef} from 'react';
import {View, Text, TextInput, FlatList, useColorScheme} from 'react-native';
import FastImage from 'react-native-fast-image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Stories from '../Stories';
import {fontSz, globalStyles, hp, wp} from '../../utils';
import colors from '../../utils/colors';
import {
  BookMarkIcon,
  CommentIcon,
  SeeMoreIcon,
  ShareIcon,
} from '../../assets/svg';
import {CustomPressable} from '../Pressable';
import {CustomText} from '../Text';
import {data} from '../../../feeds.json';

const Post = ({
  postPersonImage,
  postTitle,
  text,
  postImage,
  likes,
  isLiked,
}: {
  postPersonImage?: any;
  postTitle: string;
  text?: string;
  postImage: any;
  likes: number;
  isLiked?: boolean;
}) => {
  const isDarkMode = useColorScheme();
  const [like, setLike] = useState(isLiked);
  const [showAll, setShowAll] = useState(false);
  const [bookmark, setBookMark] = useState(false);

  return (
    <View
      style={{
        paddingBottom: fontSz(10),
        borderBottomColor: colors[isDarkMode ?? 'dark'].border,
        borderBottomWidth: 0.1,
      }}>
      <View
        style={[
          globalStyles.rowBetween,
          {
            paddingHorizontal: fontSz(10),
            paddingVertical: fontSz(15),
          },
        ]}>
        <View style={globalStyles.rowCenter}>
          <CustomPressable>
            <FastImage
              style={{width: fontSz(45), height: fontSz(45), borderRadius: 100}}
              source={{
                uri: postPersonImage,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </CustomPressable>
          <CustomPressable>
            <CustomText
              style={{paddingLeft: wp(25)}}
              numberOfLines={1}
              fontWeight="bold"
              color={colors[isDarkMode ?? 'dark'].text}
              fontSize={fontSz(15)}
              text={`${postTitle ?? ''}`}
            />
          </CustomPressable>
        </View>
        <CustomPressable>
          <SeeMoreIcon color={colors[isDarkMode ?? 'dark'].text} />
        </CustomPressable>
      </View>
      <View
        style={{
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FastImage
          style={{width: '100%', height: hp(300)}}
          source={{
            uri: postImage,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View
        style={[
          globalStyles.rowBetween,
          {
            paddingHorizontal: fontSz(14),
            paddingVertical: fontSz(15),
          },
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomPressable
            style={{
              paddingRight: fontSz(10),
            }}
            onPress={() => {
              setLike(!like);
            }}>
            <AntDesign
              name={like ? 'heart' : 'hearto'}
              style={{
                fontSize: fontSz(25),
                color: like
                  ? colors[isDarkMode ?? 'dark'].red
                  : colors[isDarkMode ?? 'dark'].text,
              }}
            />
          </CustomPressable>
          <CustomPressable style={{paddingRight: fontSz(10)}}>
            <CommentIcon
              color={colors[isDarkMode ?? 'dark'].text}
              fill={colors[isDarkMode ?? 'dark'].text}
              strokeOpacity={1}
            />
          </CustomPressable>
          <CustomPressable>
            <ShareIcon
              color={colors[isDarkMode ?? 'dark'].text}
              stroke={colors[isDarkMode ?? 'dark'].text}
              strokeOpacity={1}
            />
          </CustomPressable>
        </View>
        <CustomPressable
          onPress={() => {
            setBookMark(!bookmark);
          }}>
          <BookMarkIcon
            color={colors[isDarkMode ?? 'dark'].text}
            fill={bookmark ? colors[isDarkMode ?? 'dark'].text : 'transparent'}
          />
        </CustomPressable>
      </View>
      <View style={{paddingHorizontal: fontSz(12)}}>
        <CustomText
          numberOfLines={1}
          fontWeight="700"
          color={colors[isDarkMode ?? 'dark'].text}
          fontSize={fontSz(13)}
          text={`${
            like ? `Liked by you and ${likes} others` : `${likes} likes`
          }`}
        />
        <CustomPressable
          onPress={() => {
            setShowAll(!showAll);
          }}
          style={{
            paddingTop: hp(5),
          }}>
          <Text
            numberOfLines={showAll ? 0 : 1}
            style={{
              fontWeight: '700',
              color: colors[isDarkMode ?? 'dark'].text,
              fontSize: fontSz(14),
            }}>
            {postTitle ?? ''}{' '}
            <CustomText
              numberOfLines={1}
              fontWeight="400"
              color={colors[isDarkMode ?? 'dark'].text}
              fontSize={fontSz(14)}
              text={`${text ?? ''}`}
            />
          </Text>
        </CustomPressable>

        <CustomPressable>
          <CustomText
            style={{opacity: 0.4, paddingVertical: fontSz(7.5)}}
            numberOfLines={1}
            fontWeight="400"
            color={colors[isDarkMode ?? 'dark'].text}
            fontSize={fontSz(14)}
            text={`View all comments`}
          />
        </CustomPressable>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FastImage
              style={{
                width: fontSz(25),
                height: fontSz(25),
                borderRadius: fontSz(25),
                backgroundColor: 'orange',
                marginRight: fontSz(10),
              }}
              source={{
                uri: postPersonImage,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <TextInput placeholder="Add a comment " style={{opacity: 0.5}} />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Entypo
              name="emoji-happy"
              style={{fontSize: 15, color: 'lightgreen', marginRight: 10}}
            />
            <Entypo
              name="emoji-neutral"
              style={{fontSize: 15, color: 'pink', marginRight: 10}}
            />
            <Entypo name="emoji-sad" style={{fontSize: 15, color: 'red'}} />
          </View>
        </View>
      </View>
    </View>
  );
};

const Posts = () => {
  const listRef = useRef<FlatList>(null);
  const getData = () => {
    return [...data, ...data, ...data, ...data, ...data];
  };

  return (
    <FlatList
      ref={listRef}
      showsVerticalScrollIndicator={false}
      data={getData()}
      initialNumToRender={7}
      ListHeaderComponent={<Stories />}
      renderItem={({item, index}) => {
        return (
          <Post
            key={index}
            postTitle={item?.user?.username}
            text={item?.caption?.text}
            postImage={`${item?.link}media/?size=l`}
            postPersonImage={`${item?.link}media/?size=m`}
            isLiked={item?.user_has_liked}
            likes={item?.likes?.count}
          />
        );
      }}
      keyExtractor={(item, index) => `${index}`}
    />
  );
};

export default Posts;

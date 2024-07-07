import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  moderateScale,
  scale,
  textScale,
  verticalScale,
} from '../../styles/responsiveStyles';
import {fontNames} from '../../styles/typography';
import TextComp from '../common/TextComp';
import MenuSvg from '../../assets/SVG/MenuSvg';
import Heart_before from '../../assets/SVG/Heart_before';
import BookMark_Before from '../../assets/SVG/BookMark_Before';
import ShareSvg from '../../assets/SVG/ShareSvg';
import navigationString from '../../navigation/navigationString';
import {useNavigation} from '@react-navigation/native';
import CommentSvg from '../../assets/SVG/CommentSvg';

const ForYouColums = ({item}) => {
  const navigation = useNavigation();
  const [expandedPosts, setExpandedPosts] = useState({});
  const formatTimestamp = timestamp => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    if (hours === hours) {
      return `${hours}h`;
    } else {
      require`${minutes}m`;
    }
  };
  const toggleExpand = postId => {
    setExpandedPosts(prevState => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => {
        item.post &&
          navigation.navigate(navigationString.Comments_List_Screen, {item});
      }}>
      <View>
        <Image
          source={{
            uri: item?.user?.profilePhoto,
          }}
          style={{
            width: scale(40),
            height: scale(40),
            borderRadius: scale(40) / 2,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View
        style={{
          marginLeft: moderateScale(10),
          overflow: 'hidden',
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextComp text={item?.user?.name} style={styles.nameTextStyle} />
            <TextComp
              text={item?.user?.username}
              style={styles.userNameTextStyle}
            />
            {item?.post?.timestamp ? (
              <TextComp
                text={formatTimestamp(item?.post?.timestamp)}
                style={styles.postTimeStampStyle}
              />
            ) : (
              <TextComp
                text={formatTimestamp(item?.timestamp)}
                style={styles.postTimeStampStyle}
              />
            )}
          </View>
          <View>
            <Text>{<MenuSvg />}</Text>
          </View>
        </View>
        <View style={{}}>
          {item?.post?.content ? (
            <TextComp
              style={styles.contentTextStyle}
              text={
                expandedPosts[item?.post?.id]
                  ? item?.post?.content
                  : `${item?.post?.content?.substring(0, 100)}...${'  '}`
              }>
              <Text
                style={styles.showMore}
                onPress={() => toggleExpand(item.post.id)}>
                {expandedPosts[item?.post?.id] ? 'Show Less' : 'Show More'}
              </Text>
            </TextComp>
          ) : (
            <TextComp
              style={styles.contentTextStyle}
              text={item?.comment}></TextComp>
          )}
        </View>
        {item?.post?.media ? (
          <Image
            source={{uri: item?.post?.media}}
            style={{
              height: verticalScale(200),
              resizeMode: 'cover',
              borderRadius: moderateScale(12),
              margin: moderateScale(6),
            }}
          />
        ) : item?.user?.media ? (
          <Image
            source={{uri: item?.user?.media}}
            style={{
              height: verticalScale(200),
              resizeMode: 'cover',
              borderRadius: moderateScale(12),
              margin: moderateScale(6),
            }}
          />
        ) : null}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: moderateScale(14),
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationString.Comment_Screen)}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{<CommentSvg />}</Text>
            <Text style={{paddingLeft: moderateScale(8)}}>
              {item?.post?.comments?.length}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{<Heart_before />}</Text>
            <Text style={{paddingLeft: moderateScale(8)}}>
              {item?.post?.likes}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{<BookMark_Before />}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{<ShareSvg />}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ForYouColums;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(12),
    borderBottomWidth: 0.2,
    borderColor: '#262626',
    paddingVertical: moderateScale(10),
  },
  nameTextStyle: {
    color: '#fff',
    fontSize: textScale(14),
    fontFamily: fontNames.FONT_FAMILY_HEAVY,
  },
  userNameTextStyle: {
    color: '#fff',
    opacity: 0.5,
    fontFamily: fontNames.FONT_FAMILY_MEDIUM,
    fontSize: textScale(12),
    marginHorizontal: moderateScale(6),
  },
  postTimeStampStyle: {
    color: '#fff',
    opacity: 0.5,
    fontFamily: fontNames.FONT_FAMILY_MEDIUM,
    fontSize: textScale(12),
  },
  contentTextStyle: {
    color: '#fff',
    opacity: 0.9,
    fontFamily: fontNames.FONT_FAMILY_MEDIUM,
    fontSize: textScale(12),
    lineHeight: verticalScale(18),
  },
  showMore: {
    color: '#0c97fa',
    opacity: 0.9,
    fontFamily: fontNames.FONT_FAMILY_MEDIUM,
    fontSize: textScale(12),
  },
});

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import WapperContainer from '../../common/WapperContainer';
import {
  height,
  moderateScale,
  scale,
  textScale,
  verticalScale,
  width,
} from '../../../styles/responsiveStyles';
import {fontNames} from '../../../styles/typography';
import ShareSvg from '../../../assets/SVG/ShareSvg';
import BookMark_Before from '../../../assets/SVG/BookMark_Before';
import Heart_before from '../../../assets/SVG/Heart_before';
import TextComp from '../../common/TextComp';
import MenuSvg from '../../../assets/SVG/MenuSvg';
import {useNavigation, useRoute} from '@react-navigation/native';
import BottonComp from '../../common/BottonComp';
import ForYouComponent from '../../modules/ForYouComponent';
import CommentSvg from '../../../assets/SVG/CommentSvg';
const CommentsListScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;
  console.log('PostDta>>', item);
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
  return (
    <WapperContainer>
      <View style={styles.container}>
        <View
          style={{
            overflow: 'hidden',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{uri: item?.user?.profilePhoto}}
                style={{
                  width: scale(40),
                  height: scale(40),
                  borderRadius: scale(40) / 2,
                  resizeMode: 'contain',
                }}
              />
              <View
                style={{
                  marginLeft: moderateScale(10),
                  justifyContent: 'center',
                }}>
                <TextComp text={item.user.name} style={styles.nameTextStyle} />
                <TextComp
                  text={item.user.username}
                  style={styles.userNameTextStyle}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <BottonComp
                text="Subscribe"
                style={{
                  backgroundColor: '#fff',
                  paddingHorizontal: moderateScale(12),
                  paddingVertical: moderateScale(2),
                }}
                textStyle={{
                  color: '#000',
                  fontSize: textScale(12),
                  fontFamily: fontNames.FONT_FAMILY_BOLD,
                }}
              />
              <Text>{<MenuSvg />}</Text>
            </View>
          </View>
          <View style={{}}>
            <TextComp
              style={styles.contentTextStyle}
              text={item.post.content}
            />
          </View>
          {item.post.media && (
            <Image
              source={{uri: item.post.media}}
              style={styles.postImageStyle}
            />
          )}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: moderateScale(14),
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(navigationString.Comment_Screen)
              }>
              <Text>{<CommentSvg />}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>{<Heart_before />}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>{<BookMark_Before />}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>{<ShareSvg />}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ForYouComponent
        dummyData={item?.post?.comments}
        key={item => item?.post?.id?.toString()}
      />
    </WapperContainer>
  );
};

export default CommentsListScreen;

const styles = StyleSheet.create({
  container: {
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
    fontSize: textScale(16),
    lineHeight: verticalScale(30),
    marginTop: moderateScale(8),
  },
  showMore: {
    color: '#0c97fa',
    opacity: 0.9,
    fontFamily: fontNames.FONT_FAMILY_MEDIUM,
    fontSize: textScale(12),
  },
  postImageStyle: {
    height: verticalScale(height) / 3.5,
    width: scale(width) / 1.2,
    resizeMode: 'cover',
    borderRadius: moderateScale(16),
    margin: moderateScale(6),
    alignSelf: 'center',
  },
});

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WapperContainer from '../../../common/WapperContainer'
import { textScale } from '../../../../styles/responsiveStyles'

const NotificationScreen = () => {
  return (
    <WapperContainer>
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{color: '#fff', fontSize: textScale(20)}}>
      NotificationScreen
      </Text>
    </View>
  </WapperContainer>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({})
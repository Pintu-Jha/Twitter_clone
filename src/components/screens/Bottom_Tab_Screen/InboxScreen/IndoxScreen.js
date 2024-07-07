import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WapperContainer from '../../../common/WapperContainer'
import { textScale } from '../../../../styles/responsiveStyles'

const IndoxScreen = () => {
  return (
    <WapperContainer>
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{color: '#fff', fontSize: textScale(20)}}>
      IndoxScreen
      </Text>
    </View>
  </WapperContainer>
  )
}

export default IndoxScreen

const styles = StyleSheet.create({})
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
type ColorBtn = 'primary' | 'secondary' | 'ternary';
interface BtnProps {
  text: string;
  onPress?: () => void;
  color: ColorBtn;
}

export const Btn = ({text, color}: BtnProps) => {
  return (
    <View
      style={
        color === 'primary'
          ? {...styles.btn, backgroundColor: '#9B9B9B'}
          : color === 'secondary'
          ? {...styles.btn, backgroundColor: '#2D2D2D'}
          : {...styles.btn, backgroundColor: '#FF9427'}
      }>
      <Text style={styles.textBtn}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  textBtn: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '600',
  },
});

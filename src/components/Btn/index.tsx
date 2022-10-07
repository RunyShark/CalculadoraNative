/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
type ColorBtn = '#9B9B9B' | '#2D2D2D' | '#FF9427';
type TextColor = 'primary' | 'secondary';
interface BtnProps {
  text: string;
  onPress?: () => void;
  color?: ColorBtn;
  textColor?: TextColor;
}

export const Btn = ({text, color = '#2D2D2D', textColor}: BtnProps) => {
  return (
    <View
      style={{
        ...styles.btn,
        backgroundColor: color,
      }}>
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
    backgroundColor: '#2D2D2D',
    marginHorizontal: 10,
  },
  textBtn: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '600',
  },
});

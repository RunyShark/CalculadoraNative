/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type ColorBtn = '#9B9B9B' | '#2D2D2D' | '#FF9427';
type TextColor = 'white' | 'black';
interface BtnProps {
  text: string;
  onPress: (numberText: string) => void;
  color?: ColorBtn;
  textColor?: TextColor;
  ancho?: boolean;
}

export const Btn = ({
  text,
  color = '#2D2D2D',
  textColor = 'white',
  ancho,
  onPress,
}: BtnProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(text)}>
      <View
        style={{
          ...styles.btn,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.textBtn,
            color: textColor,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  textBtn: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '600',
  },
});

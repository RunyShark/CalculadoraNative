import React from 'react';
import {Text, View} from 'react-native';
import {styles, Btn} from '../../index';
export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.lilResult}>1,500.000</Text>
      <Text style={styles.result}>1,500.000</Text>

      <View style={styles.file}>
        <Btn text="C" color="primary" />
        <Btn text="+/-" color="primary" />
        <Btn text="%" color="secondary" />
        <Btn text="÷" color="ternary" />
      </View>
    </View>
  );
};

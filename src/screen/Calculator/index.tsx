import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../index';
export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.lilResult}>1,500.000</Text>
      <Text style={styles.result}>1,500.000</Text>

      <View style={styles.file}>
        <View style={styles.btn}>
          <Text style={styles.textBtn}>1</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.textBtn}>1</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.textBtn}>1</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.textBtn}>1</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.textBtn}>1</Text>
        </View>
      </View>
    </View>
  );
};

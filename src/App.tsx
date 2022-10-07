import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculatorScreen, styles} from './index';

export const App = () => {
  return (
    <SafeAreaView style={styles.backGround}>
      <StatusBar backgroundColor={'black'} />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

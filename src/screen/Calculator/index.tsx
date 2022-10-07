/* eslint-disable curly */
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles, Btn} from '../../index';

export const CalculatorScreen = () => {
  const [calculation, setCalculation] = useState<string>('0');

  const NumberOperation = (num: string) => {
    if (calculation === '0' && num === '0') return;

    if (calculation === '0') setCalculation(num);

    if (calculation !== '0') setCalculation(calculation + num);
  };

  const Operation = (num: string) => {
    setCalculation(calculation + num);
  };

  const CleanNumberOperation = () => setCalculation('0');

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.lilResult}>Result</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {calculation}
      </Text>

      <View style={styles.file}>
        <Btn
          text="C"
          color="#9B9B9B"
          textColor="black"
          onPress={() => CleanNumberOperation()}
        />
        <Btn
          text="+/-"
          color="#9B9B9B"
          textColor="black"
          onPress={() => Operation('+/-')}
        />
        <Btn
          text="%"
          color="#9B9B9B"
          textColor="black"
          onPress={() => Operation('%')}
        />
        <Btn text="÷" color="#FF9427" onPress={() => Operation('÷')} />
      </View>
      <View style={styles.file}>
        <Btn text="7" onPress={() => NumberOperation('7')} />
        <Btn text="8" onPress={() => NumberOperation('8')} />
        <Btn text="9" onPress={() => NumberOperation('9')} />
        <Btn text="x" color="#FF9427" onPress={() => Operation('x')} />
      </View>
      <View style={styles.file}>
        <Btn text="4" onPress={() => NumberOperation('4')} />
        <Btn text="5" onPress={() => NumberOperation('5')} />
        <Btn text="6" onPress={() => NumberOperation('6')} />
        <Btn text="-" color="#FF9427" onPress={() => Operation('-')} />
      </View>
      <View style={styles.file}>
        <Btn text="1" onPress={() => NumberOperation('1')} />
        <Btn text="2" onPress={() => NumberOperation('2')} />
        <Btn text="3" onPress={() => NumberOperation('3')} />
        <Btn text="+" color="#FF9427" onPress={() => Operation('+')} />
      </View>
      <View style={styles.file}>
        <Btn text="0" ancho onPress={() => NumberOperation('0')} />
        <Btn text="." onPress={() => NumberOperation('.')} />
        <Btn text="=" color="#FF9427" onPress={() => Operation('=')} />
      </View>
    </View>
  );
};

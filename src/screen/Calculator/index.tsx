/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable curly */
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles, Btn} from '../../index';

export const CalculatorScreen = () => {
  const [calculation, setCalculation] = useState<string>('0');

  const NumberOperation = (num: string) => {
    if (calculation.includes('.') && num === '.') return;
    if (calculation.startsWith('0') || calculation.startsWith('-0')) {
      if (num === '.') {
        setCalculation(calculation + num);
      } else if (num === '0' && calculation.includes('.')) {
        setCalculation(calculation + num);
      } else if (num !== '0' && !calculation.includes('.')) {
        setCalculation(num);
      } else if (num === '0' && !calculation.includes('.')) {
        setCalculation(calculation);
      } else {
        setCalculation(calculation + num);
      }
    } else {
      setCalculation(calculation + num);
    }
  };

  const Operation = (term: string) => {
    if (calculation.includes('-')) {
      setCalculation(calculation.replace('-', ''));
    } else {
      setCalculation('-' + calculation);
    }
  };

  const OperationDel = () => {
    let negative = '';
    let numberTm = calculation;
    if (calculation.includes('-')) {
      negative = '-';
      numberTm = numberTm.substring(1);
    }
    if (numberTm.length > 1) {
      setCalculation(negative + numberTm.slice(0, -1));
    } else {
      setCalculation('0');
    }
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
          text="del"
          color="#9B9B9B"
          textColor="black"
          onPress={() => OperationDel()}
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

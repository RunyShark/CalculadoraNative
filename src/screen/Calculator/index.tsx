/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable curly */
import React, {useState, useRef} from 'react';
import {Text, View} from 'react-native';
import {styles, Btn} from '../../index';

enum Operators {
  addOp,
  restartOp,
  multiplyOp,
  splitOp,
}

export const CalculatorScreen = () => {
  const [calculation, setCalculation] = useState<string>('0');
  const [numberPrevious, setNumberPrevious] = useState('');

  const lastOperation = useRef<Operators>();

  const numberOperation = (num: string) => {
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

  const operationC = () => {
    if (calculation.includes('-')) {
      setCalculation(calculation.replace('-', ''));
    } else {
      setCalculation('-' + calculation);
    }
  };

  const operationDel = () => {
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

  const CleanNumberOperation = () => {
    setCalculation('0');
    setNumberPrevious('0');
  };

  const changeNumber = () => {
    if (calculation.endsWith('.')) {
      setNumberPrevious(calculation.slice(0, -1));
    } else {
      setNumberPrevious(calculation);
    }
    setCalculation('0');
  };
  const addOperation = () => {
    changeNumber();
    lastOperation.current = Operators.addOp;
  };
  const restartOperation = () => {
    changeNumber();
    lastOperation.current = Operators.restartOp;
  };
  const multiplyOperation = () => {
    changeNumber();
    lastOperation.current = Operators.multiplyOp;
  };
  const splitOperation = () => {
    changeNumber();
    lastOperation.current = Operators.splitOp;
  };

  const calculations = () => {
    const number1 = +calculation;
    const number2 = +numberPrevious;
    switch (lastOperation.current) {
      case Operators.addOp:
        setCalculation(`${number1 + number2}`);
        break;
      case Operators.restartOp:
        setCalculation(`${number2 - number1}`);
        break;
      case Operators.multiplyOp:
        setCalculation(`${number1 * number2}`);
        break;

      case Operators.splitOp:
        setCalculation(`${number2 / number1}`);
        break;

      default:
        break;
    }
    setNumberPrevious('0');
  };

  return (
    <View style={styles.calculatorContainer}>
      {numberPrevious !== '0' && (
        <Text style={styles.lilResult}>{numberPrevious}</Text>
      )}

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
          onPress={() => operationC()}
        />
        <Btn
          text="del"
          color="#9B9B9B"
          textColor="black"
          onPress={() => operationDel()}
        />
        <Btn text="÷" color="#FF9427" onPress={() => splitOperation()} />
      </View>
      <View style={styles.file}>
        <Btn text="7" onPress={() => numberOperation('7')} />
        <Btn text="8" onPress={() => numberOperation('8')} />
        <Btn text="9" onPress={() => numberOperation('9')} />
        <Btn text="x" color="#FF9427" onPress={() => multiplyOperation()} />
      </View>
      <View style={styles.file}>
        <Btn text="4" onPress={() => numberOperation('4')} />
        <Btn text="5" onPress={() => numberOperation('5')} />
        <Btn text="6" onPress={() => numberOperation('6')} />
        <Btn text="-" color="#FF9427" onPress={() => restartOperation()} />
      </View>
      <View style={styles.file}>
        <Btn text="1" onPress={() => numberOperation('1')} />
        <Btn text="2" onPress={() => numberOperation('2')} />
        <Btn text="3" onPress={() => numberOperation('3')} />
        <Btn text="+" color="#FF9427" onPress={() => addOperation()} />
      </View>
      <View style={styles.file}>
        <Btn text="0" ancho onPress={() => numberOperation('0')} />
        <Btn text="." onPress={() => numberOperation('.')} />
        <Btn text="=" color="#FF9427" onPress={calculations} />
      </View>
    </View>
  );
};

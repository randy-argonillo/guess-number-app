import React, { useState, useRef} from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import Card from './Card';
import Button from './Button';
import NumericInput from './NumericInput';

export default function InputGuessNumber({ onConfirm }) {
  const handleReset = () => setInput('');
  const [input, setInput] = useState('');
  const inputRef = useRef();

  const handleConfirm = () => {
    const numberToGuess = parseInt(input);
    const isValid =
      !isNaN(numberToGuess) && numberToGuess > 0 && numberToGuess < 99;

    if (!isValid) {
      Alert.alert('Invalid number', 'Please enter a number from 1 - 99', [
        { text: 'OK', onPress: handleReset, style: 'destructive' }
      ]);

      inputRef.current.focus();
      return;
    }

    onConfirm(numberToGuess);
  };

  return (
    <Card style={styles.container}>
      <View>
        <Text>Enter a number</Text>
        <NumericInput
          style={styles.input}
          value={input}
          onChange={setInput}
          ref={inputRef}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="RESET"
          secondary={true}
          onPress={handleReset}
          disabled={input.length === 0}
        />
        <Button style={styles.button} title="CONFIRM" onPress={handleConfirm} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15
  },

  button: {
    width: 100,
    fontSize: 12
  },

  container: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    paddingVertical: 30
  },

  input: {
    marginVertical: 50,
    textAlign: 'center',
    fontSize: 18
  }
});

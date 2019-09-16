import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Button from '../components/Button';


export default function GuessNumberScreen({ numberToGuess, onGameOver }) {
  const initialGuess = generateNumber();
  const [guessedNumbers, setGuessedNumbers] = useState([initialGuess]);
  const [guessedNum, setGuessedNum] = useState(initialGuess);
  const [roundCount, setRoundCount] = useState(0);
  const numBoundaryRef = useRef({ min: 1, max: 100 });

  function generateNumber(min = 1, max = 99, excludeNumbers = []){
    const generatedNum = Math.floor(Math.random() * (max - min) + min);
    return excludeNumbers.includes(generatedNum)
      ? generateNumber(min, max, excludeNumbers)
      : generatedNum;
  }

  const isValidDirection = direction => {
    return (
      (direction === 'lower' && guessedNum > numberToGuess) ||
      (direction === 'higher' && guessedNum < numberToGuess)
    );
  };

  const guess = (direction = '') => () => {
    if (!isValidDirection(direction)) {
      return Alert.alert(
        'Wrong instruction',
        'You provide the computer with wrong instruction.',
        [{ text: 'Cancel', style: 'cancel' }]
      );
    }

    determineNewNumBoundary(direction);
    generateAndSaveNewNumber();
  };

  const determineNewNumBoundary = direction => {
    numBoundaryRef.current =
      direction === 'lower'
        ? { min: numBoundaryRef.current.min, max: guessedNum }
        : { min: guessedNum, max: numBoundaryRef.current.max };
  };

  const generateAndSaveNewNumber = () => {
    const number = generateNumber(
      numBoundaryRef.current.min,
      numBoundaryRef.current.max,
      guessedNumbers
    );

    setGuessedNumbers(prev => [...prev, number]);
    setRoundCount((prevRoundCount) => prevRoundCount + 1);
    setGuessedNum(number);
  };

  const determineGameOver = () => {
    return guessedNum === numberToGuess && onGameOver(roundCount);
  }

  useEffect(() => {
    determineGameOver();
  });

  return (
    <View style={styles.container}>
      <Card>
        <Text>Computer's Guess</Text>
        <NumberContainer>{guessedNum}</NumberContainer>
        <View style={styles.buttonContainer}>
          <Button title="LOWER" light onPress={guess('lower')} />
          <Button title="HIGHER" light onPress={guess('higher')} />
        </View>
      </Card>
    </View>
  );
}

GuessNumberScreen.defaultProps = {
  onGameOver: () => {}
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15
  }
});

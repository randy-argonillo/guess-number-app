import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import InputGuessNumber from '../components/InputGuessNumber';


export default function StartGameScreen({ onStart }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Start a New Game!</Text>
        <InputGuessNumber onConfirm={onStart} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'open-sans-bold'
  }
});

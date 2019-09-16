import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Fonts from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GuessNumberScreen from './screens/GuessNumberScreen';


export default function App() {
  const [numberToGuess, setNumberToGuess] = useState(null);
  const [fontLoaded, setFontLoaded] = useState(false);
  

  const loadFonts = async () => {
    console.log('will load fonts');
    await Fonts.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf')
    });
  }
    

  useEffect(() => {
    loadFonts();
  },[])

  if (!fontLoaded) {
    return <AppLoading startAsync={loadFonts} onFinish={() => setFontLoaded(true)} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number Game" />
      {numberToGuess ? (
        <GuessNumberScreen
          numberToGuess={numberToGuess}
          onGameOver={roundCount =>
            Alert.alert(
              'Gave over',
              `The computer guessed the number within ${roundCount} rounds.`,
              [{ text: 'OK' }]
            )
          }
        />
      ) : (
        <StartGameScreen onStart={setNumberToGuess} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

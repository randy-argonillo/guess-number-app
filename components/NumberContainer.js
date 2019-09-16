import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../constants/colors';

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.accent,
    marginVertical: 30
  },

  text: {
    fontSize: 18,
    fontWeight: '600'
  }
});
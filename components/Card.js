import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.3,
    borderRadius: 2,
    padding: 15,
    marginVertical: 20,

    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    paddingVertical: 30
  }
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 90,
    backgroundColor: '#f7287b',
    paddingTop: 30
  },

  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  }
});

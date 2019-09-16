import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

import colors from '../constants/colors';

export default function AppButton({
  style,
  primary,
  secondary,
  title,
  light,
  ...props
}) {
  const getColor = () => {
    if (primary) return colors.primary;
    if (secondary) return colors.accent;
    if (light) return colors.light;
    return colors.primary;
  };

  return (
    <TouchableOpacity
      {...props}
      style={[styles.default, style, { backgroundColor: getColor() }]}
    >
      <Text style={[styles.text, { color: light ? 'black' : 'white' }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

AppButton.defaultProps = {
  style: StyleSheet.create({})
};

const styles = StyleSheet.create({
  default: {
    color: 'white',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize: 15
  }
});

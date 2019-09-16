import React, { useState, useImperativeHandle, forwardRef, useRef } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import useFocusableInput from '../hooks/useFocusableInput';

function NumericInput({ style, value, onChange, ...props }, ref) {
  const textInputRef = useRef();

  useFocusableInput(ref, textInputRef);

  const isNumber = val => /^\d+$/.test(val);
  const handleChangeText = val => {
    if (val !== '' && !isNumber(val)) return;
    onChange(val);
  };

  return (
    <TextInput
      value={value}
      onChangeText={handleChangeText}
      style={[styles.input, style]}
      multiline={false}
      autoFocus
      keyboardType="number-pad"
      maxLength={2}
      blurOnSubmit
      autoCorrect={false}
      autoCapitalize="none"
      {...props}
      ref={textInputRef}
    />
  );
}

const EnhanceNumericInput = forwardRef(NumericInput);

EnhanceNumericInput.defaultProps = {
  style: StyleSheet.create({})
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  }
});

export default EnhanceNumericInput;
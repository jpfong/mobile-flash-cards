import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import {purple} from '../utils/colors'

export default function TextButton({children, onPress, style = {}, disabled}) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text style={[styles.reset, style, disabled ? styles.disabled: null]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: purple,
  },
  disabled: {
    opacity: 0.5
  }
})
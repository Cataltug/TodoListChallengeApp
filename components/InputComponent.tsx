import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

const InputComponent = ({placeholder, value, onChangeText}: Props) => {
  return (
    <View>
      <TextInput value={value} 
      onChangeText={onChangeText} 
      placeholder={placeholder} 
      style ={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 4,
        borderRadius: 15,
        paddingVertical: 4,
        paddingHorizontal: 8,
        fontSize: 42,
    }
})

export default InputComponent;
import { View, TextInput, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { isSmallDevice } from '@/constants/screenWidths';

type Props = {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

const InputComponent = ({placeholder, value, onChangeText}: Props) => {

  const {width} = useWindowDimensions();
  
  return (
    <View>
      <TextInput value={value} 
      onChangeText={onChangeText} 
      placeholder={placeholder} 
      style ={[styles.input, {fontSize: isSmallDevice(width) ? 24 : 42,
        borderWidth: isSmallDevice(width) ? 2 : 4
      }]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 15,
        paddingVertical: 4,
        paddingHorizontal: 8,
        fontSize: 42,
    }
})

export default InputComponent;
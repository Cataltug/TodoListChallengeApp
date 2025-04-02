import { StyleSheet, SwitchBase, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { isSmallDevice } from '@/constants/screenWidths';



type Props = {
  variant?: "primary" | "secondary" | "destructive" | "success";
  text?: string;
  onPress?: () => void;
};

const Button = ({text, onPress, variant ="primary"}: Props) => {

  let backgroundColor = "dodgerblue"
  const {width} = useWindowDimensions();


  switch (variant) {
    case "primary":
      backgroundColor = "dodgerblue"
      break;
    case "secondary":
      backgroundColor = "blueviolet"
      break;
      case "destructive":
        backgroundColor = "tomato"
      break;
      case "success":
        backgroundColor = "mediumseagreen"
      break;
  }

  return (
    <TouchableOpacity onPress={onPress} 
    style = {[styles.container, {backgroundColor: backgroundColor, padding: isSmallDevice(width) ? 24 : 36}]}>
        <Text style = {[styles.text, {fontSize: isSmallDevice(width) ? 24 : 42}]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
      backgroundColor: "dodgerblue",

      paddingVertical: 4,
      alignSelf: "flex-start",
      borderRadius: 15,
    },
    text: {
      color: "white",
    }
})
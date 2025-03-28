import { StyleSheet, SwitchBase, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



type Props = {
  variant?: "primary" | "secondary" | "destructive" | "success";
  text?: string;
  onPress?: () => void;
}

const Button = ({text, onPress, variant ="primary"}: Props) => {

  let backgroundColor = "dodgerblue"

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
    style = {[styles.container, {backgroundColor: backgroundColor}]}>
        <Text style = {styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
      backgroundColor: "dodgerblue",
      paddingHorizontal: 32,
      paddingVertical: 4,
      alignSelf: "flex-start",
      borderRadius: 15,
    },
    text: {
      fontSize: 42,
      color: "white",
    }
})
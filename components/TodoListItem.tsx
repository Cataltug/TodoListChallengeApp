import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button';

type Props = {
    todo: string;
    onDelete: (todo: string) => void;
}

const TodoListItem = ({todo, onDelete}:Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{todo}</Text>
      <Button onPress={() => onDelete(todo)} text="Delete" variant={"destructive"} />
    </View>
  )
}

export default TodoListItem

const styles = StyleSheet.create({
    item: {
        fontSize: 42,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: 16,
        borderRadius: 15,
        borderColor: "#dedede",
        borderWidth: 1,
    }
})
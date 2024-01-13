import { View, Text } from "react-native";
import { styles } from "./styles";
import { stylesCheckbox } from '../../components/Checkbox/styles'
import React, { useState } from "react";
import { Trash } from "phosphor-react-native";
import Checkbox from 'expo-checkbox';
import CheckboxComp from "../Checkbox";
import TrashComp from "../Trash";

interface TaskProps {
  id: string,
  content: string,
  isDone: boolean,
  onMarkAsDone: (id: string) => void,
  onDeleteTask: (id: string) => void
}

export default function Task({ id, content, isDone, onMarkAsDone, onDeleteTask }: TaskProps) {

  const [isChecked, setChecked] = useState(false);

  function handleSetDone() {
    onMarkAsDone(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <>
      <View style={styles.taskBody} id={'view_' + id}>
        <CheckboxComp
          key={id}
          style={isDone ? stylesCheckbox.checkboxChecked : stylesCheckbox.checkbox}
          color={isDone ? '#5E60CE' : '#4EA8DE'}
          value={isDone}
        />
        <Text 
          style={ isDone ? styles.taskDone : styles.taskNotDone }
          onPress={handleSetDone}>{content}</Text>
        <TrashComp onPress={handleDeleteTask}/>
      </View>
    </>
  )
}
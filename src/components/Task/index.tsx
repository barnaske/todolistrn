import { View, Text } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { Trash } from "phosphor-react-native";
import Checkbox from 'expo-checkbox';
import CheckboxComp from "../Checkbox";

interface TaskProps {
    id: string,
    content: string,
    isDone: boolean,
    onMarkAsDone: (id: string) => void,
    onDeleteTask: (id: string) => void
}

export default function Task({ id, content, isDone, onMarkAsDone, onDeleteTask}: TaskProps) {

  const [isChecked, setChecked] = useState(false);

    return (
        <>
            <View style={styles.taskBody} id={'view_' + id}>
              <CheckboxComp 
                value={isDone}
              />
              <Text>{content}</Text>
              <Trash size={32}/>
            </View>
        </>
    )
}
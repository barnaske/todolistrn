import React from "react";
import { TouchableOpacity, View } from 'react-native'
import { Trash } from "phosphor-react-native";
import { styles } from "./styles";

export default function TrashComp({...props}) {
  return (
    <>
        <TouchableOpacity 
          style={styles.container}
          {...props}
          >
          <Trash size={20} color="#808080"/>
        </TouchableOpacity>
    </>
  )
}
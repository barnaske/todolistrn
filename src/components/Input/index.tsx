import React, { useState } from "react"
import { TextInput } from "react-native"
import { styles } from "./styles"

export default function Input() {
    const [isFocused, setFocused] = useState(false)

    return(
        <TextInput 
            style={[styles.input, { 
                color: isFocused ? '#f2f2f2' : '#808080',
                borderColor: isFocused? '#5E60CE' : '#0D0D0D'
            }]}
            placeholder="Adicione uma nova tarefa"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
        />
    )
}
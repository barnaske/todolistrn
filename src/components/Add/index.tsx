import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { PlusCircle } from "phosphor-react-native";

export function Add() {
    return(
        <TouchableOpacity style={styles.button}>
            <PlusCircle size={16} color="#F2F2F2" />
        </TouchableOpacity>
    )
}
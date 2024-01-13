import { StyleSheet } from "react-native"

export const stylesCheckbox = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    padding: 3.273,
    justifyContent: 'center',
    alignItems: 'center',    
  },
  checkbox: {
    width: 17.5,
    height: 17.5,    
    borderColor: '#4EA8DE',
    borderRadius: 999,
  },
  checkboxChecked: {
    width: 17.5,
    height: 17.5,    
    borderColor: '#5E60CE',
    borderRadius: 999,
    backgroundColor: '#5E60CE',
  }
})
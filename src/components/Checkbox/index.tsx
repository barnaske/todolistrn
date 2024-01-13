import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { stylesCheckbox } from './styles'
import { TouchableOpacity, View } from 'react-native';

export default function CheckboxComp({...props} ) {

  const [isChecked, setChecked] = useState(false);

  return (
      <Checkbox
        disabled={false}
        {...props}
      />
  )
}
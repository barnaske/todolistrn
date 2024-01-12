import Checkbox from 'expo-checkbox';
import { useState } from 'react';

interface CheckboxProps {
  value: boolean,
}

export default function CheckboxComp({ value }: CheckboxProps) {

    const [isChecked, setChecked] = useState(false);

    return(
            <Checkbox
              disabled={false}
              onValueChange={(newValue) => setChecked(newValue)}
              value={value}
            />
    )
}
import { useState } from 'react';
import { HexColorPicker } from "react-colorful";

import { Props } from './types';

const ColorPicker = ({ values, setValues } : Props) => {
  const [color, setColor] = useState<string>("#b32aa9");

  const handleOnClick = () => {
    let upperCaseColor = color.toUpperCase();
    const isUsedColor = values.map(value => value.color).includes(upperCaseColor);

    !isUsedColor && setValues([
      ...values,
      {
        id: values.length + 1,
        item: upperCaseColor,
        value: 0,
        color: upperCaseColor,
        isDisabled: false,
      },
    ]);
  }

  return (
    <div className="Color-picker">
      <HexColorPicker color={color} onChange={setColor} />
      <button onClick={handleOnClick}>Add Slider</button>
    </div>
  )
}

export default ColorPicker

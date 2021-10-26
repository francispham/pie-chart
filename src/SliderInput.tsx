import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { SliderProps } from './types';

const SliderInput = ({ value, index, values, setValues }: SliderProps) => {
  const handleOnChange = (value: number) => {
    const newValues = [...values];
    
    let randomIndex: number = 0;
    function findRandomIndex(i: number) {
      let r = Math.round(Math.random() * (newValues.length - 1));
      (i !== r && newValues[r].isDisabled === false) ? randomIndex = r : findRandomIndex(i);
    }
    findRandomIndex(index);

    const sumRestValue = newValues.filter(item => item.id !== newValues[randomIndex].id && item.id !== newValues[index].id).reduce((acc, item) => acc + item.value, 0);

    newValues[index].value = 100 - value >= sumRestValue ? value : newValues[index].value;
    newValues[randomIndex].value = 100 - newValues[index].value - sumRestValue;
    setValues(newValues);
  };
  
  return (
    <div 
      onContextMenu={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        const newValues = [ ...values ];
        newValues[index] = { ...value, isDisabled: !value?.isDisabled };
        setValues(newValues);
      }}
    >
      <Slider min={0} max={100} 
        value={value?.value}
        disabled={value?.isDisabled}
        defaultValue={value?.value}
        trackStyle={{ backgroundColor: value?.color }}
        handleStyle={{ backgroundColor: value?.color, border: 'none' }}
        onChange={value => handleOnChange(value)}
      />
    </div>
  );
};

export default SliderInput;
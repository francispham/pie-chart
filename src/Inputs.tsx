import { memo } from 'react';
import SliderInput from './SliderInput';
import 'rc-slider/assets/index.css';

import { Props } from './types';

const Inputs = ({ values, setValues } : Props) => {
  return (
    <div className="inputs">
      {values.map((value, index) => (
        <SliderInput key={value.id} value={value} index={index} values={values} setValues={setValues} />
      ))}
    </div>
  );
}

export default memo(Inputs)

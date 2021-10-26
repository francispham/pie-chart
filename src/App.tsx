import { useState } from 'react';

import ColorPicker from './ColorPicker'
import Chart from './Chart'
import Inputs from './Inputs'
import { Item } from './types';

import logo from './logo.svg'
import './App.css';

const initialValues: Array<Item> = [
  {
    id: 1,
    item: 'Orange',
    value: 30,
    color: '#FF7F27',
    isDisabled: false,
  },
  {
    id: 2,
    item: 'Red',
    value: 40,
    color: '#ED1C24',
    isDisabled: false,
  },
  {
    id: 3,
    item: 'Blue',
    value: 30,
    color: '#3F48CC',
    isDisabled: false,
  },
];

function App() {
  const [values, setValues] = useState<Array<Item> | []>(initialValues);

  const data = {
    labels: values.map(value => value.item),
    datasets: [
      {
        data: values.map(value => value.value),
        backgroundColor: values.map(value => value.color),
      },
    ],
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Pie Chart</p>
      </header>
      <main>
        <Chart data={data} />
        <div>
          <Inputs values={values} setValues={setValues} />
          <ColorPicker values={values} setValues={setValues} />
        </div>
      </main>
    </div>
  )
}

export default App

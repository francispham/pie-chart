export interface Item {
  id: number;
  item: string;
  value: number;
  color: string;
  isDisabled: boolean;
};

export interface Props {
  values: Array<Item>,
  setValues: (values: Array<Item>) => void,
};

export interface SliderProps {
  values: Array<Item>,
  index: number,
  value: Item,
  setValues: (values: Array<Item>) => void,
};

export interface Data {
  labels: string[];
  datasets: {
      data: number[];
      backgroundColor: string[];
  }[];
};
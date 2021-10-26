import { Pie } from 'react-chartjs-2';

import { Data } from './types';

const PieChart = ({ data } : { data: Data }) => (
  <div>
    <Pie data={data} />
  </div>
);

export default PieChart;
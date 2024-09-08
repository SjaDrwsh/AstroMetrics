import React from 'react';
import { observer } from 'mobx-react-lite';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { closeApproachStore } from '../../stores/closeApproachStore';
import { ChartProps } from '../astroMetricsDashboard';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CloseApproachDistanceProportionsChart = observer(({ height, width}: ChartProps) => {
  const store = closeApproachStore;

  if (store.loading) return <CircularProgress />;
  if (store.error) return <Typography color="error">{store.error}</Typography>;

  const data = store.data.reduce((acc, item) => {
    const distRange = item.dist < 0.01 ? 'Very Close' : 'Close';
    const existing = acc.find(d => d.name === distRange);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: distRange, value: 1 });
    }
    return acc;
  }, [] as { name: string, value: number }[]);

  return (
    <Card>
      <CardContent>
        <PieChart width={width} height={height}>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={150} fill="#8884d8" label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </CardContent>
    </Card>
  );
});

export default CloseApproachDistanceProportionsChart;

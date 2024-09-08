import React from 'react';
import { observer } from 'mobx-react-lite';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { closeApproachStore } from '../../stores/closeApproachStore';
import { ChartProps } from '../astroMetricsDashboard';

const CloseApproachDistanceHistogramChart = observer(({ height, width }: ChartProps) => {
  const store = closeApproachStore;

  if (store.loading) return <CircularProgress />;
  if (store.error) return <Typography color="error">{store.error}</Typography>;

  const bins = [0, 0.01, 0.02, 0.05, 0.1, 0.5, 1.0];
  const data = bins.map(bin => ({
    name: `${bin} - ${bin * 2}`,
    count: store.data.filter(item => item.dist >= bin && item.dist < bin * 2).length,
  }));

  return (
    <Card>
      <CardContent>
        <BarChart width={width} height={height} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </CardContent>
    </Card>
  );
});

export default CloseApproachDistanceHistogramChart;

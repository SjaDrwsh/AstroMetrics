import React from 'react';
import { observer } from 'mobx-react-lite';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { closeApproachStore } from '../../stores/closeApproachStore';
import { ChartProps } from '../astroMetricsDashboard';

const CloseApproachCumulativeTrendChart = observer(({ height, width}: ChartProps) => {
  const store = closeApproachStore;

  if (store.loading) return <CircularProgress />;
  if (store.error) return <Typography color="error">{store.error}</Typography>;

  const data = store.data.map(item => ({
    date: item.date,
    dist: item.dist,
  }));

  return (
    <Card>
      <CardContent>
        <AreaChart width={width} height={height} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="dist" stroke="#8884d8" fillOpacity={0.3} fill="#8884d8" />
        </AreaChart>
      </CardContent>
    </Card>
  );
});

export default CloseApproachCumulativeTrendChart;

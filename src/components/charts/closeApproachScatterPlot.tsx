import React from 'react';
import { observer } from 'mobx-react-lite';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { closeApproachStore } from '../../stores/closeApproachStore';
import { ChartProps } from '../astroMetricsDashboard';

const CloseApproachScatterPlot = observer(({ height, width}: ChartProps) => {
  const store = closeApproachStore;

  if (store.loading) return <CircularProgress />;
  if (store.error) return <Typography color="error">{store.error}</Typography>;

  const data = closeApproachStore.data.map(item => ({
    date: new Date(item.date).getTime(),
    distance: item.dist,
  }));

  return (
    <Card>
      <CardContent>
        <ScatterChart width={width} height={height}>
          <CartesianGrid />
          <XAxis
            dataKey="date"
            name="Date"
            tickFormatter={tick => new Date(tick).toLocaleDateString()}
            type="number"
            domain={['auto', 'auto']}
          />
          <YAxis dataKey="distance" name="Distance (LD)" />
          <Tooltip labelFormatter={label => new Date(label).toLocaleDateString()} />
          <Scatter name="Close Approaches" data={data} fill="#8884d8" />
        </ScatterChart>
      </CardContent>
    </Card>
  );
});

export default CloseApproachScatterPlot;

import React from 'react';
import { observer } from 'mobx-react-lite';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ZAxis } from 'recharts';
import { closeApproachStore } from '../../stores/closeApproachStore';
import { ChartProps } from '../astroMetricsDashboard';

const CloseApproachBubbleAnalysisChart = observer(({height, width}: ChartProps) => {
  const store = closeApproachStore;

  if (store.loading) return <CircularProgress />;
  if (store.error) return <Typography color="error">{store.error}</Typography>;

  const data = store.data.map(item => ({
    dist: item.dist,
    size: item.size,
  }));

  return (
    <Card>
      <CardContent>
        <ScatterChart width={width} height={height}>
          <CartesianGrid />
          <XAxis type="number" dataKey="dist" name="Distance" />
          <YAxis type="number" dataKey="size" name="Size" />
          <ZAxis type="number" dataKey="size" range={[60, 400]} />
          <Tooltip />
          <Scatter name="Close Approaches" data={data} fill="#8884d8" shape="circle" />
        </ScatterChart>
      </CardContent>
    </Card>
  );
});

export default CloseApproachBubbleAnalysisChart;

import React from 'react';
import { observer } from 'mobx-react-lite';
import { Grid, Typography, Container, Paper } from '@mui/material';
import CloseApproachTrendChart from './charts/closeApproachTrendChart';
import CloseApproachBubbleAnalysisChart from './charts/closeApproachBubbleAnalysisChart';
import CloseApproachDistanceProportionsChart from './charts/closeApproachDistanceProportionsChart';
import CloseApproachCumulativeTrendChart from './charts/closeApproachCumulativeTrendChart';
import CloseApproachDistanceHistogramChart from './charts/closeApproachDistanceHistogramChart';

interface ChartWrapperProps { 
  title: string; 
  subTitle: string; 
  chartComponent: React.ReactNode;
}

export interface ChartProps {
  width?: number;
  height?: number;
}

const ChartWrapper = observer(({ title, subTitle, chartComponent }: ChartWrapperProps) => {
  return (
    <Grid item xs={6} padding={2}>
      <Paper sx={{p: 1}}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" paragraph>
          {subTitle}
        </Typography>
        {chartComponent}
      </Paper>
    </Grid>
  );
});

export const AstroMetricsDashboard = observer(() => {
  const chartWidth = 450;
  const chartHeight = 200;

  const chartData: ChartWrapperProps[] = [
    {
      title: 'Trend of Close Approaches Over Time',
      subTitle: 'This line chart shows the trend of close approaches over time. Each point represents a close approach event and helps visualize how the number of close approaches has varied over the years.',
      chartComponent: <CloseApproachTrendChart height={chartHeight} width={chartWidth} />
    },
    {
      title: 'Close Approaches Bubble Analysis',
      subTitle: 'This bubble chart represents the distances of close approaches, where the size of the bubbles corresponds to the size of the NEO. It helps in understanding the size and distance relationships of close approaches.',
      chartComponent: <CloseApproachBubbleAnalysisChart height={chartHeight} width={chartWidth} />
    },
    {
      title: 'Distance Proportions of Close Approaches',
      subTitle: 'This pie chart visualizes the proportion of different distance ranges for close approaches. It is useful to understand the distribution of close approaches within various distance intervals.',
      chartComponent: <CloseApproachDistanceProportionsChart height={300} width={450} />
    },
    {
      title: 'Cumulative Trend of Close Approaches',
      subTitle: 'This area chart shows the cumulative number of close approaches over time. It highlights the total trend of close approach events as they accumulate.',
      chartComponent: <CloseApproachCumulativeTrendChart height={chartHeight} width={chartWidth} />
    },
    {
      title: 'Histogram of Close Approaches Distances',
      subTitle: 'This histogram displays the distribution of distances for close approaches. It helps to understand how frequently different distance ranges occur.',
      chartComponent: <CloseApproachDistanceHistogramChart height={chartHeight} width={chartWidth} />
    }
  ];

  return (
    <Container style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Near Earth Objects Dashboard
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        An overview of close approach metrics for Near-Earth Objects (NEOs).
      </Typography>

      <Grid container spacing={2}>
        {chartData.map((chart, index) => (
          <ChartWrapper
            key={index}
            title={chart.title}
            subTitle={chart.subTitle}
            chartComponent={chart.chartComponent}
          />
        ))}
      </Grid>
    </Container>
  );
});

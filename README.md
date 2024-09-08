# Near Earth Objects (NEO) Dashboard

This project is a React-based dashboard for visualizing various metrics related to Near Earth Objects (NEOs). The dashboard includes different types of charts to analyze close approaches of NEOs over time, such as line charts, bubble charts, pie charts, area charts, and histograms.

## Features

- **Dark Theme Support**: A custom dark theme is applied throughout the application using Material-UI's theming system.
- **Error Boundary**: The dashboard is wrapped with an `ErrorBoundary` to handle and display errors gracefully.
- **Close Approach Trend Chart**: Displays the trend of close approaches over time.
- **Bubble Analysis Chart**: Shows the distance of close approaches, with bubble sizes representing the size of the Near-Earth Object.
- **Distance Proportions Chart**: A pie chart that visualizes the proportion of different distance ranges for close approaches.
- **Cumulative Trend Chart**: Displays the cumulative number of close approaches over time.
- **Distance Histogram Chart**: Shows the distribution of distances for close approaches using a histogram.


## Installation

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/SjaDrwsh/astroMetrics.git
cd neo-dashboard
````

2. Install the dependencies using Yarn:
```bash
yarn install
```

3. Run the development server:
```bash
yarn start
```
This will start the development server at http://localhost:3000.


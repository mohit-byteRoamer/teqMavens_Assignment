import Chart from 'react-apexcharts';

const DonutChart = () => {
  const chartOptions = {
    chart: {
      type: 'donut',
    },
    legend: {
      show: false, // 🔴 disables the side legend
    },
    colors: ['#f7a23b', '#fbc62f', '#0fca7a', '#8378ff', '#f75d5f'], // 🎨 custom colors
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false, // Also disable for smaller screens
          },
        },
      },
    ],
  };

  const chartSeries = [50, 50, 50, 50, 50];

  return (
    <div id="chart">
      <Chart options={chartOptions as any} series={chartSeries} type="donut" width="380" />
    </div>
  );
};

export default DonutChart;

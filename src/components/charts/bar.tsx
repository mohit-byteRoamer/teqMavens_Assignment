import Chart from 'react-apexcharts';

const RevenueChart = () => {
  const series = [
    {
      name: 'Revenue',
      data: [
        { x: 'Jan', y: 589.12 },
        { x: 'Feb', y: 840.2 },
        { x: 'Mar', y: 898.0 },
        { x: 'Apr', y: 203.0 },
        { x: 'May', y: 400.01 },
        { x: 'Jun', y: 920.12 },
        { x: 'Jul', y: 398.0 },
        { x: 'Aug', y: 882.0 },
        { x: 'Sep', y: 390.0 },
        { x: 'Oct', y: 910.0 },
        { x: 'Nov', y: 410.12 },
        { x: 'Dec', y: 840.2 },
      ],
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '45%',
        dataLabels: {
          position: 'top', // show labels on top
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return `$${val.toFixed(2)}`;
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },
    xaxis: {
      type: 'category',
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      position: 'bottom',
      labels: {
        style: {
          fontSize: '12px',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (val: any) => `$${val.toFixed(2)}`,
      },
    },
    fill: {
      colors: ['#4F46E5'], // violet/indigo color
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return `$${val.toFixed(2)}`;
        },
      },
    },
    grid: {
      show: true,
      strokeDashArray: 4,
    },
  };

  return <Chart options={options as any} series={series} type="bar" height={380} />;
};

export default RevenueChart;

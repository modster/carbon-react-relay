import React from 'react';
// import * as fc from 'd3fc';
// import * as d3 from 'd3';
import { BoxplotChart } from '@carbon/charts-react';
const state = {
  data: [
    {
      group: 'Q1',
      key: 'Monday',
      value: 65000,
    },
    {
      group: 'Q1',
      key: 'Tuesday',
      value: 29123,
    },
    {
      group: 'Q1',
      key: 'Wednesday',
      value: 35213,
    },
    {
      group: 'Q1',
      key: 'Thursday',
      value: 51213,
    },
    {
      group: 'Q1',
      key: 'Friday',
      value: 16932,
    },
    {
      group: 'Q2',
      key: 'Monday',
      value: 32432,
    },
    {
      group: 'Q2',
      key: 'Tuesday',
      value: 14312,
    },
    {
      group: 'Q2',
      key: 'Wednesday',
      value: 66456,
    },
    {
      group: 'Q2',
      key: 'Thursday',
      value: 21312,
    },
    {
      group: 'Q2',
      key: 'Friday',
      value: 37234,
    },
    {
      group: 'Q3',
      key: 'Monday',
      value: 5312,
    },
    {
      group: 'Q3',
      key: 'Tuesday',
      value: 23232,
    },
    {
      group: 'Q3',
      key: 'Wednesday',
      value: 34232,
    },
    {
      group: 'Q3',
      key: 'Thursday',
      value: 12312,
    },
    {
      group: 'Q3',
      key: 'Friday',
      value: 44234,
    },
    {
      group: 'Q4',
      key: 'Monday',
      value: 32423,
    },
    {
      group: 'Q4',
      key: 'Tuesday',
      value: 21313,
    },
    {
      group: 'Q4',
      key: 'Wednesday',
      value: 64353,
    },
    {
      group: 'Q4',
      key: 'Thursday',
      value: 24134,
    },
    {
      group: 'Q4',
      key: 'Friday',
      value: 45134,
    },
  ],
  options: {
    title: 'Vertical box plot',
    axes: {
      left: {
        mapsTo: 'value',
      },
      bottom: {
        scaleType: 'labels',
        mapsTo: 'group',
      },
    },
    height: '400px',
  },
};

// const stream = fc.randomFinancial().stream();
// const data = stream.take(110);

// const yExtent = fc.extentLinear().accessors([d => d.high, d => d.low]);

// const xExtent = fc.extentDate().accessors([d => d.date]);

// const gridlines = fc.annotationSvgGridline();
// const candlestick = fc.seriesSvgCandlestick();
// const multi = fc.seriesSvgMulti().series([gridlines, candlestick]);

// const chart = fc
//   .chartCartesian(d3.scaleTime(), d3.scaleLinear())
//   .yDomain(yExtent(data))
//   .xDomain(xExtent(data))
//   .svgPlotArea(multi);

// function renderChart() {
//   data.push(stream.next());
//   data.shift();

//   chart.yDomain(yExtent(data)).xDomain(xExtent(data));

//   d3.select('#chart')
//     .datum(data)
//     .call(chart);
// }

//console.log( renderChart() );
//setInterval(renderChart, 200);
//svg className="#chart">
///svg>
const D3FcPage = () => {
  return <BoxplotChart data={state.data} options={state.options} />;
};

export default D3FcPage;

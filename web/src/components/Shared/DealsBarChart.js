import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

class DealsBarChart extends Component {
  barchartBackgroundColors() {
    return [
      'rgba(255,0,0,1)',
      'rgba(153,51,0,1)',
      'rgba(153,102,0,1)',
      'rgba(153,153,0,1)',
      'rgba(153,204,0,1)',
      'rgba(153,255,0,1)'
    ];
  }

  barchartHoverColors() {
    return [
      'rgba(153,0,102,1)',
      'rgba(153,51,102,1)',
      'rgba(153,102,102,1)',
      'rgba(153,153,102,1)',
      'rgba(153,204,102,1)',
      'rgba(153,255,102,1)'
    ];
  }

  buildChartData() {
    const chart_data = this.props.chart_data;
    const labels = Object.keys(chart_data);
    const data = Object.values(chart_data);

    return {
      labels: labels,
      datasets: [
        {
          backgroundColor: this.barchartBackgroundColors(),
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          hoverBackgroundColor: this.barchartHoverColors(),
          hoverBorderColor: 'rgba(0,0,0,1)',
          data: data
        }
      ]
    }
  }

  render() {
    return(
      <Bar
        data={this.buildChartData()}
        options={{
          legend: { display: false }
        }}
      />
    )
  }

}

export default DealsBarChart

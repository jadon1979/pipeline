import React, { Component, Fragment } from 'react'
import ApiResources from '../../Shared/ApiResources'
import { Bar } from 'react-chartjs-2'

class Deals extends Component {

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

  buildChartData(response) {
    const chart_details = this.mapDealsResponse(response);

    return {
      labels: Object.keys(chart_details),
      datasets: [
        {
          backgroundColor: this.barchartBackgroundColors(),
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          hoverBackgroundColor: this.barchartHoverColors(),
          hoverBorderColor: 'rgba(0,0,0,1)',
          data: Object.values(chart_details)
        }
      ]
    }
  }

  mapDealsResponse(response) {
    if (!response || response.length === 0) return false;

    let deals = response.deals.reduce((value, row) => {
      const deal = row.deal;
      const dealStage = deal.deal_stage.deal_stage;
      const keyName = dealStage.name;
      const dealValue = Number(deal.value);
      let currentValue = Number(value[keyName]) || 0;

      currentValue += dealValue;
      value[keyName] = currentValue.toFixed(2);

      return value;
    }, {});

    return deals;
  }

  render() {
    return(
      <Fragment>
        <ApiResources
          path='/deals'
          render={data => {
            return (<div className="deals">
              <Bar
                data={this.buildChartData(data.collection)}
                options={{
                  legend: { display: false }
                }}
              />
            </div>
            )
          }}
        />
      </Fragment>
    )
  }
}

Deals.defaultProps = {
  queryParams: {
    sort: 'deals.deal_stage_id'
  }
}

export default Deals;

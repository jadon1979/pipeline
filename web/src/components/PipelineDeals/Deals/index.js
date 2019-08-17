import React, { Component, Fragment } from 'react'
import ApiResources from '../../Shared/ApiResources'
import DealsBarChart from '../../Shared/DealsBarChart'


class Deals extends Component {

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
              <DealsBarChart
                chart_data={this.mapDealsResponse(data.collection)}
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

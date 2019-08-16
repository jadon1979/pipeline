import React, { Fragment, Component } from 'react';
import './App.css';
import Deals from './components/PipelineDeals/Deals';
import Header from './components/Main/header';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { message: null }
  }

  handleMessage = (message) => {
    if (message === undefined || message.message === undefined) {
      return false;
    }
    console.log(message)
    this.setState({ message: message })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container-fluid App">
          <div className="row p-3">
            <div className="col">
              <Deals onMessage={this.handleMessage} />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

function App() {
  return <AppContainer />
}

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

export default App;

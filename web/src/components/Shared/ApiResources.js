import { Component } from 'react'
import queryString from 'query-string'

class ApiResources extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: [],
      loading: false
    }
  }

  buildQueryParams() {
    let params = queryString.parse(window.location.search);
    this.props.queryParams.map((k, v) => {
      return params[k] = params[k] || v;
    })
    return '?' + queryString.stringify(params);
  }

  componentDidMount() {
    const PIPELINE_API_URL = process.env.REACT_APP_PIPELINE_API_URL;

    this.setState({ loading: true });

    fetch(PIPELINE_API_URL + this.props.path + this.buildQueryParams())
    .then(response => {return response.json()})
    .then(response => {
      this.setState({
        collection: response,
        loading: false
      });
    })
    .catch(function(e) {
      throw new Error(e);
    })
  }

  render() {
    return this.props.render(this.state)
  }
}

ApiResources.defaultProps = {
  queryParams: [],
  path: '/'
}

export default ApiResources

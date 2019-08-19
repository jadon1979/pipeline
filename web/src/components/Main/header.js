import React, { Component, Fragment } from 'react'

class Header extends Component {
  render() {
    return (
        <Fragment>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <a className="navbar-brand" href="/">Pipeline Deals</a>
          </nav>
        </Fragment>
    )
  }
}

export default Header;

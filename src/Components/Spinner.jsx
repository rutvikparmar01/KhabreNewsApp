import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
        <div className="d-flex justify-content-center">


<div className="spinner-border d-flex justify-content-center my-3"  role="status">
<span className="sr-only d-flex justify-content-center my-3">Loading...</span>
</div>
        </div>
    )
  }
}

export default Spinner


    
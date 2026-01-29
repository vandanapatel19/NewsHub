import React, { Component } from 'react'
import Loader from './Loader.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img className='my-3' src={Loader} alt="Loader"/>
      </div>
    )
  }
}

export default Spinner

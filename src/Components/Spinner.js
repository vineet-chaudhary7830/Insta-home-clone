import React, { Component } from 'react'
import Loading from './Loading.gif'

export default class Spinner extends Component {
   
  render() {
    let style={
        height:"40px",
        width:"40px",
    }
    return (
      <div className='text-center'>
        <img src={Loading} alt='' style={style}/>
      </div>
    )
  }
}

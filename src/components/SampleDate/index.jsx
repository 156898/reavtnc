  
import React, { Component } from 'react'
import './style.less'
export default class index extends Component {
  render() {
    const { data } = this.props
    return (
      <div className="sample">
        <h1>{data.title}</h1>
        <p>{data.tags}</p>
      </div>
    )
  }
}
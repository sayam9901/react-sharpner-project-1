import "./chat.css"
import React from 'react'
import ChartBar from "./ChartBar"

const Charts = (props) => {
    const dataPointsValue = props.dataPoints.map((datapoint)=>datapoint.value)
    const max = Math.max(...dataPointsValue)
  return (
    <div className="chart">{
        props.dataPoints.map((dataPoint)=>(<ChartBar
        value = {dataPoint.value}
        key = {dataPoint.label}
        maxValue = {max}
        label = {dataPoint.label}
        />))
    }</div>
  )
}

export default Charts
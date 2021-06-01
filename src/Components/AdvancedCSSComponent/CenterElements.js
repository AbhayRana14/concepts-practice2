import React from 'react'
import UseStateHook from '../HooksComponent/useStateHook'
import PieChart from '../PieChartComponent/PieChart'
import './CenterElement.css'

const CenterElements = () => {
    return (
        <div className="container">
          <div className="main-div">
            <h1>4 ways to center elements</h1>
          </div>
          <div>
            <PieChart/>
          </div>
          <div>
            <UseStateHook/>
          </div>
        </div>
    )
}

export default CenterElements

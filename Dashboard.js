import React from 'react'
import Table from '../../Components/Table/Table'
import LeftPane from '../../Containers/LeftPane/LeftPane'
import RightPane from '../../Containers/RightPane/RightPane'
import "./dashboard.css"

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <LeftPane />
        <RightPane />
    </div>
  )
}

export default Dashboard
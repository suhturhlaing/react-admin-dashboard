import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import './home.scss'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />

        {/* Widget */}
        <div  className='widgets'>
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>

        {/*chart  */}
        <div className='charts'>
          <Featured />
          <Chart />
        </div>

        {/* List */}
        <div className='listContainer'>
          <div className='listTitle'>Latest Transations</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home

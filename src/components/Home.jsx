import React from 'react'
import Sidebar from './Sidebar'
import AccountHodler from './AccountHodler'
import { Income } from './Income'
import Strategy from './Strategy'

const Home = () => {
  return (
    <div className="container-fluid">
        <Sidebar></Sidebar>
        <div className='row'>
            <div className="col-sm-12 col-lg-4 col-xl-4 col-xxl-3">
                <AccountHodler></AccountHodler>
            </div>
            <div className="col-sm-12 col-lg-5 col-xl-5 col-xxl-5">
                <Income></Income>
            </div>
            <div className="col-cm-12 col-lg-3 col-xl-3 col-xxl-3">
                <Strategy></Strategy>
            </div>
        </div>
    </div>
  )
}

export default Home
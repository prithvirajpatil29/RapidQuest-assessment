import React from 'react'
import logo from '../assets/images/logo.jpg'
const Sidebar = () => {
  return (
        <div className="d-flex flex-column align-items-center justify-content-between sidebar mt-2 ">
            <div className="d-flex flex-column align-items-center">
              <img src={logo} className='img-fluid logo' width={40} alt="" />
              <div className="d-flex  align-items-center  mediaflex mediasidebar flexcol">
                <i class="bi bi-search bistyle mt-0"></i>
                <div className="d-flex flexcol align-items-center">
                  <i class="bi bi-house bistyle" style={{backgroundColor:'#4935FF',color:'#fff'}}></i>
                  <i class="bi bi-table bistyle"></i>
                  <i class="bi bi-card-list bistyle"></i>
                  <i class="bi bi-person bistyle"></i>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <i class="bi bi-bell bistyle"></i>
              <i class="bi bi-box-arrow-right bistyle mb-4"></i>
            </div>
        </div>
  )
}

export default Sidebar
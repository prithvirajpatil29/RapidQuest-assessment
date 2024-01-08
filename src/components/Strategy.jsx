import React from 'react'

const Strategy = () => {
  return (
    <div className='mt-4 marginstart'>
      <div className="strategy">
        <h5 className='fw-bold'>Retirement Strategy</h5>
        <h6 className='fw-bold mt-2 '>Employee Contribution</h6>
        <span className='d-flex align-item-center'><input  type='range'></input> <span className='ms-3'><span className='bg-white p-1'>12%</span></span></span>
        <h6 className='fw-bold mt-2'>Retirement Age</h6>
        <span className='d-flex align-item-center'><input type='range'></input> <span className='ms-3'><span className='bg-white p-1'>65</span></span></span>
        <hr className='opacity-25' />
        <h6 className='fw-bold my-4 fsmedium'>Employeer Contribution <span className='float-end'>8.5%</span></h6>
        <h6 className='fw-bold mt-4 fsmedium'>Intrest Rate  <span className='float-end'>5%</span></h6>
        <button className='py-1 my-3 updatebtn' >Update</button>
        <a href="" className='learntxt'><p className='learntxt text-center text-blue'>View Help Docs <i class="bi bi-chevron-right"></i></p></a>
      </div>
      <div className='ps-4 mt-4 mb-5 leftborder'>
        <span className='mt-3'>Are you considering a <br /><span className='fw-bold'>Housing Advance?</span></span>
        <div className='limtxt'>Limited time reduced interest.</div>
        <a href="" className='learntxt'><p className='learntxt text-blue '>Learn More <i class="bi bi-chevron-right"></i></p></a>
      </div>
    </div>
  )
}

export default Strategy
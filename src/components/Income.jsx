import React from 'react'
import Barstacked from './Barstacked'
import { CircularProgressbar } from 'react-circular-progressbar';
export const Income = () => {
    const percentage = 66;

  return (
    <div className='mt-4 marginstart'>
        <h6 className='fw-bold text-blue'>Retirement Income</h6>
        <h5 className='fw-bold'>Starting Year 2056</h5>
        <div className="row mt-4">
            <div className="col-sm-12 col-lg-4 col-xl-4 col-md-12 col-xxl4">
                <span className='fs-4 fw-bold'>$300,000</span><br />
                <p className='opacity-50 smallerfont incomeborderbtm'>My Goal</p>
            </div>
            <div className="col-6 col-lg-4 col-xl-4 col-md-6 col-xxl4 percentincomehalf">
                <span className='fs-4 fw-bold'>59%</span><br />
                <p className='opacity-50 smallerfont incomeborderbtm'>Goal Achived</p>
            </div>
            <div className="col-6 col-lg-4 col-xl-4 col-md-6 col-xxl4 percentincomehalf">
                <span className='fs-4 fw-bold'>$300</span><br />
                <p className='opacity-50 smallerfont incomeborderbtm'>Est Monthly Income</p>
            </div>
        </div>
        <Barstacked></Barstacked>
        <h4 className='fw-bold'>How do I compare to my peers?</h4>
        <p className='opacity-75'>These numbers respresent current goal achievement</p>
        <div className="row">
            <div className="col-sm-12 col-xl-5">
                <b className='d-flex align-items-center py-1'>Age:  <span className='opacity-75 ms-2'> Under 30<i class="bi bi-caret-down-fill"></i></span></b>
                <hr />
                <b className='d-flex align-items-center py-1'>Salary:  <span className='opacity-75 ms-2'> K 20-K 30<i class="bi bi-caret-down-fill"></i></span></b>
                <hr />
                <b className='d-flex align-items-center py-1'>Gender:  <span className='opacity-75 ms-2'>Male<i class="bi bi-caret-down-fill"></i></span></b>
                <hr />
            </div>
            <div className="col-sm-12 col-xl-7 ">
                <div className='d-flex align-items-center justify-content-center gap-1'>
                    <CircularProgressbar value={78} text={`78%`} styles={{path:{stroke:'#25D5AA'},trail:{stroke:'#D1F7ED'}}}/>
                    <CircularProgressbar value={95} text={`96%`} styles={{path:{stroke:'#25D5AA'},trail:{stroke:'#D1F7ED'}}} />
                    <CircularProgressbar value={59} text={`59%`} styles={{path:{stroke:'#25D5AA'},trail:{stroke:'#D1F7ED'}}}/>
                </div>
                <div className='d-flex align-items-center justify-content-around '>
                    <p>Average</p>
                    <p className='me-4'>Top</p>
                    <p>Me</p>
                </div>
            </div>
        </div>
    </div>
  )
}

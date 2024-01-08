import React from 'react'
import profile from '../assets/images/profile.jpeg'
const AccountHodler = () => {
  return (
    <div className='accounthodler'>
        <div className="marginstart">
            <div className="d-flex px-3 pt-2">
                <img src={profile} height={60} width={60} className='rounded-circle' alt="" />
                <span className='ms-3'><h3 className='fw-bold'>Hi Mike,</h3><p className='fw-bold'>welcome back</p></span>
            </div>
            <div className="accountbggray">
                <div className="px-3 pt-3">
                    <h5 className='fw-bolder'>Today</h5>
                    <h4 className='fw-bolder'>$19,892</h4>
                    <p className='opacity-75'>Account Balance</p>
                    <div className="row">
                        <div className="col-sm-6 col-6 col-xl-12 col-lg-12 col-xxl-12">
                        <h5 className='fw-bolder'>$4,000</h5>
                        <p className='opacity-75 withdral-fssmall' >Year-to-Date <span className='mobile-hidden'>Contribution</span></p>
                    </div>
                    <div className="col-sm-6 col-6 col-cl-12 col-lg-12 col-xxl-12">
                        <h5 className='fw-bolder'>$1,892</h5>
                        <p className='opacity-75 withdral-fssmall'>Total Interest</p>
                    </div>
                    </div>
                </div>
            <div className="px-3 pb-3">
                <p className='btn text-white select' style={{backgroundColor:'#4935FF'}}>I want to  
                    <span className='desktop-icon-caret'><i className="bi bi-caret-down-fill"></i></span>
                    <span className='mobile-caret'>...</span>
                </p>
            </div>
            </div>
            <div className="accountbggray">
                <h5 className='fw-bold mt-4 px-3 pt-3'>Recent Transactions</h5>
                <p className='px-3 opacity-75 mt-4 withdral-fssmall'>2020-08-07</p>
                <h6 className='fw-bold px-3 withdral-fssmall'>Withdrawal Transfer to Bank-XXX11</h6>
                <hr className='mx-3' />
                <p className='px-3 opacity-75  withdral-fssmall'>2020-08-07</p>
                <h6 className='fw-bold px-3 withdral-fssmall'>Withdrawal Transfer to Bank-XXX11</h6>
                <hr className='mx-3'/>
                <p className='px-3 opacity-75  withdral-fssmall'>2020-08-07</p>
                <h6 className='fw-bold px-3 pb-3 withdral-fssmall'>Withdrawal Transfer to Bank-XXX11</h6>
                <hr className='mx-3'/>
            </div>
        </div>
    </div>
  )
}

export default AccountHodler
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, {useState} from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../../_metronic/helpers'
import { getLayout, ILayout, LayoutSetup, useLayout } from '../../../../_metronic/layout/core'





const DailyTimesheet: React.FC = () => {
  const {setLayout} = useLayout()
  const [tab, setTab] = useState('Header')
  const [config, setConfig] = useState<ILayout>(getLayout())
  const [configLoading, setConfigLoading] = useState<boolean>(false)
  const [resetLoading, setResetLoading] = useState<boolean>(false)
  

  const updateData = (fieldsToUpdate: Partial<ILayout>) => {
    const updatedData = {...config, ...fieldsToUpdate}
    setConfig(updatedData)
  }
  

  const updateConfig = () => {
    setConfigLoading(true)
    try {
      LayoutSetup.setConfig(config)
    } catch (error) {
      setConfig(getLayout())
    }
    setTimeout(() => {
      setLayout(config)
      setConfigLoading(false)
    }, 1000)
  }

  const reset = () => {
    setResetLoading(true)
    setTimeout(() => {
      setConfig(getLayout())
      setResetLoading(false)
    }, 1000)
  }

  return (
    <>
    
    <br/>
    <div className='card card-custom'>
    <div className='card-header card-header-stretch overflow-auto'>
    <ul
            className='nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap'
            role='tablist'
          >
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'Header'})}
                onClick={() => setTab('Header')}
                role='tab'
              >
                Me
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'Toolbar'})}
                onClick={() => setTab('Toolbar')}
                role='tab'
              >
                Teams
              </a>
            </li>
           
          </ul>
    </div>
    </div>
      <div className='card card-custom'>
        </div>
        {/* end::Header */}

        {/* begin::Form */}
        <form className='form'>
          {/* begin::Body */}
          <div className='card-body'>
            <div className='tab-content pt-3'>
            <div className={clsx('tab-pane', {active: tab === 'Header'})}>
           
      
      
          
      
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          {/* <span className='card-label fw-bolder fs-3 mb-1'>New Arrivals</span> */}
          <span className='card-label fw-bolder fs-3 mb-1'>Employee Timesheet</span>
        </h3>
        {/* <div className='card-toolbar'>
          <a href='#' className='btn btn-sm btn-light-primary'>
            <KTSVG path='/media/icons/duotune/arrows/arr096.svg' className='svg-icon-2' />
            Download Timesheet
          </a>
        </div> */}
      
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted bg-light'>
                <th className='ps-4 min-w-225px rounded-start'>Day</th>
                <th className='min-w-125px'>Punch In time</th>
                <th className='min-w-125px'>Punch Out time</th>
                <th className='min-w-200px'>Timer Active</th>
                <th className='min-w-150px'>Timer Idle</th>
                <th className='min-w-150px'>Total Time</th>
                <th className='min-w-200px text-end rounded-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Sun 13-Mar
                      </a>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    08.30
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    19.25
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    06.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Insurance</span> */}
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    02.30
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    08.30
                  </a>
                </td>
                
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Mon 14-Mar
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    08.00
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    18.00
                  </a>
  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    09.00
                  </a>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    01.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>NBA Player</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    10.00
                  </a>
                </td>
                
                
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                   
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Tue 15-Mar
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    08.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    19.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Rejected</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    08.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Ruby Developer</span> */}
                </td>
                <td>
                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    04.00
                  </a>
                </td>
                <td>
                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.00
                  </a>
                </td>
                
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                  
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Wed 16-Mar
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    08.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    19.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Rejected</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    08.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Ruby Developer</span> */}
                </td>
                <td>
                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    04.00
                  </a>
                </td>
                <td>
                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.00
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                   
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Thur 17-Mar
                      </a>
                    
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    08.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    19.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Rejected</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    08.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Ruby Developer</span> */}
                </td>
                <td>
                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    04.00
                  </a>
                </td>
                <td>
                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.00
                  </a>
                </td>
                
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Fri 18-Mar
                      </a>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    08.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    19.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Rejected</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    08.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Ruby Developer</span> */}
                </td>
                <td>
                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    04.00
                  </a>
                </td>
                <td>
                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.00
                  </a>
                </td>
                
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Sat 19-Mar
                      </a>
                   
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    08.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    19.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Rejected</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    08.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Ruby Developer</span> */}
                </td>
                <td>
                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    04.00
                  </a>
                </td>
                <td>
                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.00
                  </a>
                </td>
                
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        </div>
        {/* end::Table container */}
      </div>
      

      {/* begin::Body */}
    
    
          
  
              
              </div>

              <div className={clsx('tab-pane', {active: tab === 'Toolbar'})}>
              <div className='card card-custom'>
    <div className='card-header card-header-stretch overflow-auto'>
    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <strong style={{color:'red'}}><input className='form-check-input widget-9-check ' type='checkbox' value='1'  /> PunchIn - PunchOut</strong> 
    </div>
    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <strong style={{color:'green'}}><input className='form-check-input widget-9-check ' type='checkbox' value='1'  /> Active Time</strong> 
    </div>
    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <strong style={{color:'yellow'}}><input className='form-check-input widget-9-check ' type='checkbox' value='1'  /> Manual Entry</strong> 
    </div>
    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <strong style={{color:''}}><input className='form-check-input widget-9-check ' type='checkbox' value='1'  />Total Ex.Time</strong> 
    </div>
    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <strong style={{color:'red'}}><input className='form-check-input widget-9-check ' type='checkbox' value='1'  />Ideal Time</strong> 
    </div>
    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <strong style={{color:'orange'}}><input className='form-check-input widget-9-check ' type='checkbox' value='1'  /> Total inc. Time</strong> 
    </div>
    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <strong style={{color:'Dark'}}><input className='form-check-input widget-9-check ' type='checkbox' value='1'  />Timmer stpped</strong> 
    </div>
    <br></br>
    <div className='form-check form-check-sm form-check-custom form-check-solid'>

                  <div className='btn btn-primary'>Refresh</div>

    </div>
    </div>
    </div>
    <br />
                {/* begin::Header */}
                    <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>Employees</span>
                  </h3>
                
      
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted'>
                
                <th className='min-w-150px'>Employee</th>
                <th className='min-w-140px'>Sun <br></br>21 Mar</th>
                <th className='min-w-140px'>Mon <br></br>22 Mar</th>
                <th className='min-w-140px'>Tue <br></br>23 Mar</th>
                <th className='min-w-140px'>Wed <br></br>24 Mar</th>
                <th className='min-w-140px'>Thur <br></br>25 Mar</th>
                <th className='min-w-140px'>Fri <br></br>26 Mar</th>

                
                
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('/media/avatars/300-14.jpg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        Ana Simmons
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        HTML, JS, ReactJS
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   00.00
                  </span>
                </td>
                
                <td>
                  
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   03.40
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   06.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
              </tr>
              <tr>
                
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('/media/avatars/300-2.jpg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        Jessie Clarcson
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        C#, ASP.NET, MS SQL
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                
                
              </tr>
              <tr>
                
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('/media/avatars/300-5.jpg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        Lebron Wayde
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        PHP, Laravel, VueJS
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                
                
              </tr>
              <tr>
                
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('/media/avatars/300-20.jpg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        Natali Goodwin
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        Python, PostgreSQL, ReactJS
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                 
                 <span className='text-muted fw-bold text-muted d-block fs-7'>
                  05.00
                 </span>
               </td>
               <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td> 
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                
                
              </tr>
              <tr>
                
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('/media/avatars/300-23.jpg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        Kevin Leonard
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        HTML, JS, ReactJS
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                <td>
                 
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                   05.00
                  </span>
                </td>
                
                
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
              
              </div>

            </div>
          </div>
          {/* end::Body */}

          {/* begin::Footer */}
         </div>
          {/* end::Footer */}
        </form>
        {/* end::Form */}
      
    </>
  )
}

export {DailyTimesheet}

/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, {useState} from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../../_metronic/helpers'
import { getLayout, ILayout, LayoutSetup, useLayout } from '../../../../_metronic/layout/core'





const AttendanceSheet: React.FC = () => {
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
          <span className='card-label fw-bolder fs-3 mb-1'>Attendance Sheet</span>
          {/* <span className='text-muted mt-1 fw-bold fs-7'>Over 500 new products</span> */}
        </h3>
        <div className='card-toolbar'>
          <a href='#' className='btn btn-sm btn-light-primary'>
            <KTSVG path='/media/icons/duotune/arrows/arr096.svg' className='svg-icon-2' />
            Download Timesheet
          </a>
        </div>
      </div>
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
                <th className='ps-4 min-w-125px rounded-start'>Day</th>
                <th className='ps-4 min-w-125px rounded-start'>Date</th>
                <th className='min-w-125px'>Punch In time</th>
                <th className='min-w-125px'>Punch Out time</th>
                <th className='min-w-125px'>Total Ex. Idle</th>
                <th className='min-w-125px'>Timer Active</th>
                <th className='min-w-125px'>Timer Idle</th>
                <th className='min-w-150px'>Total Time</th>
                
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
                      Tue
                      </a>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    2022-03-15
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    23.55
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Insurance</span> */}
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
                </td>
                
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Wed
                      </a>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    2022-03-16
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    23.55
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Insurance</span> */}
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
                </td>
                
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Thur
                      </a>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    2022-03-17
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    23.55
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Insurance</span> */}
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
                </td>
                
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Fri
                      </a>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    2022-03-18
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    23.55
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Insurance</span> */}
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
                </td>
                
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Sat
                      </a>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    2022-03-19
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    23.55
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Insurance</span> */}
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
                </td>
                
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Sun
                      </a>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    2022-03-20
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    23.55
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Insurance</span> */}
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
                </td>
                
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Mon
                      </a>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    2022-03-21
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    23.55
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Insurance</span> */}
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
                </td>
                
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Tue
                      </a>
                     
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    2022-03-22
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    23.55
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Insurance</span> */}
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    00.00
                  </a>
                </td>
                <td>
                  {/* <span className='badge badge-light-primary fs-7 fw-bold'>Approved</span> */}
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    11.36
                  </a>
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

              <div className={clsx('tab-pane', {active: tab === 'Toolbar'})}>
                {/* begin::Header */}
                    <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>Employees</span>
                     
                  </h3>
               
      </div>
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
                <th className='min-w-100px text-end'>Actions</th>
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
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                  href='#'
                  className='btn btn-sm btn-light-primary'
                 
                >
                  Attendance Sheet
                </a>
                    
                    
                  </div>
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
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                  href='#'
                  className='btn btn-sm btn-light-primary'
                 
                >
                  Attendance Sheet
                </a>
                    
                    
                  </div>
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
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                  href='#'
                  className='btn btn-sm btn-light-primary'
                 
                >
                  Attendance Sheet
                </a>
                    
                    
                  </div>
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
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                  href='#'
                  className='btn btn-sm btn-light-primary'
                 
                >
                  Attendance Sheet
                </a>
                    
                    
                  </div>
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
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                  href='#'
                  className='btn btn-sm btn-light-primary'
                 
                >
                  Attendance Sheet
                </a>
                    
                    
                  </div>
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
         
          {/* end::Footer */}
        </form>
        {/* end::Form */}
      </div>
    </>
  )
}

export {AttendanceSheet}

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget11: React.FC<Props> = ({className}) => {
  return (
    
    <div className={`card ${className}`}>
      
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          {/* <span className='card-label fw-bolder fs-3 mb-1'>New Arrivals</span> */}
          <span className='card-label fw-bolder fs-3 mb-1'>Employee Timesheet</span>
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
                {/* <th className='ps-4 min-w-325px rounded-start'>Product</th>
                <th className='min-w-125px'>Price</th>
                <th className='min-w-125px'>Deposit</th>
                <th className='min-w-200px'>Agent</th>
                <th className='min-w-150px'>Status</th>
                <th className='min-w-200px text-end rounded-end'></th> */}
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
                    {/* <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-26.jpg')}
                        className=''
                        alt=''
                      />
                    </div> */}
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Sun 13-Mar
                      </a>
                      {/* <span className='text-muted fw-bold text-muted d-block fs-7'>
                        HTML, JS, ReactJS
                      </span> */}
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    08.30
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    19.25
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Rejected</span> */}
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
                {/* <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td> */}
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    {/* <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-3.jpg')}
                        className=''
                        alt=''
                      />
                    </div> */}
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Mon 14-Mar
                      </a>
                      {/* <span className='text-muted fw-bold text-muted d-block fs-7'>
                        08.00
                      </span> */}
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    08.00
                  </a>
                  <span className='text-muted fw-bold text-muted d-block fs-7'>Paid</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    18.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Rejected</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    09.00
                  </a>
                  {/* <span className='text-muted fw-bold text-muted d-block fs-7'>NBA Player</span> */}
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
                {/* <td>
                  <span className='badge badge-light-danger fs-7 fw-bold'>In Progress</span>
                </td> */}
                {/* <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td> */}
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    {/* <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-9.jpg')}
                        className=''
                        alt=''
                      />
                    </div> */}
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Tue 15-Mar
                      </a>
                      {/* <span className='text-muted fw-bold text-muted d-block fs-7'>
                        PHP, Laravel, VueJS
                      </span> */}
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
                    {/* <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-9.jpg')}
                        className=''
                        alt=''
                      />
                    </div> */}
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Wed 16-Mar
                      </a>
                      {/* <span className='text-muted fw-bold text-muted d-block fs-7'>
                        PHP, Laravel, VueJS
                      </span> */}
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
                    {/* <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-9.jpg')}
                        className=''
                        alt=''
                      />
                    </div> */}
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Thur 17-Mar
                      </a>
                      {/* <span className='text-muted fw-bold text-muted d-block fs-7'>
                        PHP, Laravel, VueJS
                      </span> */}
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
                    {/* <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-9.jpg')}
                        className=''
                        alt=''
                      />
                    </div> */}
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Fri 18-Mar
                      </a>
                      {/* <span className='text-muted fw-bold text-muted d-block fs-7'>
                        PHP, Laravel, VueJS
                      </span> */}
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
                    {/* <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-9.jpg')}
                        className=''
                        alt=''
                      />
                    </div> */}
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                      Sat 19-Mar
                      </a>
                      {/* <span className='text-muted fw-bold text-muted d-block fs-7'>
                        PHP, Laravel, VueJS
                      </span> */}
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
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget11}

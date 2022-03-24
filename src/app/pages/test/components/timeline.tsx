/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import img1 from '../../../../../public/media/icons/'
import {KTSVG,toAbsoluteUrl} from '../../../../_metronic/helpers'
// import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {Dropdown1} from '../../../../_metronic/partials/content/dropdown/Dropdown1'

type Props = {
className: string
}

const ListsWidget6: React.FC<Props> = ({className}) => {
  return (
    
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
      <ul className='pagination'>
          <h6 style={{paddingLeft:'40px'}}>
            <br/>
              TO
            </h6>
            <div style={{paddingLeft:'10px'}}>
            <input type="date" style={{width:'140px', height:'40px'}}/>
            </div>
            <h6 style={{paddingLeft:'10px'}}>
            <br/>
              From
            </h6>
            <div style={{paddingLeft:'10px'}}>
            <input type="date" style={{width:'140px', height:'40px'}}/>
            </div>
            
            <h6 style={{paddingLeft:'10px'}}>
            <br/>
                User
              </h6>
            <div className='row mb-6'>
              
              <div className='col-lg-6 fv-row' style={{paddingLeft:'20px'}}>
                <select
                  className='form-select  ' style={{width:'150px'}}
                  // {...formik.getFieldProps('country')}
                >
                  <option value='' disabled selected hidden>User</option>
                  <option value='AF'>Xyz</option>
                  <option value='AX'>Anc </option>
                  <option value='AL'>Rahul</option>
                  <option value='DZ'>kiran</option>
                  <option value='AS'>pqr</option>
                  <option value='AD'>abc</option>
                  <option value='AO'>king</option>
                  <option value='AI'>raman</option>
                  <option value='AQ'>dev</option>
                  <option value='AG'>jagesh</option>
                  <option value='AR'>himanshu</option>
                  <option value='AM'>Ria</option>
                  <option value='AW'>preet</option>
                  <option value='AU'>j.kaur</option>
                  <option value='AT'>Einstien</option>
                  <option value='AZ'>dhoni</option>
                  <option value='BS'>biswajeet</option>
                  <option value='BH'>kunal</option>
                  <option value='BD'>Ria</option>
                  
                </select>
                {/* {formik.touched.country && formik.errors.country && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.country}</div>
                  </div>
                )} */}
              </div>
            </div>

            <h6 style={{paddingLeft:'10px'}}>
            <br/>
                Project
              </h6>
            <div className='row mb-6'>
              
              <div className='col-lg-6 fv-row' style={{paddingLeft:'20px'}}>
                <select
                  className='form-select  ' placeholder='Project' style={{width:'150px'}}
                  // {...formik.getFieldProps('country')}
                >
                  <option value='' disabled selected hidden>Project Name</option>
                  <option value='AF'>Xyz</option>
                  <option value='AX'>Abc</option>
                  <option value='AL'>pqr</option>
                  <option value='DZ'>cx</option>
                  <option value='AS'>chat app</option>
                  <option value='AD'>andriod</option>
                  <option value='AO'>MERN</option>
                  <option value='AI'>MEAN</option>
                  <option value='AQ'>Teams</option>
                  <option value='AG'>dashobard</option>
                  <option value='AR'>header</option>
                  <option value='AM'>cx choice</option>
                  <option value='AW'>hello</option>
                  
                  
                </select>
                {/* {formik.touched.country && formik.errors.country && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.country}</div>
                  </div>
                )} */}
              </div>
              
            </div>
            <button className='btn btn-danger col-lg-4 fv-row text-center' > Search</button>
          
        </ul>
        <i className='Textarea ' style={{paddingRight:'900px',fontSize:'15px' }}>
            
            
          
        
        </i>
        

        <h3 className='card-title align-items-start flex-column'>
          {/* <span className='fw-bolder mb-2 text-dark'>Activities</span> */}
          <span className='fw-bolder mb-2 text-dark'></span>
          <span className='text-muted fw-bold fs-7'></span>
        </h3>
        
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-5'>
        {/* begin::Timeline */}
        <div className='timeline-label'>
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-success fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Content */}
            <div className='timeline-content d-flex'>
              <div className='fw-bolder text-gray-800 ps-3'>07:00-08:00<hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>07:00-07:10</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>07:10-07:20</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>07:20-07:30</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>07:30-07:40</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>07:40-08:50</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>07:50-08:00</h6>
                    </div>
                </div>

            </div>
              </div>
              
            </div>
            
            {/* end::Content */}
          
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-success fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Content */}
            <div className='timeline-content d-flex'>
              <div className='fw-bolder text-gray-800 ps-3'>08:00-09:00<hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>08:00-08:10</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>08:10-08:20</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>08:20-08:30</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>08:30-08:40</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>08:40-08:50</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>08:50-09:00</h6>
                    </div>
                </div>

            </div>
              </div>
              
            </div>
            
            {/* end::Content */}
          
          </div>
          
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-danger fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className='timeline-content fw-bolder text-gray-800 ps-3'>
              09:00-10:00<hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                    <div className='col-2'style={{height:'120px',width:'158px'}}>
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>09:00-09:10</h6>
                    </div>
                </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>09:10-09:20</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>09:20-09:30</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>09:30-09:40</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>09:40-09:50</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>09:50-10:00</h6>
                    </div>
                </div>

            </div>
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-primary fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='timeline-content fw-mormal  ps-3'>
              <strong>10:00-11:00</strong><hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>10:00-10:10</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>10:10-10:20</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>10:20-10:30</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>10:30-10:40</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>10:40-10:50</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>10:50-11:00</h6>
                    </div>
                </div>

            </div>
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-danger fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className='timeline-content fw-bold text-gray-800 ps-3'>
              <strong>11:00-12:00</strong><hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>11:00-11:10</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>11:10-11:20</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>11:20-11:30</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>11:30-11:40</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>11:40-11:50</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>11:50-12:00</h6>
                    </div>
                </div>

            </div>
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-primary fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='timeline-content fw-mormal  ps-3'>
              <strong>12:00-13:00</strong><hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>12:00-12:10</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>12:10-12:20</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>12:20-12:30</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>12:30-12:40</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>12:40-12:50</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>12:50-13:00</h6>
                    </div>
                </div>

            </div>
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-danger fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className='timeline-content fw-bold  ps-3'>
              <strong>13:00-14:00</strong><hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>13:00-13:10</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>13:10-13:20</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>13:20-13:30</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>13:30-13:40</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>13:40-13:50</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>13:50-14:00</h6>
                    </div>
                </div>

            </div>
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder  fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-success fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='timeline-content fw-mormal  ps-3'>
              <strong>14:00-15:00</strong>
              <hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>14:00-14:10</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>14:10-14:20</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>14:20-14:30</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>14:30-14:40</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>14:40-14:50</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>14:50-15:00</h6>
                    </div>
                </div>

            </div>
            
            </div>
            
            {/* end::Text */}
          </div>
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-primary fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='timeline-content fw-mormal  ps-3'>
              <strong>15:00-16:00</strong><hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>15:00-15:10</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>15:10-15:20</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>15:20-15:30</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>15:30-15:40</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>15:40-15:50</h6>
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    <br />
                    <h6>15:50-16:00</h6>
                    </div>
                </div>

            </div>
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
        </div>
        {/* end::Timeline */}
      </div>
      {/* end: Card Body */}
    </div>
  )
}

export default ListsWidget6

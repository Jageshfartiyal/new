/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {MenuItem} from '../../../_metronic/layout/components/header/MenuItem'
import ListsWidget6 from './components/timeline'
import {
  MixedWidget2,
  MixedWidget10,
  MixedWidget11,
  // ListsWidget2,
  // ListsWidget3,
  // ListsWidget4,
  // ListsWidget5,
  // ListsWidget6,
  // TablesWidget5,
  // TablesWidget10,
  // MixedWidget8,
} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row '>
      <div className='col-md-6'>
        
        
      </div>
      <div className='col-md-6' style={{border:'1 px solid black'}}>
        
      </div>
    </div>
    <div className='row '>
      
      <div className='col-xl-12'>
        {/* <h1>@nd row ss</h1> */}
        <ListsWidget6 className='XYZ' />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      
      <div className='col-xl-4'>
        
      </div>
    </div>
    {/* end::Row */}

    <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-4'>
        
      </div>
      {/* <div className='col-xxl-8'>
        <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
      </div> */}
    </div>
  </>
)

const DashboardWrapper1: FC = () => {
  const intl = useIntl()
  return (
    <>
      
      
      {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle> */}
      {/* <PageTitle breadcrumbs={[]}>
        <MenuItem title='Me' to='/dashboard' />
        <MenuItem title='Team' to='/builder' />
        </PageTitle> */}
      <div
        className='menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch'
        id='#kt_header_menu'
        data-kt-menu='true'
      >
        {/* <MenuItem title='Me' to='/dashboard' />
        <MenuItem title='Teams' to='/builder' /> */}
        
        
      </div>
      
        
      
      



      <DashboardPage />
    </>
  )
}

export {DashboardWrapper1}

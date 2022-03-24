/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      
      <AsideMenuItem
        to='/builder'
        title='Dashboard'
        fontIcon='bi-app-indicator'
        icon='/media/icons/duotune/art/art002.svg'
    />
      <AsideMenuItemWithSub
        to='/timesheet/daily'
        icon='/media/icons/duotune/art/timesheet.svg'
        title='Timesheets'
        fontIcon='bi-app-indicator'
      >
        <AsideMenuItem to='/timesheet/daily' title='Daily' hasBullet={true} />
        <AsideMenuItem to='/crafted/pages/profile/overview' title='Weekly' hasBullet={true} />
        <AsideMenuItem to='/crafted/pages/profile/overview' title='Calender' hasBullet={true} />

      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/report'
        icon='/media/icons/duotune/art/report.svg'
        title='Reports'
        fontIcon='bi-app-indicator'
      >
        <AsideMenuItem to='/reports/attendance' title='Attendance Sheet' hasBullet={true} />
        <AsideMenuItem to='/scrren-shot' title='Time and Activities' hasBullet={true} />
        <AsideMenuItem to='/crafted/pages/profile/overview' title='Apps and URLs' hasBullet={true} />
        
      </AsideMenuItemWithSub>
      
      <AsideMenuItemWithSub
        to='/activities/screenshots'
        icon='/media/icons/duotune/art/activity.svg'
        title='Activity'
        fontIcon='bi-app-indicator'
      >
        <AsideMenuItem to='/activities/screenshots' title='Screenshots' hasBullet={true} />
        <AsideMenuItem to='/crafted/pages/profile/overview' title='Apps' hasBullet={true} />
        <AsideMenuItem to='/crafted/pages/profile/overview' title='URLs' hasBullet={true} />

      </AsideMenuItemWithSub>
      <AsideMenuItem
        to='/crafted/account/settings'
        title='Settings'
        icon='/media/icons/duotune/art/setting.svg'
        fontIcon='bi-app-indicator'
      />
      
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text text-uppercase fs-8 ls-1'>Admin</span>
        </div>
      </div>
      <AsideMenuItem
        to='/project'
        title='Projects'
        fontIcon='bi-app-indicator'
        icon='/media/icons/duotune/art/project.svg'
      />
      <AsideMenuItem
        to='/member'
        title='Members'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/art/member.svg'
      />
    </>
  )
}

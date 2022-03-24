import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'

import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from "../../_metronic/assets/ts/_utils";
import { DashboardWrapper1 } from '../pages/test/dash'
import { MemberWrapper } from '../pages/members/member'
import { ProjectWrapper } from '../pages/projects/projectwrapper'
import { EmpWrapper } from '../pages/addEmp/emp'
import { ProWrapper } from '../pages/addPro/Project'
import { TimesheetWrapper } from '../pages/timesheets/time'
import { AttendanceSheetWrapper } from '../pages/attendance/attend'



const PrivateRoutes = () => {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
 


  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/builder' />} />
        {/* Pages */}
      
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        <Route path='testpage' element={<DashboardWrapper1 />} />
        <Route path='member' element={<MemberWrapper />} />
        <Route path='project' element={<ProjectWrapper />} />
        <Route path='add' element={<EmpWrapper />} />
        <Route path='newproject' element={<ProWrapper />} />
        <Route path='timesheet' element={<TimesheetWrapper />} />
        <Route path='reports' element={<AttendanceSheetWrapper />} />
        
        
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
         <Route
          path='reports/attendance'
          element={
            <SuspensedView>
              <AttendanceSheetWrapper></AttendanceSheetWrapper>
            </SuspensedView>
          }
        />
        <Route
          path='activities/screenshots'
          element={
            <SuspensedView>
              <DashboardWrapper1/>
            </SuspensedView>
          }
        />
        <Route
          path='timesheet/daily'
          element={
            <SuspensedView>
              <TimesheetWrapper></TimesheetWrapper>
            </SuspensedView>
          }
        />
       
        <Route
          path='member/addmember'
          element={
            <SuspensedView>
              <EmpWrapper></EmpWrapper>
            </SuspensedView>
          }
        />
        <Route
          path='project/addproject'
          element={
            <SuspensedView>
              <ProWrapper></ProWrapper>
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
      
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC = ({children}) => {
    const baseColor = getCSSVariableValue('--bs-primary')
    TopBarProgress.config({
        barColors: {
            '0': baseColor,
        },
        barThickness: 1,
        shadowBlur: 5,
    });
    return <Suspense fallback={<TopBarProgress/>}>{children}</Suspense>
}

export {PrivateRoutes}

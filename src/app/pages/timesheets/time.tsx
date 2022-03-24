import React, {FC} from 'react'
import { DailyTimesheet } from './time/timesheet'



const TimesheetWrapper: FC = () => {
  return (
    <>
      {/* begin::Row */}
      
     <DailyTimesheet></DailyTimesheet>
    </>
  )
}

export {TimesheetWrapper}

import React, {FC} from 'react'
import Project1 from './project1/project1'


const ProjectWrapper: FC = () => {
  return (
    <>
      {/* begin::Row */}
      <Project1 className='mb-5 mb-xl-8' />
    </>
  )
}

export {ProjectWrapper}

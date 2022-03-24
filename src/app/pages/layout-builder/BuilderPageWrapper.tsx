import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {BuilderPage} from './BuilderPage'

const BuilderPageWrapper: FC = () => {
  return (
    <>
      {/* <PageTitle breadcrumbs={[]}>Dashboard(March 4 - Mar 10)</PageTitle> */}
      <BuilderPage />
    </>
  )
}

export default BuilderPageWrapper

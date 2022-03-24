/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'
import { StatisticsWidget6 } from '../statistics/StatisticsWidget6'
import { TablesWidget11 } from '../tables/TablesWidget11'

type Props = {
  className: string
  chartColor: string
  chartHeight: string
}

const MixedWidget11: React.FC<Props> = ({className, chartColor, chartHeight}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    // const chart = new ApexCharts(chartRef.current, chartOptions(chartColor, chartHeight))
    // if (chart) {
    //   chart.render()
    // }

    // return () => {
    //   if (chart) {
    //     chart.destroy()
    //   }
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef])

  return (
    <>
    <div className='row g-5 g-xl-8'>
      <TablesWidget11 className='mb-5 mb-xl-8' />
      <div className='col-xl-4'>
        <StatisticsWidget6
          className='card-xl-stretch mb-xl-8'
          color='success'
          title='Activity Time'
          description=''
          progress='80%'
        />
      </div>

      <div className='col-xl-4'>
        <StatisticsWidget6
          className='card-xl-stretch mb-xl-8'
          color='danger'
          title='Ideal Time'
          description=''
          progress='15%'
        />
      </div>

      <div className='col-xl-4'>
        <StatisticsWidget6
          className='card-xl-stretch mb-xl-8'
          color='primary'
          title='Billable Time'
          description=''
          progress='76%'
        />
      </div>
    </div>
    </>
  )
  
  
}





export {MixedWidget11}


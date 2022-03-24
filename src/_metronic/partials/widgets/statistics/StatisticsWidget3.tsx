/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSS, getCSSVariableValue} from '../../../assets/ts/_utils'

type Props = {
  className: string
  title: string
  description: string
  change: string
  color: string
}

const StatisticsWidget3: React.FC<Props> = ({className, title, change, color}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const height = parseInt(getCSS(chartRef.current, 'height'))
    const labelColor = getCSSVariableValue('--bs-gray-800')
    const baseColor = getCSSVariableValue('--bs-' + color)
    const lightColor = getCSSVariableValue('--bs-light-' + color)

    const chart = new ApexCharts(
      chartRef.current,
      getChartOptions(height, labelColor, baseColor, lightColor)
    )
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef])

  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body d-flex flex-column p-0'>
        <div className='d-flex flex-stack flex-grow-1 card-p'>
          <div className='d-flex flex-column me-2'>
            <a href='#' className='text-dark text-hover-primary fw-bolder fs-3'>
              {title}
            </a>

           
          </div>

          <span className='symbol symbol-50px'>
            <span className={`symbol-label fs-5 fw-bolder bg-light-${color} text-${color}`}>
              {change}
            </span>
          </span>
        </div>
        <div
          ref={chartRef}
          className='statistics-widget-3-chart card-rounded-bottom'
          style={{height: '20px', width:'50px', position:'absolute', top:'100%',right:'0'}}
        ></div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {StatisticsWidget3}

function getChartOptions(
  height: number,
  labelColor: string,
  baseColor: string,
  lightColor: string
): ApexOptions {
  const options: ApexOptions = {
    series: [
      {
        name: 'Active Time',
        data: [7, 5, 9, 3, 3,5,1],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'line',
      height: height,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat','Sun'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        show: false,
        position: 'front',
        stroke: {
          color: '#E4E6EF',
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      min: 0,
      max: 15,
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    // tooltip: {
    //   style: {
    //     fontSize: '12px',
    //   },
    //   y: {
    //     formatter: function (val) {
    //       return val + ' hrs'
    //     },
    //   },
    // },
    colors: [lightColor],
    markers: {
      colors: [lightColor],
      strokeColors: [baseColor],
      strokeWidth: 3,
    },
  }
  return options
}

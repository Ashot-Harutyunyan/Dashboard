import ReactApexChart from 'react-apexcharts'
import { MdKeyboardArrowDown } from "react-icons/md"

function DueDate({data}) {

    if (!data) return <p className='loading'>Loading...</p>

    const clonedData = JSON.parse(JSON.stringify(data))

    const pieCharts = {
        series: clonedData.series,
        options: {
            chart: {
                type: "donut",
            },
            labels: clonedData.categories,
            colors: ["#33BFFF", "#6A1B9A"], 
            legend: {
                position: "left",
                labels: {
                    colors: "#333",
                },
            },
            dataLabels: {
                enabled: false,
            },
        },
    }


  return (<div className='width-DueDate'>
      <div className="mb-4 flex justify-start gap-5 items-center">
          <h3 className="text-lg font-semibold text-gray-600">Due Date</h3>
          <div className="flex items-center space-x-2">
              <span className="titleClamp text-gray-400">All</span>
              <span className="titleClamp text-gray-400"><MdKeyboardArrowDown className='inline-block'/></span>
          </div>
      </div>

      <ReactApexChart
          options={pieCharts.options}
          series={pieCharts.series}
          type="donut"
          height={350}
      />
  </div>)
}

export default DueDate
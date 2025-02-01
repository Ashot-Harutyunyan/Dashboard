import Chart from "react-apexcharts"
import { MdKeyboardArrowDown } from "react-icons/md"

function CycleTime({data}) {

    if (!data) return <p className='loading'>Loading...</p>

    const clonedData = JSON.parse(JSON.stringify(data))

  const options = {
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: false },
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 8,
      colors: ['#ffffff'],
      strokeWidth: 2,
      strokeColors: ['#27C4F5', '#6A4FC7'],
      hover: { size: 10 },
    },
    colors: ["#2AB6F4", "#6A1B9A"], 
    xaxis: {
      categories: clonedData.categories,
      tickPlacement: 'between',
      labels: { style: { colors: "#A0A3BD", fontSize: "12px" } },
    },
    yaxis: {
      min: 0,
      max: 30,
      labels: { style: { fontSize: "12px" } },
      tickAmount: 3,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    tooltip: {
      enabled: true,
      shared: true,
    },
    responsive: [{
      breakpoint: 920,
      options: {
          xaxis: {
              labels: { show: false }
          },
          chart: {
            height: '250px',
          }
      },
    }],
}

const series = clonedData.series

  return (
          <div className="w-[100%] bg-white rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-600">
                      Cycle Time
                  </h3>
                  <div className="flex items-center space-x-4">
                      <div className="titleClamp text-gray-400">All <MdKeyboardArrowDown className='inline-block'/></div>
                      <div className="titleClamp text-gray-400">Current state <MdKeyboardArrowDown className='inline-block'/></div>
                  </div>
              </div>

      <Chart 
        options={options} 
        series={series} 
        type="line" 
        height={350} 
      />



          </div>
)}

export default CycleTime
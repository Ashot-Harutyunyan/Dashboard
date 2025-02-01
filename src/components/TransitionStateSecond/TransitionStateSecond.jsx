import Chart from "react-apexcharts"
import { MdKeyboardArrowDown } from "react-icons/md"

function TransitionStateSecond({data}) {

    if (!data) return <p className='loading'>Loading...</p>

    const clonedData = JSON.parse(JSON.stringify(data))

    const options = {
        chart: {
          type: "bar",
          stacked: false,
          toolbar: { show: false },
        },
        plotOptions: {
          bar: {
            columnWidth: "40%", 
            borderRadius: 5,
          },
        },
        colors: ["#2AB6F4", "#6A1B9A", "#FF3D57"],
        xaxis: {
          categories: clonedData.categories,
          labels: { style: { colors: "#A0A3BD", fontSize: "12px" } },
        },
        yaxis: {
          min: 0,
          max: 6,
          tickAmount: 3,
          labels: { style: { colors: "#A0A3BD", fontSize: "14px" } },
        },
        grid: {
          borderColor: "#E4E4E7",
          strokeDashArray: 0,
          xaxis: { lines: { show: false } },
          yaxis: { lines: { show: true } },
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
        },
        dataLabels: { enabled: false },
        responsive: [{
          breakpoint: 1305,
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
    

  return (<div className='width-TransitionsState'>
            <div className="flex justify-start gap-5 items-center mb-4">
                <h3 className="titleClamp font-semibold text-gray-600">
                    Transitions State
                </h3>
                <div className="flex items-center space-x-4">
                    <div className="titleClamp text-gray-400">All <MdKeyboardArrowDown className='inline-block'/></div>
                    <div className="titleClamp text-gray-400">Current state <MdKeyboardArrowDown className='inline-block'/></div>
                </div>
            </div>

              <Chart 
                options={options} 
                series={series} 
                type="bar" 
                height={350}
              />

</div>)
}

export default TransitionStateSecond
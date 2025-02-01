import ReactApexChart from 'react-apexcharts'
import { MdKeyboardArrowDown } from "react-icons/md"

function TransitionsState({data}) {

    if (!data) return <p className='loading'>Loading...</p>

    const clonedData = JSON.parse(JSON.stringify(data))

    const chartOptions = {
        series: [{
            data: clonedData.series,
        }],
        options: {
            chart: {
                type: 'bar',
                toolbar: { show: false }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%',
                    endingShape: 'rounded',
                    distributed: true,
                    borderRadius: 10,
                }
            },
            yaxis: {
                tickAmount: 3,
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: clonedData.categories,

            },
            responsive: [
            {
                breakpoint: 1300,
                options: {
                    xaxis: {
                        labels: {
                            style: { fontSize: '9px' }
                        }
                    }
                }    
            },   
            {
                breakpoint: 700,
                options: {
                    xaxis: {
                        labels: { show: false }
                    },
                    chart: {
                        height: '250px'
                    },
                },
            }
            ],
            colors: ['#1FC599', '#42B1C0', '#6B31A2', '#F53361', '#F2AC1E'],
        },
    }


  return (
       <div className='width-TransitionsState'>
        <div className="flex justify-start gap-5 items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-600">
                Transitions State
            </h3>
            <div className="flex items-center space-x-4">
                <div className="titleClamp text-gray-400">All <MdKeyboardArrowDown className='inline-block'/></div>
                <div className="titleClamp text-gray-400">Current state <MdKeyboardArrowDown className='inline-block'/></div>
            </div>
        </div>

        <ReactApexChart
            options={chartOptions.options}
            series={chartOptions.series}
            type="bar"
            height={350}
        />
    </div>)
}

export default TransitionsState
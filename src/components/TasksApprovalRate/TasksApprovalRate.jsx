import Chart from "react-apexcharts"
import { MdKeyboardArrowDown } from "react-icons/md"

function TasksApprovalRate({data}) {

    if (!data) return <p className='loading'>Loading...</p>

    const clonedData = JSON.parse(JSON.stringify(data))

        const series = clonedData.series

        const options = {
            chart: {
                type: "bar",
                while: '100%',
                background: "transparent",
                toolbar: { show: false },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "45%",
                    endingShape: "rounded",
                    distributed: true,
                    borderRadius: 10,
                },
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        height: '240px',
                    },
                    labels: { show: false }
                },
            }],
            grid: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            tooltip: {
                enabled: true,
            },
            xaxis: {
                categories: ["", ""],
                labels: { show: false }
            },
            colors: ["#25BFEF", "#6A1B9A"],
        }



    return (<section className="tasksApprovalRate-section">
            <div className="tasksApprovalRate-section-div rounded-[35px] bg-[#fff] size-max pl-8 pt-8"> 

                <div className="flex justify-start gap-5 items-center mb-4">
                    <h3 className="titleClamp font-semibold text-gray-600">
                        TASKS APPROVAL RATE
                    </h3>
                    <div className="flex items-center space-x-4">
                        <div className="titleClamp text-gray-400">All phases <MdKeyboardArrowDown className='inline-block'/></div>
                    </div>
                </div>

                <div className="flex">
                    <div className="relative z-2 bg-[#fff] pr-[10px] flex flex-col gap-[10px] justify-center">
                        <div className="flex items-center gap-[10px]">
                            <div className="bg-[#25BFEF] w-[15px] h-[15px] rounded-[50%]"></div>
                            <p className="RecentTasksToReview-section-one-title">Reviewed tasks (26)</p>
                        </div>
                        <div className="flex items-center gap-[10px]">
                           <div className="bg-[#6A1B9A] w-[15px] h-[15px] rounded-[50%]"></div>
                           <p className="RecentTasksToReview-section-one-title">Not reviewed tasks (18)</p>
                        </div>
                    </div>

                    <div className="w-[50%]">
                        <Chart 
                          className='relative z-1 -translate-x-8'
                           options={options} 
                           series={series} 
                           type="bar" 
                           height={350} 
                        />
                    </div>

                </div>
            </div>
</section>)

}

export default TasksApprovalRate

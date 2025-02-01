import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Mousewheel, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { BsCalendarCheck } from "react-icons/bs"
import { LiaHourglassHalfSolid } from "react-icons/lia"
import { MdKeyboardArrowDown } from "react-icons/md"


function RecentTasksToReview() {

    const swiperRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(1)

    return (
            <div className="w-[100%] mx-auto flex gap-[15px] justify-between flex-wrap ">

                <section className='RecentTasksToReview-section-one bg-[#fff] p-[25px] rounded-[25px]'>

                    <div className='flex justify-between items-start'>
                        <div className='flex mb-[25px] gap-[15px]'>
                            <h2 className="titleClamp">RECENT TASKS TO REVIEW</h2>
                            <div className='flex items-center gap-3'>
                                <p className="head-fontSize-p">All phases</p>
                                <img className='container-recent-transitions-img' src="/public/down-arrow.svg" alt="" />
                            </div>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <img onClick={() => swiperRef.current?.slidePrev()}
                                className='container-recent-transitions-img' src="/public/left-arrow.svg" alt="" />
                            <span className="head-fontSize-p">{currentSlide}/2</span>
                            <img onClick={() => swiperRef.current?.slideNext()}
                                className='container-recent-transitions-img' src="/public/right-arrow.svg" alt="" />
                        </div>
                    </div>


                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Mousewheel, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        grabCursor={true}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
                    >

                        <SwiperSlide>
                        <div className='shadow-md inset-shadow-sm rounded-[35px] p-[25px] mb-[5px]'>

                            <div className='div-grid flex mb-[25px]'>

                                <div className='flex flex-col gap-[10px]'>
                                    <p className="fontSizeClamp text-[#42B1C0]">OCT 6TH, 2020</p>
                                    <h2 className="titleClamp">Title of the task with a short description</h2>
                                    <h3 className="fontSizeClamp text-[#42B1C0]">NAME OF THE PROJECT</h3>
                                </div>
                                <p className='fontSizeClamp pr-[30px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum sequi asperiores at
                                    velit
                                    explicabo illum iste cupiditate possimus, nisi incidunt facere ea vitae ratione
                                    placeat harum
                                    neque animi veritatis commodi omnis id delectus soluta voluptatum tempore. Pariatur,
                                    vitae distinctio.
                                </p>

                                <div>
                                    <h2 className='RecentTasksToReview-section-one-title mb-[40px] text-right'>UI/UX
                                        DESIGNER</h2>
                                    <div className='flex'>
                                        <div
                                            className='divIcons border-2 border-[#42B1C0] bg-[#42B1C0] flex justify-center items-center rounded-[50%]'>
                                            <img src="/public/eye.svg" alt="eye"/>
                                        </div>

                                        <div
                                            className='divIcons border-2 border-[#42B1C0] flex justify-center items-center rounded-[50%]'>
                                            <img className='rotate-180' src="/public/download.svg" alt="download"/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-wrap-reverse gap-[10px] items-center justify-between'>

                                <div className='flex flex-wrap justify-center gap-[25px]'>

                                    <div className='flex gap-[5px] items-center'>
                                        <img className='RecentTasksToReview-section-one-icon' src="/public/chat.svg"
                                             alt="chat"/>
                                        <p className="RecentTasksToReview-section-one-font">10 comments</p>
                                    </div>

                                    <div className='flex gap-[5px] items-center'>
                                        <img className='RecentTasksToReview-section-one-icon'
                                             src="/public/attachment.svg" alt=""/>
                                        <p className="RecentTasksToReview-section-one-font">5 attachments</p>
                                    </div>

                                    <div className='flex gap-[5px] items-center'>
                                        <img className='RecentTasksToReview-section-one-icon' src="/public/time.svg"
                                             alt=""/>
                                        <p className="RecentTasksToReview-section-one-font">Normal priority</p>
                                    </div>

                                    <div className='flex gap-[5px] items-center'>
                                        <img className='RecentTasksToReview-section-one-icon'
                                             src="/public/exclamation-triangle.svg" alt=""/>
                                        <p className="RecentTasksToReview-section-one-font">High criticality</p>
                                    </div>

                                </div>

                                <div>
                                    <p className="fontSizeClamp">integrated with Jira</p>
                                </div>

                            </div>

                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className='shadow-md inset-shadow-sm rounded-[35px] p-[25px] mb-[5px]'>

                            <div className='div-grid flex mb-[25px]'>

                                <div className='flex flex-col gap-[10px]'>
                                    <p className="fontSizeClamp text-[#F53361]">OCT 6TH, 2020</p>
                                    <h2 className="titleClamp">Title of the task with a short description</h2>
                                    <h3 className="fontSizeClamp text-[#F53361]">NAME OF THE PROJECT</h3>
                                </div>
                                <p className='fontSizeClamp pr-[30px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum sequi asperiores at
                                    velit
                                    explicabo illum iste cupiditate possimus, nisi incidunt facere ea vitae ratione
                                    placeat harum
                                    neque animi veritatis commodi omnis id delectus soluta voluptatum tempore. Pariatur,
                                    vitae distinctio.
                                </p>

                                <div>
                                    <h2 className='RecentTasksToReview-section-one-title mb-[40px] text-right'>UI/UX
                                        DESIGNER</h2>
                                    <div className='flex'>
                                        <div
                                            className='divIcons border-2 border-[#F53361] bg-[#F53361] flex justify-center items-center rounded-[50%]'>
                                            <img src="/public/eye.svg" alt="eye"/>
                                        </div>

                                        <div
                                            className='divIcons border-2 border-[#F53361] flex justify-center items-center rounded-[50%]'>
                                            <img className='rotate-180' src="/public/download-red.svg" alt="download"/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-wrap-reverse gap-[10px] items-center justify-between'>

                                <div className='flex flex-wrap justify-center gap-[25px]'>

                                    <div className='flex gap-[5px] items-center'>
                                        <img className='RecentTasksToReview-section-one-icon' src="/public/chat-red.svg"
                                             alt="chat"/>
                                        <p className="RecentTasksToReview-section-one-font">10 comments</p>
                                    </div>

                                    <div className='flex gap-[5px] items-center'>
                                        <img className='RecentTasksToReview-section-one-icon'
                                             src="/public/attachment-red.svg" alt=""/>
                                        <p className="RecentTasksToReview-section-one-font">5 attachments</p>
                                    </div>

                                    <div className='flex gap-[5px] items-center'>
                                        <img className='RecentTasksToReview-section-one-icon' src="/public/time-red.svg"
                                             alt=""/>
                                        <p className="RecentTasksToReview-section-one-font">Normal priority</p>
                                    </div>

                                    <div className='flex gap-[5px] items-center'>
                                        <img className='RecentTasksToReview-section-one-icon'
                                             src="/public/exclamation-triangle-red.svg" alt=""/>
                                        <p className="RecentTasksToReview-section-one-font">High criticality</p>
                                    </div>

                                </div>

                                <div>
                                    <p className="fontSizeClamp">integrated with Jira</p>
                                </div>

                            </div>

                        </div>
                        </SwiperSlide>

                    </Swiper>

                    <div className='pt-[25px] flex justify-center items-center gap-[10px]'>
                        <div className={currentSlide > 1 ? 'w-[12px] h-[12px] border-1 rounded-[50%] cursor-pointer bg-[#fff]'
                            : 'w-[12px] h-[12px] border-2 rounded-[50%] cursor-pointer bg-[#000]'}></div>
                        <div className={currentSlide < 2 ? 'w-[12px] h-[12px] border-1 rounded-[50%] cursor-pointer bg-[#fff]'
                            : 'w-[12px] h-[12px] border-2 rounded-[50%] cursor-pointer bg-[#000]'}></div>
                    </div>

                </section>

                <section className="RecentTasksToReview-section-two bg-[#fff] p-[25px] rounded-[25px]">

                    <div className="mb-4 flex justify-start gap-5 items-center">
                        <h3 className="titleClamp font-semibold text-gray-400">CURRENT STATE</h3>
                        <div className="flex items-center space-x-2">
                            <span className="titleClamp">All</span>
                            <span className="titleClamp"><MdKeyboardArrowDown className='inline-block'/></span>
                        </div>
                    </div>

                    <div className="flex justify-around">
                        <div className="completed-state-dev">
                            <BsCalendarCheck className="divIconsFontSize text-gray-400"/>
                            <div>
                                <h2 className="divH2FontSize font-black">79%</h2>
                                <p className="fontSizeClamp text-gray-400">COMPLETED</p>
                            </div>
                            <p className="current-state-fontSize text-center">Tasks <span
                                className="text-gray-400">36/46</span></p>
                            <p className="current-state-fontSize text-center">Completion rate <span
                                className="text-gray-400">-8%</span></p>
                        </div>

                        <div className="border-2 text-gray-400"></div>

                        <div className="completed-state-dev">
                            <LiaHourglassHalfSolid className="divIconsFontSize text-gray-400"/>
                            <div>
                                <h2 className="divH2FontSize font-black">22%</h2>
                                <p className="fontSizeClamp text-gray-400">DAYS TO GO</p>
                            </div>
                            <p className="current-state-fontSize col-span-2 text-center">Transition timeframe <span
                                className="text-gray-400">56 days</span></p>
                        </div>
                    </div>

                    <div>
                        <div className="flex mb-[20px] justify-center">
                            <div
                                className="w-[60%] bg-[#42B1C0] h-[8px] rounded-[50px] relative left-[6px] z-[2]"></div>
                            <div
                                className="w-[20%] bg-[#6B31A2] h-[8px] rounded-r-[50px] relative left-[3px] z-[1]"></div>
                            <div className="w-[20%] bg-[#F53361] h-[8px] rounded-r-[50px]"></div>
                        </div>
                        <div className="flex justify-around">
                            <div className="flex gap-[20px] items-center">
                                <div className="w-[15px] h-[15px] rounded-[50%] bg-[#42B1C0]"></div>
                                <p className="current-state-fontSize">Current state</p>
                            </div>
                            <div className="flex gap-[20px] items-center">
                                <div className="w-[15px] h-[15px] rounded-[50%] bg-[#6B31A2]"></div>
                                <p className="current-state-fontSize">Agreed timing</p>
                            </div>
                            <div className="flex gap-[20px] items-center">
                                <div className="w-[15px] h-[15px] rounded-[50%] bg-[#F53361]"></div>
                                <p className="current-state-fontSize">Time left</p>
                            </div>
                        </div>
                    </div>

                </section>

            </div>

    )
}

export default RecentTasksToReview
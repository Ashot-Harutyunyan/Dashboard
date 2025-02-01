import { useState } from 'react'

function Header() {

    const [open, setOpen] = useState(false)

    return <>
        <header className='container-main-header w-[calc(100%-60px)] ml-[60px]'>
            <div className="w-[90%] mx-auto flex justify-end gap-4 mb-5 mt-5">
                <img className="w-8" src="public/bell.svg" alt="bell" />
                <img className="w-13" src="public/user.svg" alt="user" />
            </div>

            <div className="w-[90%] mx-auto flex justify-between items-center
            flex-wrap gap-10 mb-[25px]">

                <div>
                    <span className='fontSizeClamp'>DASHBOARD</span>
                    <h2 className='text-[34px] font-black tracking-[2px]'>Insights</h2>
                </div>

                <div className="headerContent flex flex-wrap justify-center gap-[50px]">
                    <div>
                        <p className='fontSizeClamp'>TOTAL TRANSITIONS</p>
                        <p>15</p>
                    </div>

                    <div>
                        <div className="flex gap-2">
                            <p className='fontSizeClamp'>INITIATED</p>
                            <img className="widthClamp" src="public/exclamation.svg" alt="" />
                        </div>
                        <p>2</p>
                    </div>

                    <div>
                        <div className="flex gap-2">
                            <p className='fontSizeClamp'>IN PROGRESS</p>
                            <img className="widthClamp" src="public/exclamation.svg" alt="" />
                        </div>
                        <p>5</p>
                    </div>

                    <div>
                        <div className="flex gap-2">
                            <p className='fontSizeClamp'>COMPLETED</p>
                            <img className='widthClamp' src="public/exclamation.svg" alt="" />
                        </div>
                        <p>2</p>
                    </div>

                </div>

            </div>

            <div className={open ? 'menu  active' : 'menu'}>
                <div onClick={()=> setOpen(!open)}>
                    <div className="relative w-[52px] h-[35px] ml-[8px] flex justify-center items-center">
                        <img className="absolute ml-[-12px] w-[30px] rotate-90"
                             src="public/triangle-left.svg" alt="triangle left"
                        />
                        <div className="absolute w-[17px] h-[12px] bg-[#1D2585] rounded-full z-10"></div>
                        <img className="absolute mr-[-12px] w-[30px] -rotate-90"
                             src="public/triangle-right.svg" alt="triangle right"
                        />
                    </div>
                </div>

                <div className='minMenu pl-[25px] relative flex flex-col gap-8 items-center'>
                    <div className='flex gap-[50px]'>
                        <img className="w-5" src="public/home.svg" alt="home icon" />
                        <p className='menu-none text-[#fff] w-[100px]'>Dashboard</p>
                    </div>
                    <div className='flex gap-[50px]'>
                        <img className="w-5" src="public/arrow.svg" alt="arrow icon" />
                        <p className='menu-none text-[#fff] w-[100px]'>Transitions</p>
                    </div>
                    <div className='flex gap-[50px]'>
                        <img className="w-5" src="public/question-mark.svg" alt="question mark icon" />
                        <p className='menu-none text-[#fff] w-[100px]'>Support</p>
                    </div>
                </div>

                <div className='w-max ml-[20px] rounded-[50%] bg-white'>
                    <img className="w-8" src="public/plus.svg" alt="" />
                </div>
            </div>

           <hr className='w-[90%] mx-auto'/>
        </header>
    </>
}

export default Header
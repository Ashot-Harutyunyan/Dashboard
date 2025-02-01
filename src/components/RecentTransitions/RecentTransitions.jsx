import { IoIosCheckmarkCircle } from "react-icons/io"
import { useState } from "react"

function RecentTransitions() {

    const [open, setOpen] = useState(false)

    return (
            <div className="w-[100%] bg-white rounded-[25px] mx-auto flex flex-col gap-14 justify-center
            pl-[20px] pr-[20px] pb-[40px] pt-[20px]">

                <div className='w-[100%] flex justify-between items-center p-[10px]'>
                    <h2 className="fontSizeClamp">RECENT TRANSITIONS</h2>
                    <div className='flex items-center gap-5'>
                        <p className="fontSizeClamp ">Hide completed</p>
                        <div className='w-[30px] h-[15px] rounded-full bg-[#6B31A2] flex justify-end'>
                            <div className='border-1 bg-white w-[50%] h-[100%] rounded-full'></div>
                        </div>
                    </div>
                </div>



            <div className="rounded-[35px] border-l-33 border-l-[#F53361] shadow-md">

                <div className='container-recent-transitions inset-shadow-sm flex items-center 
                justify-around pt-[25px] pb-[25px] gap-[20px] rounded-r-[35px]'>

                    <div className="container-recent-transitions-div flex gap-[50px]">
                        <div className='flex gap-[25px]'>
                            <h2 className='titleClamp'>UI/UX Designer</h2>
                            <img className='w-[35px]' src="/public/flag.svg" alt="" />
                        </div>

                        <div>
                            <p className='fontSizeClamp mb-[6px]'>MY ROLE</p>
                            <p className='fontSizeClamp font-black'>Creator</p>
                        </div>
                    </div>


                    <div className="container-recent-transitions-div">
                        <p className='fontSizeClamp'>STATUS</p>
                        <button className='pt-[5px] pb-[5px] w-[250px]
                        bg-[#F53361] text-white rounded-[35px]'>
                            READY TO BE CONCLUDED
                        </button>
                    </div> 


                    <div className="container-recent-transitions-div flex gap-[50px]">
                        <div>
                            <p className='fontSizeClamp mb-[6px]'>DAYS TO GO</p>
                            <p className='fontSizeClamp font-black'>26</p>
                        </div>

                        <div className='flex items-center gap-8'>
                            <div className='flex gap-2'>
                                <p>15</p>
                                <img className='w-[15px]' src="/public/chat-alt.svg" alt="chat alt" />
                            </div>
                            <img onClick={()=> setOpen(!open)}
                            className='w-[15px] cursor-pointer' src="/public/down-arrow.svg" alt="" />
                        </div>
                    </div>

                </div>

                <div className={open ?  'container-recent-transitions transition-all flex items-center justify-around pt-[25px] pb-[25px] gap-[20px]'
                    : 'open-container container-recent-transitions transition-all flex items-center justify-around pt-[25px] pb-[25px] gap-[20px]'
                }>
                    <div>
                       <p className="fontSizeClamp">CREATOR</p>
                       <p className="fontSizeClamp">John Adams</p>
                    </div>

                    <div>
                       <p className="fontSizeClamp">COLLABORATOR</p>
                       <p className="fontSizeClamp">Nishant Mehra | Lu Shih</p>
                    </div>

                    <div>
                       <p className="fontSizeClamp">TRANSITOR</p>
                       <p className="fontSizeClamp">Sammy Jo</p>
                    </div>
     
                    <div>
                       <p className="fontSizeClamp ">TRANSITEE(S)</p>
                       <p className="fontSizeClamp ">Vladimir Nikolsky</p>
                    </div>

                    <div className='divIcons border-2 border-[#F53361] flex justify-center items-center rounded-[50%]'>
                       <img className='rotate-180' src="public/download-red.svg" alt="" />
                    </div>
                </div>

                <div className={open ? 'container-recent-transitions transition-all flex items-center justify-center pt-[25px] pb-[25px] gap-[20px] pr-[20px] pl-[20px]'
                    : 'open-container container-recent-transitions transition-all flex items-center justify-center pt-[25px] pb-[25px] gap-[20px] pr-[20px] pl-[20px]'
                }>
                    <div>
                        <p className="fontSizeClamp">COMPLETION PERCENTAGE</p>
                    </div>
                    <div className="text-right w-[70%]">
                        <p className="text-[#F53361] fontSizeClamp">100%</p>
                        <div className="bg-[#F53361] h-[8px] w-[100%] rounded-[35px]"></div>
                    </div>
                    <div className='divIcons border-2 border-[#F53361] bg-[#F53361] flex justify-center items-center rounded-[50%]'>
                        <img src="/public/eye.svg" alt="eye" />
                    </div>
                </div>

                <div className={ open ? 'container-recent-transitions transition-all flex items-center justify-around pt-[25px] pb-[25px] gap-[20px]'
                    : 'open-container container-recent-transitions transition-all flex items-center justify-around pt-[25px] pb-[25px] gap-[20px]'
                }>
                    <div>
                        <p className="fontSizeClamp">TASKS</p>
                        <p className="fontSizeClamp">26</p>
                    </div>

                    <div>
                        <p className="fontSizeClamp">KNOWLEDGE TRANSEFER</p>
                        <p className="fontSizeClamp">12</p>
                    </div>

                    <div>
                        <p className="fontSizeClamp">PRODUCTION PARALLEL</p>
                        <p className="fontSizeClamp">6</p>
                    </div>

                    <div>
                        <p className="fontSizeClamp">LIVE EXECUTION</p>
                        <p className="fontSizeClamp">N/A</p>
                    </div>

                    <div>
                        <IoIosCheckmarkCircle className="checkIcon text-[#6B31A2]"/>
                    </div>
                </div>

            </div>

                <div className='container-recent-transitions shadow-md inset-shadow-sm flex items-center 
                justify-around pt-[25px] pb-[25px] gap-[20px] rounded-[35px] border-l-33 border-l-[#6B31A2]'>

                <div className="container-recent-transitions-div flex gap-[50px]">
                    <div className='container-recent-transitions-h2 w-[245px]'>
                        <h2 className='titleClamp font-black'>Tech Lead</h2>
                    </div>

                    <div>
                        <p className='fontSizeClamp mb-[6px]'>MY ROLE</p>
                        <p className='fontSizeClamp font-black'>Collaborator</p>
                    </div>
                </div>


                <div className="container-recent-transitions-div">
                    <p className="fontSizeClamp">STATUS</p>
                    <button className='border-2 pt-[5px] pb-[5px] w-[250px]
                    bg-[#6B31A2] text-white rounded-[35px]'>
                        PRODUCTION PARALLEL
                    </button>
                </div>


                <div className="container-recent-transitions-div flex gap-[50px]">
                    <div>
                        <p className='fontSizeClamp mb-[6px]'>DAYS TO GO</p>
                        <p className='fontSizeClamp font-black'>26</p>
                    </div>

                    <div className='flex items-center gap-8'>
                        <div className='flex gap-2'>
                            <p>15</p>
                            <img className='w-[15px]' src="/public/chat-alt.svg" alt="chat alt" />
                        </div>
                        <img className='w-[15px]' src="/public/down-arrow.svg" alt="" />
                    </div>
                </div>

                </div>

                <div className='container-recent-transitions shadow-md inset-shadow-sm flex items-center 
                justify-around pt-[25px] pb-[25px] gap-[20px] rounded-[35px] border-l-33 border-l-[#42B1C0]'>

                     <div className="container-recent-transitions-div flex gap-[50px]">
                         <div className='container-recent-transitions-h2 w-[245px]'>
                             <h2 className='titleClamp font-black'>HR Manager</h2>
                         </div>

                         <div>
                             <p className='fontSizeClamp mb-[6px]'>MY ROLE</p>
                             <p className='fontSizeClamp font-black'>Transitor</p>
                         </div>
                     </div>

                    <div className="container-recent-transitions-div">
                        <p className="fontSizeClamp">STATUS</p>
                        <button className='border-2 pt-[5px] pb-[5px] w-[250px] 
                        bg-[#42B1C0] text-white rounded-[35px]'>
                            KNOWLEDGE TRANSFER
                        </button>
                    </div>

                    <div className="container-recent-transitions-div flex gap-[50px]">
                        <div>
                            <p className='fontSizeClamp mb-[6px]'>DAYS TO GO</p>
                            <p className='fontSizeClamp font-black'>26</p>
                        </div>

                        <div className='flex items-center gap-8'>
                            <div className='flex gap-2'>
                                <p>15</p>
                                <img className='w-[15px]' src="/public/chat-alt.svg" alt="chat alt" />
                            </div>
                               <img className='w-[15px]' src="/public/down-arrow.svg" alt="" />
                            </div>
                        </div>
                </div>

            </div>
    )
}

export default RecentTransitions
function Main({children}) {
    return (<>
        <div className='container-main-header w-[calc(100%-60px)] ml-[60px] mt-10'>

          <div className='w-[90%] pt-[30px] pb-[30px] pl-[5px] pr-[5px] mx-auto mt-[20px] rounded-3xl flex flex-wrap
          gap-5 items-center justify-around bg-[#FFFFFF]'>

            <div className='headlineText'>
               <img className='w-8 mr-[5px]' src='public/flag.svg' alt='flag' />
               <h2 className='text-xl font-black'>Transition ready to be concluded</h2>
                   <p className='text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       sed do dolores tempo incidents ut labor et</p>
            </div>

            <div className='headlineButtons w-[45%] flex gap-5 justify-center'>
                <button className='buttonsWidthClamp rounded-md bg-[#2B0F4D] cursor-pointer'>ADD OTHER TASKS</button>
                <button className='buttonsWidthClamp rounded-md bg-[#F53361] cursor-pointer'>CONCLUDE TRANSITION</button>
            </div>
          </div>

          
          {children}
          

        </div>
</>)
}

export default Main
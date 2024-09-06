import { IoPrintSharp } from "react-icons/io5";
import { MdContactPage, MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import '../App.css';

function Card({language,dateOfExam,rank,year}) {

  return (
    <>

<div className="w-full  text-white rounded-xl py-[22px] px-7 text-[18px] bg-slate-950 relative">
<div className=" absolute bottom-[14px] right-[25px] text-[18px] flex justify-center items-center ">more<MdOutlineKeyboardDoubleArrowDown className="text-[20px] mt-2" /></div>
<div className=" mx-auto flex w-full justify-between mb-[30px]">



    <div className=" flex flex-col gap-y-4 ">

    <h2>{dateOfExam}</h2>
    
        <div className='flex  justify-between  gap-x-[60px]'>

        <div className='flex-col flex  '><span className="text-[25px]">
             Exam
            </span>
              <span>
            {year}
            </span>
            </div>
        <div className='flex-col flex '> <span className="text-[25px]">
            Language 
            </span>
            <span>
             {language}
            </span>
             </div>
        <div className='flex-col flex '> <span className="text-[25px]">
            rank 
            </span>
            <span>
                {rank}
                </span>
                 </div>
        </div>
   
    </div>
        <div className=" flex justify-center items-center flex-col gap-y-4">
        <div className='bg-yellow-300 text-white px-[30px]  rounded-full py-[2px] '> Report  available</div>
        <div className="flex gap-x-2 text-[21px]"> <span><IoPrintSharp  className="mx-auto"/> <h1 className="mx-auto">Print</h1></span>

        <span><MdContactPage className="mx-auto" /> <h1 className="mx-auto">View</h1></span></div>
    </div>




</div>
</div>




     
    </>
  )
}

export default Card;


<div className="">
<div className="">
    <h2></h2>
    <div></div>
    <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
</div>

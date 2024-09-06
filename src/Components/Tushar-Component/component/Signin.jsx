import { useState } from 'react';
import { CiMail } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import '../App.css';
import Loader from './Loader';



function Signin() {
  let [loding,setloding]=useState(true);
  let [eyeok,eyeokloding]=useState(true);


  let handleSignin=async()=>{
    setloding(!loding)
  }

  return (
    <>
     <section className="min-w-[100%] min-h-[100%]   mt-0 relative p-0 m-0    bg-black bg-opacity-25 bg-contain 
      bg-[url('.\assets\indian-defence-force.jpeg')]
      
      element h-[840px] ">

    <div className="w-full h-full relative justify-start items-center   bg-[url('.\assets\indian-defence-force.jpeg') bg-cover   ">




      <img src="Images\rac_logo_2019_sm.png" className='w-[70px] rounded-full h-[70px] absolute top-7 left-10 z-50 ' alt="" srcset="" />


      <div className=" w-[full] h-full  flex justify-center items-center  relative mx-auto mt-7 ">
       {!loding&&<div className="h-full w-full opacity-40 bg-white absolute z-[20] top-0  ">

        </div>
    } 
      
      <div className="w-[550px] h-[85%]  flex border-[1px] rounded-2xl border-slate-600  justify-center  items-center flex-col relative  bg-white z-20 gap-y-8  ">


      <RxCross2  className=' absolute text-[30px] right-4 top-3'/>


        <h1 className='  text-[37px] font-inter  self-start  my-3 ml-8   font-md'>sign in</h1>
       
        <div className='w-[89%] mx-auto flex flex-col gap-y-1 relative'>
          {loding?<div className="w-[100%] mx-auto flex flex-col gap-y-2">


        <div className=" flex gap-y-5 flex-col    ... ">
          <h2 className='text-[14px] font-mono font-md  '>Email</h2>
          <div className=" relative ">
          <CiMail className="absolute left-[10px] z-20  top-[37%]  text-[16px]" />


          <input type="text"  className='w-[100%] outline-none border-[1px] rounded-md h-[60px]  flex pl-8 font-mono font-semibold text-[14px] shadow-indigo-500/40 shadow-sm  ... placeholder: ' placeholder='Email'/>
          </div>
          
        </div>
        <div className=" flex gap-2 flex-col  mt-5 - ... ">
          <h2 className='text-[14px] font-mono font-md  flex justify-between text-gray-500 '>
            <span>
                Password
                </span>
                <span className='flex justify-center items-center gap-x-3 '>
                    {eyeok?<IoEyeOutline className='text-[20px]' onClick={()=>eyeokloding(!eyeok)} />:

                    <FaRegEyeSlash onClick={()=>eyeokloding(!eyeok)}   className='text-[20px]' />} hide</span>
                </h2>
                <div className=" relative ">
          <CiMail className="absolute left-[10px] z-20  top-[37%]  text-[16px]" />


          <input type="password"  className='w-[100%] outline-none border-[1px] rounded-md h-[60px]  flex pl-8 font-mono font-semibold text-[14px] shadow-indigo-500/40 shadow-sm  ... placeholder: ' placeholder='Password'/>
          </div>
          
        </div>
          <div className=" flex justify-center items-center  gap-2 mt-6 w-full mb-7  ">
            <input type="checkbox"  className='checkbx checked:bg-black checked:text-transparent  text-transparenthover:bg-red-500 bg-transparent h-[27px]' />
            <div className='text-[15px] font-mono font-semibold  w-full   text-gray-900 flex  justify-between   '>
            <h1>
                Remember me 
                </h1>
                <h1>Need help?</h1>
                </div>
          </div>
            <div>

          </div>
            </div>:<div className="0 w-full h-[170px] relative">
              <div className=' absolute left-[170px]'>


            <Loader />
              </div>
            </div>
            }

            <button className=' mt-2 py-4 gap-y-3 text-[16px] font-bold font-mono  text-black  rounded-full transition-all bg-red-300 hover:bg-red-600 w-[95%] hover:text-white ' onClick={handleSignin}> Sign up</button>

            <div className="flex w-full  text-[14px] flex-col  justify-start mt-6 mb-2 gap-y-3">
     



            <div className="  flex w-full justify-start items-start   text-[14px] font-mono text-gray-500 font-medium  "> <span>
              Dont't have an account?
              </span>
              <div className=" font-bold text-blue-400 underline"   > Sign up</div>
            </div>

            

            <div className="   flex w-full justify-start flex-col items-start   text-[14px] font-mono text-gray-500 font-medium  "> <span>
              This page is protected by Google reCAPTCHA
              </span>
              <span>to ensure you're not a bot. <span className='text-black font-semibold'>Learn more.</span></span>
              
      </div>
        </div>
      </div>
            </div>
            </div>
          
    </div>
    

    
    
            </section>
            <div className=" relative w-[40px]  :bg-yellow-700 rounded-full py-0 h-[21px] flex my-2 ...
            ">
              <div className="bg-green-400 h-[18px] w-[18px] rounded-full absolute top-[2px] boxgoli "></div>


            <input type="checkbox " className=' full checkbxx  w-[40px] bg-transparent border-black border-[1px] appearance-none h-full group-hover:bg-red-700 rounded-full  checked:bg-yellow-700  outline-none  '    />

          
            </div>
    </>
  )
}

export default Signin;

import '../App.css';

import { useState } from 'react';
import { CiMail } from "react-icons/ci";
import Loader from './Loader';
function AccountCreation() {
  let [loding,setloding]=useState(true);
  let handleSignin=async()=>{
    setloding(!loding)
  }

  return (
    <>
    <div className=" w-full h-full relative flex justify-start items-center  gap-48  ">


      <img src="Images/officer.jpg" className=' h-[full] w-[34%]  contain-layout' alt="" srcset="" />

      <select name="" className='text-[10px] bg-white font-inter absolute right-[40px] top-[25px]' id="">

        <option value="" cl selected> English(united States)</option>

      </select>

      <img src="Images\rac_logo_2019_sm.png" className='w-[40px] rounded-full h-[40px] absolute top-2 left-3' alt="" srcset="" />


      <div className=" w-[full]   flex justify-center items-center  relative h-[700px] ">
       {!loding&&<div className="h-full w-full opacity-40 bg-white absolute z-[20] top-0  ">

        </div>
    } 
      
      <div className="w-[470px] h-[90%]  flex border-[1px] rounded-2xl border-slate-600  justify-center  items-center flex-col relative    ">





        <h1 className='  text-[24px] font-inter -mt-20 underline'>Create an account</h1>
        <p className='text-[10px] text-gray-700 max-w-[230px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati magni sint eligendi non dicta illo?</p>
        <div className='w-[89%] mx-auto flex flex-col gap-y-1 relative'>
          {loding?<div className="w-[100%] mx-auto flex flex-col gap-y-1">


        <div className=" flex gap-1 flex-col    ... ">
          <h2 className='text-[14px] font-mono font-semibold '>Email</h2>
          <div className=" relative ">
          <CiMail className="absolute left-[10px] z-20  top-[36%]  text-[17px]" />


          <input type="text"  className='w-[100%] outline-none border-[1px] rounded-md h-[60px]  flex pl-8 font-mono font-semibold text-[14px] shadow-indigo-500/40 shadow-sm  ... placeholder: ' placeholder='Email'/>
          </div>
          
        </div>
        <div className=" flex gap-1 flex-col  mt-5 - ... ">
          <h2 className='text-[12px] font-mono font-semibold '>Password</h2>
          <div className=" relative ">
          <CiMail className="absolute left-[10px] z-20  top-[36%]  text-[17px]" />


          <input type="Password"  className='  outline-none  active:border-black w-[100%] border-[1px] rounded-md h-[60px]  flex pl-8 font-mono font-semibold text-[12px] shadow-indigo-500/40 focus:shadow-lg shadow-sm  ... placeholder: ' placeholder='Password'/>
          </div>
          
        </div>
          <div className=" flex gap-2 mt-6 items-center justify-center ">
            <input type="checkbox"  className='h-[17px] bg-black' />
            <p  className='text-[12px]'> By creating an account, I agree to our  <span className=' underline' >Terms of use</span> and <span className=' underline'>Privacy Policy</span></p>
          </div>
            <div>

          </div>
            </div>:<div className="0 w-full h-[170px] relative">
              <div className=" absolute z-50 bg-transparent left-[135px]">


            <Loader />
              </div>
            </div>
            }

            <button className=' mt-2 py-4 text-[12px] font-bold font-mono  text-gray-400 rounded-full transition-all bg-red-100 hover:bg-red-200 w-[95%] hover:text-gray-500 ' onClick={handleSignin}> Sign up</button>

            
            <div className=" flex justify-center items-center gap-5 text-[18px] text-gray-950 mt-4   text-opacity-55 ">

              <div className='h-[1px] w-[40%] bg-slate-300 '></div>
              OR  
             
              <div className='h-[1px] w-[40%] bg-slate-300'></div>
            </div>

<buton className=" w-[99%] flex border-[1px] rounded-full py-3   justify-center items-center gap-x- text-[14px] transition-all my-4 hover:border-blue-400 hover:border-2"> 
              <img src="https://cdn.dribbble.com/users/904380/screenshots/2233565/attachments/415915/revised-google-logo.png" className='h-[30px] w-[39px]  ' alt="" srcset="" /> 
              
              Continue with Google</buton>




            <div className=" mx-auto self-center ml-[20%]  text-[12px] my-3 -mb-8 flex gap-1 "> <span>
              Already have an account ?
              </span>
              <div className=" font-bold text-blue-400 underline" > Login In</div>
            </div>
      </div>
      </div>
        </div>
    </div>

    
    
    </>
  )
}

export default AccountCreation;

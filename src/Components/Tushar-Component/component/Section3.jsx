import { FaRegCircleCheck } from "react-icons/fa6";
import { MdMonitor } from "react-icons/md";
import { TbFaceIdError } from "react-icons/tb";
import '../App.css';
function Section3() {
  return (
    <>
      <section className=" mt-0 relative p-0 m-0  bg-slate-200   z-0   py-16 w-full  text-slate-500 font-semibold">

        <div className=" w-[1265px] h-[500px] z-20 opacity-100 items-center  rounded-[24px] mx-auto bg-white flex flex-col gap-3   ">
          <div className='mt-4'>HOW SECURE?</div>
          <h1 className='text-black text-[38px] font-bold'>To solve the issue of cheating we have used Security Checks
          </h1>
          <div>
         
          
        




            <div className='grid  mt-20 gap-y-14 px-20 grid-cols-2'>
            <div className=" relative
                ">

              <div className=" flex  items-center gap-x-7 ">
              <div className="bg-blue-300 opacity-15 absolute z-20 left-[7px] w-[70px] h-[70px] top-[12px] rounded-xl"></div> 
                <div className=" z-40
                bg-blue-700 flex justify-center items-center text-white  h-[70px] w-[144px] rounded-xl text-[30px] ">

                  
<TbFaceIdError  />
                </div>
              
                  <div>

                <h1 className='text-black mb-2'>Face Identity


                </h1>
                <p>
                First your face id will be saved, which will be further verified during the interview also if it changes during exam, your interview fails.




                </p>
                  </div>
              </div>
              </div>
              <div className=" relative
                ">

              <div className=" flex  items-center gap-x-7 ">
              <div className="bg-blue-300 opacity-15 absolute z-20 left-[7px] w-[70px] h-[70px] top-[12px] rounded-xl"></div> 
                <div className=" z-40
                bg-blue-700 flex justify-center items-center text-white  h-[70px] w-[174px] rounded-xl text-[30px] ">

<FaRegCircleCheck />
                </div>
              
                  <div>

                <h1 className='text-black mb-2'>Screen Lock

                </h1>
                <p>
             
Once your Interview Started, your window will be locked in fullscreen mode and no further changes allowed, on quitting or changing screen, interview fails.






                </p>
                  </div>
              </div>
              </div>

                <div className=" relative
                ">

              <div className=" flex  items-center gap-x-7 ">
              <div className="bg-blue-300 opacity-15 absolute z-20 left-[7px] w-[70px] h-[70px] top-[12px] rounded-xl"></div> 
                <div className=" z-40
                bg-blue-700 flex justify-center items-center text-white  h-[70px] w-[148px] rounded-xl  text-[22px] ">

                  
{"</>"}
                </div>
              
                  <div>

                <h1 className='text-black mb-2'>
Speech Recognition Check


                </h1>
                <p>
                Your speech will play a major role, as it will be checked and saved, so that during interview, we can verify its you, and you can record.

                </p>
                  </div>
              </div>
              </div>
              <div className=" relative
                ">

              <div className=" flex  items-center gap-x-7 ">
              <div className="bg-blue-300 opacity-15 absolute z-20 left-[7px] w-[70px] h-[70px] top-[12px] rounded-xl"></div> 
                <div className=" z-40
                bg-blue-700 flex justify-center items-center text-white  h-[70px] w-[144px] rounded-xl text-[30px] ">
  <MdMonitor />
                </div>
              
                  <div>

                <h1 className='text-black mb-2'>
Lastly Your Consent



                </h1>
                <p>
                All these features will be implemented, if you want to proceed, without passing all 3 safety checks no interview or mock interview allowed.



                </p>
                  </div>
              </div>
              </div>


            </div>
          </div>




</div>

        
    
      </section>
    </>
  );
}

export default Section3;

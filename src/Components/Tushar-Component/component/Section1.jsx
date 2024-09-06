// import radioImage from '';
import { FaArrowRightLong } from "react-icons/fa6";
import '../App.css';
function Section1() {
  return (
    <>
      <section className=" mt-0 relative p-0 m-0  bg-slate-200   z-0   py-16 w-full  text-slate-500 font-semibold">

        <div className=" w-[1265px] h-[500px] z-20 opacity-100  rounded-[24px] mx-auto bg-white pl-[75px] flex flex-col gap-3 pt-7">


<div className="text-[38px] flex   text-black flex-col  font-semibold  ">
  <span className="bg-black text-[6px] flex justify-center  w-[25px] h-[12px]  rounded-xl text-white px-1 font-inter"> STEP1</span> 
  <div className=" leading-[1.1] flex flex-col my-6 font-inter font-bold 
  "> 


    <span className="" >Let's Understand how we </span>
    <span > evaluate you!
    </span>

  </div>
  
  {/*<img src="Images\IMG-20240830-WA0005.jpg"  className=" h-[160px] w-[160px] rounded-full"  />  */}

</div>

{/* <FaArrowRightLong className=" text-[30px] text-black" /> */}

<div className=" flex  gap-2 items-center ">

<div className="w-[314px] h-[270px] bg-slate-300 rounded-[24px] flex justify-center items-center py-1 gap-2 flex-col font-mono font-semibold text-[18px]  ">
        <img src="Images\IMG-20240830-WA0005.jpg" alt="" width={"150px"} height={"120px"} className="h-[160px] w-[160px] rounded-full" />

        <p className="max-w-[270px] relative leading-[1]"> <span className="text-black  left-[-10px] font-inter "> You give </span> answer in subjective form which can be recorded with speech


        </p>
        
    </div>

    <FaArrowRightLong className=" text-[40px] text-black mr-7" />
    <div className="w-[314px] h-[270px] bg-slate-300 rounded-[24px] flex justify-center items-center py-1 gap-2 flex-col font-mono font-semibold text-[18px]  ">
        <img src="Images\IMG-20240830-WA0007.jpg" alt="" width={"150px"} height={"120px"} className="h-[160px] w-[160px] rounded-full" />

        <p className="max-w-[270px] relative leading-[1]"> <span className="text-black  left-[-10px] font-inter ">  Our Al model</span> then evaluates your answer on the basis of grammar, tone role related knowledge and give score.


        </p>
        
    </div>
  
    <FaArrowRightLong className=" text-[40px] text-black mr-7" />    <div className="w-[314px] h-[270px] bg-slate-300 rounded-[24px] flex justify-center items-center py-1 gap-2 flex-col font-mono font-semibold text-[18px]  ">
        <img src="Images\IMG-20240830-WA0009.jpg" alt="" width={"150px"} height={"120px"} className="h-[160px] w-[160px] rounded-full" />
 
        <p className="max-w-[270px] relative leading-[1]"> <span className="text-black  left-[-10px] font-inter ">Then NLP  </span>on the basis of your answers decide next series of question set to be asked.
        </p>
        
    </div>
</div>
</div>


        
    
      </section>
    </>
  );
}

export default Section1;

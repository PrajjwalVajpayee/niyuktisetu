import { BiSearchAlt2 } from "react-icons/bi";
import '../App.css';
import Card from './Card';
import Header from './Header';
 

function DashBoard() {
    

    
    [

        {
            
            
            language :"Hindi,English",
            dateOfExam :"7/07/2024",
            rank:"1",
            year:"NDA 2024"
            
            
        },
        {
            
            
            language :"Hindi,English",
            dateOfExam :"7/07/2024",
            rank:"1",
            year:"NDA 2024"
            
            
        }
        
    ]
  return (
    <>
    <div className='bg-slate-200 w-full h-full  '>

    <div className=" bg-black py-3 mb-5"
    >

    <Header/>
    </div>
    <section className='bg-slate-200 w-[80%] mx-auto mt-[30px]  h-full  pl-0'>
        

        <div className=" flex justify-between    items-center py-5 px-3 ">
            <h1 className="text-[26px] font-semibold">Exam Record</h1>
            <div className='w-full max-w-[600px] relative'> 
            <BiSearchAlt2 className=" absolute right-[10px] top-[3px] text-[30px]" />
                
                
            <input type="text"  className=' w-full  rounded-full border-[1px] pr-10  py-4 border-black px-6 h-[30px]' placeholder='Search'/>
            </div>
        </div>
        <div className="flex justify-center items-center flex-col  gap-y-5">

      {
          userDashboardInfo.map(e=><Card language={e.language} dateOfExam ={e.dateOfExam}
            rank={e.rank}
            year={e.year}/>)
        }  
        </div>
        


        

    </section>



     </div>
    </>
  )
}

export default DashBoard;


import '../App.css';

function Header() {


  return (
    <>
    <div className=" flex justify-between w-full text-white relative element-content  px-2 pt-1  ">
      <div className="text-[16px]   font-bold ">NIYUKTI
        <span className='text-[#1A87C5] '>SETU</span>
        <span className='setu1'>by DRDO</span>
        </div>
      <div className='flex  font-bold  justify-center gap-x-14  text-[16px] text-pretty w-[750px] '>
<h1 className='bg-gradient-to-r from-[#7c757d] to-[#6a757d]  bg-clip-text text-transparent font-mono ...'>Home</h1>

<h1 className='bg-gradient-to-r from-[#7c757d] to-[#6a757d]  bg-clip-text text-transparent  font-mono ...'>Training</h1>

<h1 className='bg-gradient-to-r from-[#7c757d] to-[#6a757d]  bg-clip-text text-transparent font-mono ...'>Exam</h1>

<h1 className='bg-gradient-to-r from-[#7c757d] to-[#6a757d]  bg-clip-text text-transparent font-mono ...'>Support</h1>
      </div>
      <button className=' bg-[#3183b3] font-bold transition-all rounded-3xl   text-[10px] px-3 py-1    shadow-md shadow-blue-500/50 ... '>Sign Up</button>
    </div>
    
    </>
  )
}

export default Header;

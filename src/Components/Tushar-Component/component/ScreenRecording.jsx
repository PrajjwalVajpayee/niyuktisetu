
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import '../App.css';

function ScreenRecording() {
  let [img,setImg]=useState("");
  let imgRef=useRef("");
  let onTakePhoto=()=>{
    console.log(imgRef);
    setImg(imgRef);


  }

  

  

  return (

    <>
    
    
    
    <div className="flex w-full h-[700px] bg-slate-400  justify-center items-center">
      
   
    <Webcam
    audio={false} ref={imgRef} 
    screenshotFormat="image/jpeg"
    className="w-[150px] h-[200px] rounded-full "
    
  />


  <button className="" onClick={onTakePhoto}>slip</button>
    </div>
    
      
    </>
  );
}

export default ScreenRecording;


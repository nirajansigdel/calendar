import { useState } from "react";
import {  FaArrowLeft, FaArrowRight} from "react-icons/fa";

export default  function Calendar() {
    const[currentMonthIndex,setCurrentMonthIndex]=useState(0);
    const moveleft=()=>{
        setCurrentMonthIndex((index)=>index-1);
    }
    const moveright=()=>{
        setCurrentMonthIndex((index)=>index+1);
    }
  const month = [ 
    { id: 1, name:"January  " },
     { id: 2, name:"February"},
      { id: 3, name:"March" }, 
      { id: 4, name:"April" },
       { id:5, name:"May" },
       { id: 6, name:"june" }, 
       { id: 7, name:"july" }, 
       { id: 8, name:"August" }, 
       { id: 9, name:"September" }, 
       { id: 10, name:"October" }, 
       { id: 11, name:"November " }, 
       { id: 12, name:"December" }, 
       ]
       const day=[{name:"Sunday"},
       {name:"Monday"},
       {name:"Tuesday"},
       {name:"Wednesday"},
       {name:"Thursday"},
       {name:"Friday"},
       {name:"Saturday"}]
       const currentmonth=month[currentMonthIndex<0? month.length-1: currentMonthIndex % month.length ]


  return (
    <div className="flex bg-gray-50 justify-between px-5 py-7">
      <div className=" w-[700px] pt-6 bg-white px-2 rounded-md">
        <div className='flex justify-between pl-2 pr-4'>
          <div className="first-letter:capitalize text-lg font-normal font-serif pb-4 ">{currentmonth.name}</div>
        
          <div className="flex space-x-2">
          <FaArrowLeft onClick={ moveleft} className="cursor-pointer"/>
           <FaArrowRight onClick={moveright} className="cursor-pointer"/>
     
          </div>
          
        </div>
       
        <div className="grid">
           <div className="row  w-[700px]">
           {day.map((day)=>(
            <span className="row w-24 h-10  bg-gray-200 font-serif justify-center text-center items-center ">{day.name}</span>
           ))}
           </div>
           <div className="row ">
            <div className="col-1">1</div>
            <div className="col-2">1</div>
            <div className="col-3">1</div>
            <div className="col-4 ">1</div>
            <div className="col-5">1</div>

           </div>
        
      
        </div>


      </div>
      <div className="  w-[450px] py-5 space-y-3  items-center justify-center align-middle text-lg font-normal font-serifw-[700px] pt-6 bg-white  rounded-md">
       <div className="title border-b border-slate-600  w-full  text-lg font-normal font-serif pb-4">UpComming</div>
       <div className="subtitle mx-5 bg-orange-100 rounded-md">
          <div className="date s">111</div>
          <div className="event">holiday</div>

       </div>
       <div className="subtitle mx-5 bg-orange-100 rounded-md">
          <div className="date s">111</div>
          <div className="event">holiday</div>

       </div>
       <div className="subtitle mx-5 bg-orange-100 rounded-md">
          <div className="date s">111</div>
          <div className="event">holiday</div>

       </div>
      </div>
      
    </div>
  )
}



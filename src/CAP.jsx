import React from "react";
import { useState, useEffect} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner from './assets/banner.png'


function CAP(){
    const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1024/600/400"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 3500); 
  
      return () => clearInterval(interval); 
    }, [currentIndex]);
    
    return(
    <>
    <img src={banner} className='w-full'></img>
    <div className='flex text-[#003366]'>
    <div className='mx-auto w-1/2 my-20 border-r-1 p-9'>
    <h1 className='font-bold text-[1.5rem] text-'>CYC Senior BA Application</h1>
    <p className='my-10'>Welcome back to another semester with CYC. Interested in becoming more involved? <a className='text-gray-400 cursor-pointer'>Apply here!</a></p>
    <p className='my-10'>Sincerely,</p>
    <p className='my-10'>CYC at SHU</p>
    </div>
    <div className='mx-auto w-1/2 my-20 border-l-1 p-9'>
    <h1 className='font-bold text-[1.5rem] text-'>CYC Business Analyst Application</h1>
    <p className='my-10'>Thank you so much for your interest in CYC at Seton Hall University.  Applications are now open! <a className='text-gray-400 cursor-pointer'>Apply here!</a></p>
    <p className='my-10'>Sincerely,</p>
    <p className='my-10'>CYC at SHU</p>
    </div>
    </div>
    
  
    </>
    );
    };

export default CAP;
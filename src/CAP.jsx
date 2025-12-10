import React from "react";
import { useState, useEffect} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


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
    <div className='relative h-[1000px]'>

        <div className='absolute inset-0 group mx-auto w-[600px] h-[600px] z-50 rounded-full cursor-pointer translate-y-50'>
        <h1 className='text-[#003366] absolute inset-0 font-bold text-[2.5rem] z-40  text-center group-hover:text-white pointer-events-none translate-y-30 transition-colors duration-200'>Become a Client</h1>
        <p className='absolute inset-0 z-40  text-center text-[#003366] group-hover:text-white pointer-events-none translate-y-50 transition-colors duration-200'>Interested in partnering with us? Each semester, Consult Your<br/>Community at Seton Hall collaborates with local small businesses<br/>and nonprofits to provide valuable consulting support! If your<br/>organization would like to benefit from our pro-bono services,<br/>please complete a Client Interest Form. You can also reach us at<br/>setonhall@consultyourcommunity.org
.<br/><br/>Upon request, we’re happy to share a detailed overview of our<br/>national organization, the services we offer, and examples of past<br/>projects.<br/><br/><br/><br/>Click Here for Client Interest Form</p>
        <div className='absolute inset-0 bg-white w-[600px] h-[600px] opacity-50 mx-auto rounded-full text-center z-30 group-hover:bg-[#003366] group-hover:opacity-100 transition-colors duration-300'>
        </div>
        </div>
        

     <div className="absolute inset-0 w-full mx-auto">
    {/*<img src={Collage} className='w-full'></img>*/}
    </div>
    </div>
  
    </>
    );
    };

export default CAP;
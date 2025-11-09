import React from "react";
import { motion } from "framer-motion";

function Events(){
    return(
    <>
    <div className='mx-auto w-1/2 -translate-x-15 my-20'>
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{once: true}}
>
<h1 className='font-bold text-[3.6rem] mb-8 text-[#003366]'>Events</h1>
<p className='text-[1.2rem] text-[#003366]'>Discover what we has to offer with our upcoming events—a series of interactive experiences created to bring our community together. Whether you’re looking to grow your career, build connections, or just get inspired, these events have something for everyone. From leadership talks and networking nights to student showcases and alumni panels, each one is designed to help you learn, connect, and take the next step toward your goals. Join us and make the most of every opportunity—one event at a time.</p>
</motion.div>
        </div>
        <div className='bg-[#99ccee] flex w-18/19 px-20 py-15 pb-10 mx-auto gap-10 mb-20'>
     <div className="flex gap-9 mx-auto justify-center">
  <figure>
  <div className="group relative w-[300px] h-[350px]">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>This is just<br/>place-filler<br/>text<br/>taking the place<br/>of the<br/> <br/>video's explanitory text</p>
  <img className='w-[350px] h-[350px]' src='https://static.wixstatic.com/media/d7af91_36751cd0c46e4ef19191e26a3deab74d~mv2.jpg/v1/crop/x_719,y_0,w_2561,h_3000/fill/w_572,h_670,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20250407_225405.jpg'></img>
</div>
<figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-11 left-4 text-[#003366] z-40'>SGA retirement party!<br/><span className='ml-5'>February 21st 2:30 - 4:30 p.m.</span></figcaption>
</figure>
   <figure>
  <div className="group relative w-[300px] h-[350px]">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>This is just<br/>place-filler<br/>text<br/>taking the place<br/>of the<br/> <br/>video's explanitory text</p>
  <img className='w-[350px] h-[350px]' src='https://static.wixstatic.com/media/d7af91_36751cd0c46e4ef19191e26a3deab74d~mv2.jpg/v1/crop/x_719,y_0,w_2561,h_3000/fill/w_572,h_670,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20250407_225405.jpg'></img>
</div>
<figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-11 left-4 text-[#003366] z-40'>SGA retirement party!<br/><span className='ml-5'>February 21st 2:30 - 4:30 p.m.</span></figcaption>
</figure>
   <figure>
  <div className="group relative w-[300px] h-[350px]">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>This is just<br/>place-filler<br/>text<br/>taking the place<br/>of the<br/> <br/>video's explanitory text</p>
  <img className='w-[350px] h-[350px]' src='https://static.wixstatic.com/media/d7af91_36751cd0c46e4ef19191e26a3deab74d~mv2.jpg/v1/crop/x_719,y_0,w_2561,h_3000/fill/w_572,h_670,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20250407_225405.jpg'></img>
</div>
<figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-11 left-4 text-[#003366] z-40'>SGA retirement party!<br/><span className='ml-5'>February 21st 2:30 - 4:30 p.m.</span></figcaption>
</figure>
 <figure>
  <div className="group relative w-[300px] h-[350px]">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>This is just<br/>place-filler<br/>text<br/>taking the place<br/>of the<br/> <br/>video's explanitory text</p>
  <img className='w-[350px] h-[350px]' src='https://static.wixstatic.com/media/d7af91_36751cd0c46e4ef19191e26a3deab74d~mv2.jpg/v1/crop/x_719,y_0,w_2561,h_3000/fill/w_572,h_670,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20250407_225405.jpg'></img>
</div>
<figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-11 left-4 text-[#003366] z-40'>SGA retirement party!<br/><span className='ml-5'>February 21st 2:30 - 4:30 p.m.</span></figcaption>
</figure>
</div>
    </div>
   

    </>
    )
}

export default Events
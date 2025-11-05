import React from "react";
import { motion } from "framer-motion";

function OurTeam(){
return(
<>
<div className='flex relative h-[600px]'>
<img className='absolute inset-0 w-full h-[600px]' src='https://static.wixstatic.com/media/d7af91_6002960168e741d986672f8c64d8d55d~mv2.png/v1/fill/w_1901,h_665,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7af91_6002960168e741d986672f8c64d8d55d~mv2.png'></img>
<div className='absolute inset-0  w-full h-[600px] bg-[#004488] opacity-30'></div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{once: true}}
  className='absolute inset-0 z-10 text-center mt-55 font-bold text-[5rem] text-white'
>
<h1>MEET THE TEAM</h1>
</motion.div>
</div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{once: true}}
  className='text-center text-[4.4em] font-bold text-[#003366] mb-20 mt-20'
>
<h1>EXECUTIVE BOARD</h1>
</motion.div>
<div className='flex w-[1300px] mx-auto'>
<div className='mx-auto text-center'>
<img className='rounded-full w-[285px] cursor-pointer' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Sudarshan Srinivasan</h1>
<p className='text-[#003366]'>President</p>
</div>
<div className='mx-auto text-center'>
<img className='rounded-full w-[285px] cursor-pointer' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Arianna Walters</h1>
<p className='text-[#003366]'>VP of Internal Affairs</p>
</div> 
<div className='mx-auto text-center'>
<img className='cursor-pointer rounded-full w-[285px]' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Michael Waldron</h1>
<p className='text-[#003366]'>VP of Engagements</p>
</div>           
</div>
<div className='flex mt-10'>
<div className='mx-auto text-center'>
<img className='rounded-full w-[285px] cursor-pointer' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Caroline Rivers</h1>
<p className='text-[#003366]'>VP of Marketing</p>
</div>
</div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{once: true}}
  className='text-center text-[4.4em] font-bold text-[#003366] mb-20 mt-10'
>
<h1>PROJECT MANAGERS</h1>
</motion.div>
<div className='flex w-[1300px] mx-auto'>
<div className='mx-auto text-center'>
<img className='rounded-full w-[285px] cursor-pointer' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Rheeya Patel</h1>
<p className='text-[#003366]'>Engagement Manager</p>
</div>
<div className='mx-auto text-center'>
<img className='rounded-full w-[285px] cursor-pointer' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Jack Markowski</h1>
<p className='text-[#003366]'>Engagement Manager</p>
</div> 
<div className='mx-auto text-center'>
<img className='cursor-pointer rounded-full w-[285px]' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Talynn Diaz</h1>
<p className='text-[#003366]'>Engagement Manager</p>
</div>           
</div>
<div className='flex mt-10'>
<div className='mx-auto text-center'>
<img className='rounded-full w-[285px] cursor-pointer' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Cody Kaczmarczyk</h1>
<p className='text-[#003366]'>Engagement Manager</p>
</div>
</div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{once: true}}
  className='text-center text-[4.4em] font-bold text-[#003366] mb-20 mt-10'
>
<h1>DIRECTORS</h1>
</motion.div>
<div className='flex w-[1300px] mx-auto'>
<div className='mx-auto text-center'>
<a href='https://www.linkedin.com/jobs/'><img className='rounded-full w-[285px] cursor-pointer' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img></a>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>John Brignola</h1>
<p className='text-[#003366]'>Director of Finance and Fundrasing</p>
</div>
<div className='mx-auto text-center'>
<img className='rounded-full w-[285px] cursor-pointer' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Tiffany Clay</h1>
<p className='text-[#003366]'>Director of Graphic Design</p>
</div> 
<div className='mx-auto text-center'>
<img className='cursor-pointer rounded-full w-[285px]' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>William Martin</h1>
<p className='text-[#003366]'>Director of Impact</p>
</div>           
</div>
<div className='flex mt-10'>
<div className='mx-auto text-center'>
<img className='rounded-full w-[285px] cursor-pointer' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>July Flores</h1>
<p className='mb-20 text-[#003366]'>Director of Videography</p>
</div>
</div>
</>
)
}

export default OurTeam;

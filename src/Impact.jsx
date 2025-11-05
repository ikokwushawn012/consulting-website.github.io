import React from "react";
import { motion } from "framer-motion";
import { Quote} from 'lucide-react';

function Impact(){
return(
    <>
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  
  className="mt-17 text-center text-[1.3rem]"
  viewport={{once: true}}
>
  <h1 className='text-center text-[2.6rem] font-bold p-3 text-[#003366]'>Impact</h1>
    <p className='text-center p-2 text-[1.2rem] text-[#003366]'>Consultancy Impact Reports</p>
    <p className='text-center text-[1.2rem] text-[#003366]'>We take pride in the work we do within our community. Our impact reports highlight<br/>and measure the positive difference we’ve made at Seton Hall University and across<br/>the greater South Orange area. View them below.</p>
</motion.div>
    <div className='flex mx-auto w-[1000px] bg-gray-400 mt-20'>
    <img className='h-[350px] w-[250px]' src='https://static.wixstatic.com/media/d7af91_d5a92632000a43acaf798e6440d2fdbd~mv2.png/v1/fill/w_306,h_405,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7af91_d5a92632000a43acaf798e6440d2fdbd~mv2.png'></img>
    <img className='h-[350px] w-[250px]' src='https://static.wixstatic.com/media/d7af91_d5a92632000a43acaf798e6440d2fdbd~mv2.png/v1/fill/w_306,h_405,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7af91_d5a92632000a43acaf798e6440d2fdbd~mv2.png'></img>
    <img className='h-[350px] w-[250px]' src='https://static.wixstatic.com/media/d7af91_d5a92632000a43acaf798e6440d2fdbd~mv2.png/v1/fill/w_306,h_405,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7af91_d5a92632000a43acaf798e6440d2fdbd~mv2.png'></img>
    <img className='h-[350px] w-[250px]' src='https://static.wixstatic.com/media/d7af91_d5a92632000a43acaf798e6440d2fdbd~mv2.png/v1/fill/w_306,h_405,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d7af91_d5a92632000a43acaf798e6440d2fdbd~mv2.png'></img>
    </div>
    <div className='flex bg-gray-400 mx-auto w-[1000px] p-2'>
    <button className='cursor-pointer bg-white rounded-full text-[1.3rem] w-[170px] h-[40px] mr-20 ml-9 hover:bg-neutral-400 transitio-colors duration-185 group' type='button'><span className='group-hover:text-white transition-colors duration-185 text-[#003366]'>Click to view</span></button>
    <button className='cursor-pointer bg-white rounded-full text-[1.3rem] w-[170px] h-[40px] mr-20 hover:bg-neutral-400 transitio-colors duration-185 group' type='button'><span className='group-hover:text-white transition-colors duration-185 text-[#003366]'>Click to view</span></button>
    <button className='cursor-pointer bg-white rounded-full text-[1.3rem] w-[170px] h-[40px] mr-20 hover:bg-neutral-400 transitio-colors duration-185 group' type='button'><span className='group-hover:text-white transition-colors duration-185 text-[#003366]'>Click to view</span></button> 
    <button className='cursor-pointer bg-white rounded-full text-[1.3rem] w-[170px] h-[40px] hover:bg-neutral-400 transitio-colors duration-185 group' type='button'><span className='group-hover:text-white transition-colors duration-185 text-[#003366]'>Click to view</span></button>
    </div>
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  
  className="mt-17 text-center text-[2.8rem] font-bold text-[#003366]"
  viewport={{once: true}}
>
  Testimonials
</motion.div>

<div className='flex pb-5 mx-auto w-[900px] gap-50'>
<div className='flex'>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  
  className="mt-17 text-center text-[1.3rem]"
  viewport={{once: true}}
>
  <Quote className='inline w-10 h-10 -translate-x-1 text-[#003366]'/>
</motion.div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  
  className="mt-17 text-center text-[1.3rem] text-[#003366]"
  viewport={{once: true}}
>
  The people in CYC challenge and inspire me to do better for myself and strive higher. CYC is family.<br/><br/>- Engagement Manager
</motion.div>
</div>
<div className='flex'>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  
  className="mt-17 text-center text-[1.3rem]"
  viewport={{once: true}}
>
  <Quote className='inline w-10 h-10 -translate-x-1 text-[#003366]'/>
</motion.div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  
  className="mt-17 text-center text-[1.3rem] text-[#003366]"
  viewport={{once: true}}
>
  The people in CYC challenge and inspire me to do better for myself and strive higher. CYC is family.<br/><br/>- Engagement Manager
</motion.div>
</div>
</div>

<div className='flex pb-5 mx-auto w-[900px] gap-50 mb-15 ml-79'>
<div className='flex '>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  
  className="mt-17 text-center text-[1.3rem]"
  viewport={{once: true}}
>
  <Quote className='inline w-10 h-10 translate-x-1 text-[#003366]'/>
</motion.div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  
  className="mt-17 text-center text-[1.3rem] text-[#003366]"
  viewport={{once: true}}
>
  The people in CYC challenge and inspire me to do better for myself and strive higher.<br/><br/>- Engagement Manager
</motion.div>
</div>
<div className='flex'>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  
  className="mt-17 text-center text-[1.3rem]"
  viewport={{once: true}}
>
  <Quote className='inline w-10 h-10 translate-x-1 text-[#003366]'/>
</motion.div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  
  className="mt-17 text-center text-[1.3rem] text-[#003366]"
  viewport={{once: true}}
>
  The people in CYC challenge and inspire me to do better for myself and strive higher. CYC is family.<br/><br/>- Engagement Manager
</motion.div>
</div>
</div>
</>
);
}
export default Impact


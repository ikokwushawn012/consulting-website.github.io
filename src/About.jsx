import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import CountUp from 'react-countup';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from './assets/Image.jpg';


function About () {
const heading = ['Clients', 'Students'];
const paragraph = [
"Our campus consulting group partners with local\nbusinesses, startups, and campus organizations to\nsolve real-world challenges. We help clients with\nmarket research, social media strategy, and process\nimprovement while gaining hands-on consulting\nexperience.",
'Teams of 4 to 6 analysts are led by a more experienced\n undergraduate Engagement Manager over the course\n of the semester, supported by a dedicated group of\n faculty advisors, graduate students, and\n experienced professionals.'
];
const images = [
"https://st4.depositphotos.com/1006318/21584/v/450/depositphotos_215844300-stock-illustration-business-people-team-leader-leadership.jpg",
"https://www.shutterstock.com/image-vector/business-team-working-together-office-600nw-673875994.jpg"
];


const [currentIndex, setCurrentIndex] = useState(0);


function rightBtn (){
setCurrentIndex((prev) => prev === 1 ? 0 : prev + 1);
};


function leftBtn (){
setCurrentIndex((prev) => prev === 0 ? 1 : prev - 1);
};


useEffect(() => {
const interval = setInterval(() => {
rightBtn();
}, 4000);
return () => clearInterval(interval);
}, [currentIndex]);


return (
<>
<div className='flex flex-col md:flex-row gap-6 md:gap-30 mx-auto w-full md:w-[1367px] bg-white my-10 md:my-16 text-[#003366]'>
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
viewport={{once: true}}
>
<div className='mx-4 md:ml-27 my-5'>
<h1 className='font-bold text-3xl md:text-[3rem] mb-4 md:mb-6'>About Us</h1>
<h2 className='font-bold text-xl md:text-[1.5rem] mb-4 md:mb-6'>Seton Hall Chapter</h2>
<p className='text-base md:text-[1.2rem] mb-6 md:mb-8'>Consult Your Community at Seton Hall University, founded in 2018,<br/>is a student-run consulting organization that provides over 6,000 hours<br/>of pro-bono services to local small businesses, especially women- and<br/>minority-owned enterprises. Members apply their academic and analytical<br/>skills to help clients enhance marketing, operations, and overall business<br/>strategy, creating lasting impact within the South Orange community.</p>
<h2 className='font-bold text-xl md:text-[1.5rem] mb-4 md:mb-6'>Our Engagements</h2>
<p className='text-base md:text-[1.2rem] mb-6 md:mb-8'>Business analysts collaborate with local startups, small businesses,<br/>and campus organizations to improve operations, analyze markets,<br/>and develop growth strategies through data-driven insights.</p>
<h2 className='font-bold text-xl md:text-[1.5rem] mb-4 md:mb-6'>Our Stories</h2>
<p className='text-base md:text-[1.2rem] mb-6 md:mb-8'>Working with small businesses, we’ve witnessed incredible stories<br/>of growth, creativity, and community impact. Each business<br/>we support adds something new to the local landscape, from inspiring<br/>ideas to lasting change. Every partnership becomes part of a larger story<br/>of collaboration and success. Want to be part of the CYC story?<br/></p>
</div>
</motion.div>
<div className='mx-auto md:mx-0'>
<img className='w-full max-w-xs md:w-[400px] md:h-[400px] translate-y-10 md:translate-y-40 rounded-2xl shadow-2xl' src={Image}></img>
</div>
</div>


<div className='bg-[#2B3F63] w-full md:w-[1521px] h-auto md:h-[800px] py-10 '>
<h1 className='text-center font-bold text-2xl md:text-[3rem] mb-4 md:mb-7 mt-6 md:mt-10 text-white'>Small Business<br/>Large Impact</h1>
<div className='flex flex-col md:flex-row gap-6 md:gap-60 mx-auto justify-center'>
<div className='text-center'>
<p className='mb-4 md:mb-6 text-white'><b className='text-3xl md:text-[4rem] font-normal tracking-tighter'><CountUp end={28} duration={2} useEasing={false} enableScrollSpy scrollSpyOnce/></b><br/><span className='text-base md:text-[1.4rem]'>University Chapters across America</span></p>
<p className='mb-4 md:mb-6 text-white'><b className='text-3xl md:text-[4rem] font-normal tracking-tighter'>~<CountUp end={8} duration={2} useEasing={false} enableScrollSpy scrollSpyOnce/></b><br/><span className='text-base md:text-[1.4rem]'>Small businesses in an academic year</span></p>
<p className='mb-4 md:mb-6 text-white'><b className='text-3xl md:text-[4rem] font-normal tracking-tighter'><CountUp end={600} duration={2} useEasing={false} enableScrollSpy scrollSpyOnce/>+</b><br/><span className='text-base md:text-[1.4rem]'>Volunteers across the country</span></p>
</div>
<div className='text-center'>
<p className='mb-4 md:mb-6 text-white'><b className='text-3xl md:text-[4rem] font-normal tracking-tighter'><CountUp end={8} duration={2} useEasing={false} enableScrollSpy scrollSpyOnce/></b><br/><span className='text-base md:text-[1.4rem]'>Years in operation</span></p>
<p className='text-white'><b className='text-3xl md:text-[4rem] font-normal tracking-tighter'><CountUp end={6000} duration={2} useEasing={false} enableScrollSpy scrollSpyOnce/>+</b><br/><span className='text-base md:text-[1.4rem]'>Hours of pro-bono consulting</span></p>
</div>
</div>
</div>
    <img 
  className='mx-auto my-20 w-full max-w-[1024px] h-auto md:my-40 md:mb-60' 
  src='https://healthresearchhub.com/wp-content/uploads/2024/10/Health-improvements-1024x512.png' 
  alt='Health Improvements'
/>
    <div className='flex flex-col md:flex-row mx-auto justify-center my-6 md:my-20'>
<div className='relative mx-auto w-full md:w-[450px] h-64 md:h-[300px] mb-6 md:mb-0'>
<h1 className='text-2xl md:text-[2.7rem] text-[#2B3F63] md:translate-x-23'>Our Model</h1>
{images.map((src, index) => {
return <img src={src} key={index} className={`absolute inset-0 w-full h-full md:w-[450px] md:h-[300px] ${index === currentIndex ? 'z-2' : 'z-3'}`}></img>
})}
</div>
<div className={`bg-[#2B3F63] w-full md:w-[550px] h-auto md:h-[400px] pl-4 md:pl-15 pt-4 md:pt-15 relative md:-translate-x-23 z-1 transition-colors duration-0`}>
{heading.map((src, index) => {
return <h1 className={`z-2 transition-opacity duration-0 font-bold text-white mb-4 md:mb-6 text-xl md:text-[2.8rem] absolute inset-0 md:translate-y-15 md:translate-x-15 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`} key={index}>{src}</h1>
})}
{paragraph.map((src, index) => {
return <p className={`z-2 text-white text-base md:text-[1.24rem] absolute inset-0 md:translate-y-40 md:translate-x-15 whitespace-pre-line transition-opacity duration-0 ${index === currentIndex ? 'opacity-100' : 'opacity-0' }`} key={index}>{src}</p>
})}
</div>
<button
onClick={leftBtn}
className="hidden md:block top-1/2 left-4 bg-black/0 text-black p-3 -translate-x-330 rounded-full"
>
<ChevronLeft className="text-[#003366] hover:text-orange-400 cursor-pointer transition-colors duration-200" size={80} strokeWidth={1} />
</button>


<button
onClick={rightBtn}
className="hidden md:block top-1/2 right-4 bg-black/0 text-black p-3 rounded-full"
>
<ChevronRight className="text-[#003366] hover:text-orange-400 cursor-pointer transition-colors duration-200" size={80} strokeWidth={1}/>
</button>
</div>
</>
);
};


export default About;

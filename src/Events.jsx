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
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>CYC analysts present<br/> semester-long projects,<br/> sharing<br/> innovative client solutions,<br/> receiving feedback,<br/> and<br/> celebrating team growth.</p>
  <img className='w-[350px] h-[350px]' src='https://scontent-atl3-1.cdninstagram.com/v/t51.82787-15/588472298_18248936080295404_1930265369347992754_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=Mzc4MjY2Nzg1ODY0ODg2NTQ2Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=fiRnLhsAe2MQ7kNvwETDFsR&_nc_oc=AdmPv-MX2iQFvg0k-8M206i8epqPvE_mxysGAtkRlZzswhKdah3eg2tcQNp2rPLsD_MJ0fKn-t5KBD1w5PxBG5WQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_gid=UVyLNFCtBdPefNIrI_aguw&oh=00_AfmTSzbgPlWJTHHBN9p4lJ1bF87msXweNRgH2QQ3FIdoqA&oe=694A18C4'></img>
</div>
<figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-0 left-0 text-[#003366] z-40'>Finals Presentations<br/><span className='ml-5'>December 8th, Faculty Library 6F</span></figcaption>
</figure>
   <figure>
  <div className="group relative w-[300px] h-[350px]">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>CYC ends the semester<br/> with games,<br/> laughter, and Superlatives,<br/> allowing<br/> members to relax,<br/> connect,<br/> and celebrate.</p>
  <img className='w-[350px] h-[350px]' src='https://static.wixstatic.com/media/d7af91_36751cd0c46e4ef19191e26a3deab74d~mv2.jpg/v1/crop/x_719,y_0,w_2561,h_3000/fill/w_572,h_670,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20250407_225405.jpg'></img>
</div>
<figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-0 left-0 text-[#003366] z-40'>Finals Party<br/><span className='ml-5'>December 1st, Jubilee 141</span></figcaption>
</figure>
   <figure>
  <div className="group relative w-[300px] h-[350px]">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>Members learn from<br/> a<br/> Seton Hall alumna at BNY<br/> about<br/> client relationships, career advice, and<br/> industry insights.</p>
  <img className='w-[350px] h-[350px]' src='https://scontent-atl3-1.cdninstagram.com/v/t51.82787-15/581682487_18246879193295404_5303943083162161610_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=Mzc2Njk2NTg4MzA0NzM1ODE5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=m_-w9AQRdwEQ7kNvwGC-pRA&_nc_oc=AdmcuXi77FaU2g4M6I1ImLkPmRbF6u6_TcFJtIf9d8KU3ayJaFJW3U7HTbvhlh7neES46FfFKLvGiEffZ5-iIDq0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_gid=9PQrqykelta5dEWJnl1ZNQ&oh=00_Afm3ipszZeeuEdev8vCzD_tzaeGF3_nIai5AYfgi29S96g&oe=694A1511'></img>
</div>
<figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-0 left-0 text-[#003366] z-40'>Insights from the Bank of New York<br/><span className='ml-5'>November 17th, Schwartz 112</span></figcaption>
</figure>
 <figure>
  <div className="group relative w-[300px] h-[350px]">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>CYC hosts a workshop<br/> with<br/> Amy Korner (KPMG)<br/> on<br/> building personal brands, confidence, and professional identity.</p>
  <img className='w-[350px] h-[350px]' src='https://scontent-atl3-2.cdninstagram.com/v/t51.82787-15/572109004_18245081431295404_1527182135694253374_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=Mzc1NzQyNzc2MzgwMTA0Mjg5Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=pyYDgiR0LesQ7kNvwGgXVkB&_nc_oc=AdmzG4GHcVbMLR-JMSQ0_KhrXE70iRNgWVb9ssVVDORB1ZQpSJz3eD0uM0LVMuBZJaR-3QD4qssgfA2ZoussRPCj&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_gid=JlaaGMRBeVEQF1aYKuMQWQ&oh=00_AfmaGptdhwLKdEzXGbF7jykdacyfQEOhormTXpteJEzkmA&oe=694A0176'></img>
</div>
<figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-0 left-0 text-[#003366] z-40'>KPMG: Create Your Personal Brand<br/><span className='ml-5'>November 3rd, Jubilee 141</span></figcaption>
</figure>
</div>
    </div>
   

    </>
    )
}

export default Events
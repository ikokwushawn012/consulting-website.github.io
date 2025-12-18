import React from "react";
import { motion } from "framer-motion";

function OurServices (){
return(
<>
      <h1 className="text-center font-bold text-[5rem] text-[#003366] mb-16">
        Our Services
      </h1>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex mx-auto items-center rounded-full w-[650px] h-[200px] bg-[#003366] px-6 mb-8">
          <p className="text-white flex-1 text-[0.9rem]">
           Pickers NJ, a Maplewood landmark and home to the Sickles Collection, partnered with CYC SHU to drive growth. CYC provided market research, data analytics, improved marketing and social media, redesigned the store layout, enhanced digital presence, and offered operational guidance for long-term success.
          </p>
          <img src='https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-1/294596575_446461537478625_1733592393224947301_n.jpg?stp=c0.0.1536.1536a_dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=m0OJGbOa4HsQ7kNvwHHCt2v&_nc_oc=AdmzR5a3kmHy7mcqLXLzH9OyokzBtoMhPzObCpjb2QYlJ58CqNmaQGrhHRpSKKV9bFs&_nc_zt=24&_nc_ht=scontent-lga3-2.xx&_nc_gid=dga_UIvxsbiyADUAD6PUaA&oh=00_AflPjPJz_aSjjh5bG3kDfktOPnkG1RZLW9K3BtBvy1998g&oe=69413A6D' className="w-[150px] h-[150px] rounded-full ml-4"></img>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex mx-auto items-center rounded-full w-[650px] h-[200px] bg-[#003366] px-6 mb-8">
          <img src='https://pestojoe.com/cdn/shop/files/PJ_Wholesale.png?v=1746051063&width=1500' className="w-[150px] h-[150px] rounded-full mr-4"></img>
          <p className="text-white flex-1 text-[0.9rem]">
           Pesto Joe, a Seton Hall–born brand by Carina Castagna rooted in her family’s pesto traditions, partnered with CYC to support early growth. CYC designed merchandise, surveyed customers to refine products, rebuilt the online presence, and strengthened community connection.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex mx-auto items-center rounded-full w-[650px] h-[200px] bg-[#003366] px-6 mb-20">
          <p className="text-white flex-1 text-[0.9rem]">
            New Life Church, a multicultural community in Cliffside Park, partnered with CYC to strengthen its digital presence. CYC refreshed their website to increase visibility, created volunteer-focused social content to boost engagement, analyzed Bergen County demographics to clarify their audience.
          </p>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRHp5jy-o6dfirNSnDlnGDWyH7Sgc5t8G8A&s' className=" w-[150px] h-[150px] rounded-full ml-4"></img>
        </div>
      </motion.div>

      <h1 className="text-center font-bold text-[5rem] text-[#003366] mb-8">
        Other Notable Services
      </h1>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{once: true}} > <div className='flex  mx-auto w-1/2 gap-10 mb-8'> <span className=' text-[4rem] text-[#003366]'>❖</span> <p className='text-[#003366] text-[2.4rem] text-center translate-y-5'>Marketing & Brand Development</p> </div> </motion.div> 
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{once: true}} > <div className='flex  mx-auto w-1/2 gap-10 mb-8'> <span className=' text-[4rem] text-[#003366]'>❖</span> <p className='text-[#003366] text-[2.4rem] text-center translate-y-5'>Business Development & Strategy</p> </div> </motion.div> 
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{once: true}} > <div className='flex  mx-auto w-1/2 gap-10 mb-8'> <span className=' text-[4rem] text-[#003366]'>❖</span> <p className='text-[#003366] text-[2.4rem] text-center translate-y-5'>Operations</p> </div> </motion.div> 
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{once: true}} > <div className='flex  mx-auto w-1/2 gap-10 mb-20'> <span className=' text-[4rem] text-[#003366]'>❖</span> <p className='text-[#003366] text-[2.4rem] text-center translate-y-5'>Automations</p> </div> </motion.div>
    </>
);
}

export default OurServices;
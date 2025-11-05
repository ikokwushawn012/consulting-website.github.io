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
        <div className="flex mx-auto items-center rounded-full w-[550px] h-[200px] bg-[#003366] px-6 mb-8">
          <p className="text-white flex-1">
            This company doesn't suck balls so clearly<br />
            we did something right. Seek our consultation<br />
            now. I need to write more things for the<br />
            sentence to work omg I cannot spell.
          </p>
          <div className="bg-white w-[150px] h-[150px] rounded-full ml-4"></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex mx-auto items-center rounded-full w-[550px] h-[200px] bg-[#003366] px-6 mb-8">
          <div className="bg-white w-[150px] h-[150px] rounded-full mr-4"></div>
          <p className="text-white flex-1">
            This company doesn't suck balls so clearly<br />
            we did something right. Seek our consultation<br />
            now. I need to write more things for the<br />
            sentence to work omg I cannot spell.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex mx-auto items-center rounded-full w-[550px] h-[200px] bg-[#003366] px-6 mb-20">
          <p className="text-white flex-1">
            This company doesn't suck balls so clearly<br />
            we did something right. Seek our consultation<br />
            now. I need to write more things for the<br />
            sentence to work omg I cannot spell.
          </p>
          <div className="bg-white w-[150px] h-[150px] rounded-full ml-4"></div>
        </div>
      </motion.div>

      <h1 className="text-center font-bold text-[5rem] text-[#003366] mb-8">
        Other Notable Services
      </h1>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{once: true}} > <div className='flex justify-center gap-10 mb-8'> <span className='-translate-x-40 text-[4rem] text-[#003366]'>❖</span> <p className='text-[#003366] text-[2.4rem] text-center translate-y-5'>Pooped in a bucket</p> </div> </motion.div> 
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{once: true}} > <div className='flex justify-center gap-10 mb-8'> <span className='-translate-x-40 text-[4rem] text-[#003366]'>❖</span> <p className='text-[#003366] text-[2.4rem] text-center translate-y-5'>Pooped in a bucket</p> </div> </motion.div> 
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{once: true}} > <div className='flex justify-center gap-10 mb-8'> <span className='-translate-x-40 text-[4rem] text-[#003366]'>❖</span> <p className='text-[#003366] text-[2.4rem] text-center translate-y-5'>Pooped in a bucket</p> </div> </motion.div> 
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{once: true}} > <div className='flex justify-center gap-10 mb-20'> <span className='-translate-x-40 text-[4rem] text-[#003366]'>❖</span> <p className='text-[#003366] text-[2.4rem] text-center translate-y-5'>Pooped in a bucket</p> </div> </motion.div>
    </>
);
}

export default OurServices;
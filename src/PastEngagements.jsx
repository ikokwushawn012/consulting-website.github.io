import React from "react";
import { motion } from "framer-motion";

function PastEngagements(){
    return(
    <>
    <div className='mx-auto w-1/2 -translate-x-15 my-20'>
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{once: true}}
>
<h1 className='font-bold text-[3.6rem] mb-8 text-[#003366]'>Past Engagements</h1>
<p className='text-[1.2rem] text-[#003366]'>Over the years, Consult Your Community at Seton Hall has partnered with a wide range of local businesses and nonprofits—each with a unique story and mission. From helping small startups refine their growth strategies to supporting established organizations with marketing and operations, our student consultants have worked hands-on to make a real impact. Every project brings new challenges, learning experiences, and success stories that strengthen our community and our team. Below are some of our past engagements that showcase the difference we strive to make in every partnership</p>
</motion.div>
        </div>
        <div className='bg-[#99ccee] flex w-18/19 px-20 py-15 pb-10 mx-auto gap-10 mb-20'>
    <figure>
    <img className='w-[350px] h-[350px]' src='https://static.wixstatic.com/media/d7af91_efe07d090a254d76b64da2c5410cbf65~mv2.png/v1/fill/w_572,h_670,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1672_edited_edited.png'></img>
    <figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-11 left-4 text-[#003366]'>Wayne Enterprises<br/><span className='ml-5'>October 2024</span></figcaption>
    </figure>
    <figure>
    <img className='w-[350px] h-[350px]' src='https://static.wixstatic.com/media/d7af91_36751cd0c46e4ef19191e26a3deab74d~mv2.jpg/v1/crop/x_719,y_0,w_2561,h_3000/fill/w_572,h_670,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20250407_225405.jpg'></img>
    <figcaption className='bg-white font-bold indent-5 py-4 text-[1.1rem] relative bottom-11 left-4 text-[#003366]'>Stark Industries<br/><span className='ml-5'>April 2024</span></figcaption>
    </figure>
    <figure>
    <img className='w-[350px] h-[350px]' src='https://static.wixstatic.com/media/d7af91_192a6efae4964482a9ce40f72f46c0c5~mv2.jpg/v1/crop/x_725,y_0,w_2582,h_3024/fill/w_572,h_670,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6427.jpg'></img>
    <figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-11 left-4 text-[#003366]'>The Illuminati<br/><span className='ml-5'>January 2025</span></figcaption>
    </figure>
    <figure>
    <img className='w-[350px] h-[350px]' src='https://static.wixstatic.com/media/d7af91_db55b6a14a5f439ab3fe409b9276e260~mv2.png/v1/crop/x_0,y_347,w_4284,h_5018/fill/w_572,h_670,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2410_HEIC.png'></img>
    <figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-11 left-4 text-[#003366]'>Oscorp<br/><span className='ml-5'>February 2025</span></figcaption>
    </figure>
    </div>
    </>
    )
}

export default PastEngagements
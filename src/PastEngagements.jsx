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
<h1 className='font-bold text-[3.6rem] mb-8 text-[#003366]'>Current Engagements</h1>
<p className='text-[1.2rem] text-[#003366]'>Over the years, Consult Your Community at Seton Hall has partnered with a wide range of local businesses and nonprofits—each with a unique story and mission. From helping small startups refine their growth strategies to supporting established organizations with marketing and operations, our student consultants have worked hands-on to make a real impact. Every project brings new challenges, learning experiences, and success stories that strengthen our community and our team. Below are our current engagements that showcase the difference we strive to make in every partnership</p>
</motion.div>
        </div>
        <div className='bg-[#99ccee] flex w-18/19 px-20 py-15 pb-10 mx-auto gap-10 mb-20'>
    <figure>
    <img className='w-[350px] h-[350px]' src='https://s3-media0.fl.yelpcdn.com/bphoto/h6JrZot5RBEr0xB4XXlsvA/348s.jpg'></img>
    <figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-11 left-4 text-[#003366]'>JavaFlo Aesthetics</figcaption>
    </figure>
    <figure>
    <img className='w-[350px] h-[350px]' src='https://static1.squarespace.com/static/61da3149344b8c1f164d8cc9/t/65a6fe09cec96830c697efc7/1705442827554/New+Mommy+Official+Logo.png?format=1500w'></img>
    <figcaption className='bg-white font-bold indent-5 py-4 text-[1.1rem] relative bottom-11 left-4 text-[#003366]'>New Mommy at 40</figcaption>
    </figure>
    <figure>
    <img className='w-[350px] h-[350px]' src='https://i.ytimg.com/vi/B5rBvdKAfg4/maxresdefault.jpg'></img>
    <figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-11 left-4 text-[#003366]'>Jespy House</figcaption>
    </figure>
    <figure>
    <img className='w-[350px] h-[350px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5h-PKPFjhCdCtDwsYJPcG8qebnbN6HoejUw&s'></img>
    <figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-11 left-4 text-[#003366]'>Love Your Girl Boutique</figcaption>
    </figure>
    </div>
    </>
    )
}

export default PastEngagements
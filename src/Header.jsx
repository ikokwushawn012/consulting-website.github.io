
import { NavLink } from "react-router-dom";

function Header(){
return(

<div className='flex justify-between bg-[#f3f3f3] px-6 py-4 items-center text-[#003366]'>

<div>
<div className='flex'>
<NavLink to="/Home"><button className='cursor-pointer p-0 border-none bg-transparent translate-x-5 w-[100px]'><img className='w-32' alt='button img' src='https://static.wixstatic.com/media/d7af91_e0aac58a6988431aae99a5732975e914~mv2.png/v1/crop/x_0,y_0,w_180,h_125/fill/w_222,h_154,al_c,lg_1,q_85,enc_avif,quality_auto/cyc%20logo%20blue_edited.png'></img></button></NavLink>
</div>
</div>

<div className='m-0 flex gap-10 mt-5 mr-15'>
<div className='relative group h-10'>
<p className=' cursor-pointer hover:text-black transition-all duration-150 font-bold group-hover:opacity-50 text-[1.05rem]'><NavLink to="/Home">
          HOME
        </NavLink></p>
<div className='hidden group-hover:block absolute bg-neutral-200/50 bg-opacity-50 h-auto w-13 text-center mt-1 text-[1.05rem]'><b className='font-bold relative hover:text-neutral-400 transition-colors duration-200 cursor-pointer'><NavLink to="/About">
          About
        </NavLink></b></div>
</div>
<div className=' relative group'>
<p className=' cursor-pointer hover:text-black transition-all duration-250 font-bold group-hover:opacity-50 text-[1.05rem]'><NavLink to="/OurTeam">
          OUR TEAM
        </NavLink></p>

</div>
<div className='relative group'>
<p className=' cursor-default hover:text-black transition-all duration-250 font-bold group-hover:opacity-50 text-[1.05rem]'><NavLink to="/CAP">APPLY</NavLink></p>
</div>
<div className='relative group'>
<p className='cursor-default hover:text-black transition-all duration-250 font-bold group-hover:opacity-50 text-[1.05rem]'>RESOURCES</p>
<div className='hidden group-hover:block absolute bg-neutral-200/50 h-auto w-56 text-right p-2 mt-1 text-[1.05rem] z-4'>
<p><b className='font-bold relative b-10 hover:text-neutral-400 transition-colors duration-200 cursor-pointer block text-left'><NavLink to="/OurServices">
          Our Services
        </NavLink></b></p>
<p><b className='font-bold relative py-1 block hover:text-neutral-400 transition-colors duration-200 cursor-pointer text-left'><NavLink to="/Events">
        Events
        </NavLink></b></p>
        <p><b className='font-bold relative py-1 block hover:text-neutral-400 transition-colors duration-200 cursor-pointer text-left'><NavLink to="/PastEngagements">
          Current Engagements
        </NavLink></b></p>
</div>
</div>
<div className='relative group'>
<p className='cursor-pointer hover:text-black transition-all duration-250 font-bold group-hover:opacity-50 text-[1.05rem]'><NavLink to="/Impact">
          IMPACT
        </NavLink></p>
<div className='hidden group-hover:block absolute  bg-neutral-200/50 h-auto w-16 text-center mt-1 text-[1.05rem]'><b className='font-bold relative b-10 hover:text-neutral-400 transition-colors duration-200 cursor-pointer'><NavLink to="/Alumni">
          Alumni
        </NavLink></b></div>
</div>
</div>
</div>
);
}

export default Header;
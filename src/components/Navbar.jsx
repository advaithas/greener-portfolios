import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] =useState(false);

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='flex justify-between items-center h-24 w-full mx-auto px-4 font-poppins'>
        <h1 className='w-half text-3xl font-bold text-black cursor-pointer hover:opacity-60 hover:text-orange-600'>
           <Link to='/'><img className=" w-[65px] h-[5  0px] mb-px lg:ml-10" src="./src/components/assets/navicon.jpeg"></img></Link> 
        </h1>
        <ul className='{click ? "nav-menu active" : "nav-menu"} hidden md:flex text-black'>
            <Link to='/'><li className='p-4 cursor-pointer hover:opacity-80 hover:text-orange-500'>Home</li></Link>
            <Link to='/Blogs'><li className='p-4 cursor-pointer hover:opacity-80 hover:text-orange-500'>Blogs</li></Link>
            <Link to='/Events'><li className='p-4 cursor-pointer hover:opacity-80 hover:text-orange-500'>Events</li></Link>
            <Link to='/Members'><li className='p-4 cursor-pointer hover:opacity-80 hover:text-orange-500'>Members</li></Link>

      </ul>
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
            {nav ? <AiOutlineClose size={20} className='text-black' />  : <AiOutlineMenu size={20} className=' text-black'/> }
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 text-black bg-[#1A120B] bg-opacity-60 ease-in-out duration-700' : 'fixed collapse '}>
        <ul className='p-4 mt-40 text-black'>
                <Link to='/'><li className='p-4 border-b border-amber-700 cursor-pointer hover:opacity-60'>Home</li></Link>
                <Link to='/Blogs'><li className='p-4 border-b border-amber-700 cursor-pointer hover:opacity-60'>Blogs</li></Link>
                <Link to='/Events'><li className='p-4 border-b border-amber-700 cursor-pointer hover:opacity-60'>Events</li></Link>
                <Link to='/Members'><li className='p-4 border-b border-amber-700 cursor-pointer hover:opacity-60'>Members</li></Link>
                <Link to='/Contact'><li className='p-4 border-b border-amber-700 cursor-pointer hover:opacity-60'>Contact</li></Link>
        </ul>
      </div>
      
    </div>
    
  )
}

export default Navbar
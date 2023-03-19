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
    <div className='flex justify-between items-center h-24 w-full mx-auto px-4  bg-[#1A120B] '>
        <h1 className='w-half text-3xl font-bold text-[#D5CEA3] cursor-pointer hover:opacity-60'>
           <Link to='/'>ECLUB</Link> 
        </h1>
        <ul className='{click ? "nav-menu active" : "nav-menu"} hidden md:flex text-[#D5CEA3]'>
            <li className='p-4 cursor-pointer hover:opacity-60'>
              <Link to='/'>Home</Link>
            </li>
            <li className='p-4 cursor-pointer hover:opacity-60'>
              <Link to='/About'>About</Link>
            </li>
            <li className='p-4 cursor-pointer hover:opacity-60'>
              <Link to='/Members'>Members</Link>
            </li>
            <li className='p-4 cursor-pointer hover:opacity-60'>
              <Link to='/Contact'>Contact</Link>
            </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
            {nav ? <AiOutlineClose size={20} className='text-[#D5CEA3]' />  : <AiOutlineMenu size={20} className=' text-[#D5CEA3]'/> }
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 text-[#D5CEA3] bg-[#1A120B] bg-opacity-60 ease-in-out duration-700' : 'fixed collapse '}>
        <ul className='p-4 mt-40 text-[#D5CEA3]'>
                <li className='p-4 border-b border-amber-700 cursor-pointer hover:opacity-60'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='p-4 border-b border-amber-700 cursor-pointer hover:opacity-60'>
                  <Link to='/About'>About</Link>
                </li>
                <li className='p-4 border-b border-amber-700 cursor-pointer hover:opacity-60'>
                  <Link to='/Members'>Members</Link>
                </li>
                <li className='p-4 border-b border-amber-700 cursor-pointer hover:opacity-60'>
                  <Link to='/Contact'>Contact</Link>
                </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
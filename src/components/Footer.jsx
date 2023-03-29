import React from 'react'
import {
    FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-white border-t-2 font-poppins'>
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black bg-white'>
    <div>
      <h1 className="text-3xl">CONTACT US!<br/></h1>
      <h1 className='w-full text-3xl font-bold text-black'>Entrepreneurship Club PES University ECC</h1>
      <p className='py-4'>Welcome to the official site of The Entrepreneurship Club PES University ECC<br/><br/> Feel free to check out our recources and follow us on the Social Media platforms below</p>
      <div className='flex justify-between md:w-[75%] '>
          <a href="https://www.instagram.com/entrepreneurshipclub.pes/"><FaInstagram size={30} className="cursor-pointer hover:opacity-70 hover:text-orange-500" /></a>
          <a href=""><FaTwitterSquare size={30} className="cursor-pointer hover:opacity-7 hover:text-orange-5000 hover:text-orange-500" /></a>
          <a href="https://github.com/EntrepreneurshipClubPES"><FaGithubSquare size={30} className="cursor-pointer hover:opacity-70 hover:text-orange-500" /></a>
      </div>
    </div>
    <div className='lg:col-span-2 flex justify-between mt-6'>
  <div className='m-6'>
      <h6 className='text-3xl text-black cursor-pointer hover:opacity-70'>Visit Us!</h6>
      <ul>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>The Entrepreneurship Club, PES University ECC <br/>VM67+HVP, Hosur Rd, Konappana Agrahara, Electronic City, Bengaluru, Karnataka 560100</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>Email us here : <a href="mailto:entrepreneurship@pes.edu">entrepreneurship@pes.edu</a></li>
      </ul>
  </div>
  <div>
      <h6 className='text-3xl text-black cursor-pointer hover:opacity-70'>For Queries</h6>
      <ul>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'><b>Deepika Indran(PRESIDENT) :</b><br/> Contact No : -- <br/> Email : <a href="mailto:deepikaindran@gmail.com">deepikaindran@gmail.com</a> </li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'><b>Sampann Raheja(VICE PRESIDENT) :</b><br/> Contact No : -- <br/> Email : <a href="mailto:sampann2002@gmail.com">sampann2002@gmail.com</a> </li>
      </ul>
  </div>
    </div>
  </div>
  </div>
  )
}

export default Footer
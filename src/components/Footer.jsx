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
    <div className='w-full bg-[#1A120B]'>
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#1A120B]'>
    <div>
      <h1 className='w-full text-3xl font-bold text-[#D5CEA3]'>PESU ECLUB</h1>
      <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
      <div className='flex justify-between md:w-[75%] my-6 '>
          <FaFacebookSquare size={30} className="cursor-pointer hover:opacity-70"  />
          <FaInstagram size={30} className="cursor-pointer hover:opacity-70" />
          <FaTwitterSquare size={30} className="cursor-pointer hover:opacity-70" />
          <FaGithubSquare size={30} className="cursor-pointer hover:opacity-70" />
          <FaDribbbleSquare size={30} className="cursor-pointer hover:opacity-70" />
      </div>
    </div>
    <div className='lg:col-span-2 flex justify-between mt-6'>
  <div>
      <h6 className='font-medium text-[#D5CEA3] cursor-pointer hover:opacity-70'>Solutions</h6>
      <ul>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>Analytics</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>Marketing</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>Commerce</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>Insights</li>
      </ul>
  </div>
  <div>
      <h6 className='font-medium text-[#D5CEA3] cursor-pointer hover:opacity-70'>Support</h6>
      <ul>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>Pricing</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>Documentation</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>Guides</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>API Status</li>
      </ul>
  </div>
  <div>
      <h6 className='font-medium text-[#D5CEA3] cursor-pointer hover:opacity-70'>Company</h6>
      <ul>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>About</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>Blog</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>Jobs</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>Press</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>Careers</li>
      </ul>
  </div>
  <div>
      <h6 className='font-medium text-[#D5CEA3] cursor-pointer hover:opacity-70'>Legal</h6>
      <ul>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>Claim</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>Policy</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70'>Terms</li>
      </ul>
  </div>
    </div>
  </div>
  </div>
  )
}

export default Footer
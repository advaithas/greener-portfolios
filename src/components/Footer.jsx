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
      <h1 className='w-full text-3xl font-bold text-black'>PESU ECLUB</h1>
      <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
      <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} className="cursor-pointer hover:opacity-70 hover:text-orange-500"  />
          <FaInstagram size={30} className="cursor-pointer hover:opacity-70 hover:text-orange-500" />
          <FaTwitterSquare size={30} className="cursor-pointer hover:opacity-7 hover:text-orange-5000 hover:text-orange-500" />
          <FaGithubSquare size={30} className="cursor-pointer hover:opacity-70 hover:text-orange-500" />
          <FaDribbbleSquare size={30} className="cursor-pointer hover:opacity-70 hover:text-orange-500" />
      </div>
    </div>
    <div className='lg:col-span-2 flex justify-between mt-6'>
  <div>
      <h6 className='text-2xl text-black cursor-pointer hover:opacity-70'>Solutions</h6>
      <ul>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>Analytics</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>Marketing</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>Commerce</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>Insights</li>
      </ul>
  </div>
  <div>
      <h6 className='text-2xl text-black cursor-pointer hover:opacity-70'>Support</h6>
      <ul>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>Pricing</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>Documentation</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>Guides</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>API Status</li>
      </ul>
  </div>
  <div>
      <h6 className='text-2xl text-black cursor-pointer hover:opacity-70'>Company</h6>
      <ul>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>About</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>Blog</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>Jobs</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>Press</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>Careers</li>
      </ul>
  </div>
  <div>
      <h6 className='text-2xl text-black cursor-pointer hover:opacity-70'>Legal</h6>
      <ul>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>Claim</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>Policy</li>
          <li className='py-2 text-sm cursor-pointer hover:opacity-70 hover:text-orange-500'>Terms</li>
      </ul>
  </div>
    </div>
  </div>
  </div>
  )
}

export default Footer
import React from 'react'

const Home = () => {
  return (
    <div className='font-poppins'>
      <div className='grid grid-cols-2 pb-20 pt-20'>
        <div className='pt-10 pl-10 md:pt-16 md:pl-20 lg:pt-28 lg:pl-28'>
          <h1 className='text-black text-2xl md:text-2xl lg:text-5xl p-4'>Welcome to,<br/> The Entrepreneurship Club, <br/> PES University ECC</h1>
        </div>
        <div className=''>
          <img src="robot.png" alt="" className=' h-[250px] w-[300px] md:h-[450px] md:w-[450px] lg:h-[600px] lg:w-[600px]'></img>
        </div>
        
      </div>
      
    </div>
  )
}

export default Home
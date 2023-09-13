import React from 'react';
import Navigation from '../Navigation'

const Banner = () => {
  return (
    <div className='flex bg-background h-[65vh] items-center flex-col bg-cover w-full bg-gradient-bottom justify-center'>
        <Navigation />
      
       <div className="flex flex-1 w-full justify-center items-center">
        <div className="flex w-[50%] h-[25vh] justify-around flex-col">
            <div className="flex">Top trends</div>
            <div className="flex font-bold text-4xl">Blog Title</div>
            <div className="flex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            <button className="flex bg-blue-600 w-28 h-10 justify-center items-center font-medium text-white rounded-md">Learn More</button>
        </div>
       </div>
    </div>
  )
}

export default Banner
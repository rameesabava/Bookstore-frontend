import React from 'react'
import { FaArrowRight, FaEnvelope, FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='w-full bg-black text-white p-5'>
      <div className='md:grid grid-cols-3'>
        <div className='mx-5 my-5'>
          <h1 className='mb-3 text-2xl'>ABOUT US</h1>
          <p className='text-justify'>We believe books are more than just pages - they are windows into new worlds, teachers of wisdom, and companions for life. our journey began with a passion for storytelling and a mission to make reading accessible,enjoyable, and inspiring for everyone.</p>
        </div>
        <div className='mx-5 my-5'>
          <h1 className='mb-3 text-2xl'>NEWS LETTER</h1>
          <p>Stay updated with our latest trends</p>
          <div className='flex items-center'>
            <input type="text" className='bg-white my-3 text-black p-1' placeholder='E Mail' />
            <div className='bg-yellow-500 p-2'> <FaArrowRight /> </div>
          </div>
        </div>
        <div className='mx-5 my-5'>
          <h1 className='mb-3 text-2xl'>FOLLOW US</h1>
          <p>Let us be social</p>
          <div className='flex items-center gap-5 my-3'>
            <FaInstagram />
            <FaXTwitter className='mx-1' />
            <FaFacebookSquare />
            <FaEnvelope />
          </div>
        </div>
      </div>
      <p className='text-center'>Copyright &copy; 2026 All rights reserved | This website is made with By Luminar Technolab</p>
    </div>

  )
}

export default Footer
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Header />
      <>
        {/* header */}
        <div className='flex flex-col justify-center items-center my-5'>
          <h1 className='text-3xl font-bold my-5'>All Books</h1>
          <div className='flex my-5'>
            <input type="text" className='p-2 border border-gray-200 w-100' placeholder='Search By Book Title' />
            <button className='p-2 bg-blue-800 text-white'>Search</button>
          </div>
        </div>
        {/* grid - filter and book card */}
        <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10'>
          {/* filter */}
          <div className="col-span-1">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Filter</h1>
              <button onClick={()=>setToggle(!toggle)} className='font-bold text-2xl md:hidden'><FaBars /></button>
            </div>
            {/* filter category */}
            <div className={toggle? 'block':'hidden md:block'}>
              <div className="mt-3">
                <input type="radio" name='filter' id='no-filter' />
                <label className='ms-3' htmlFor="no-filter">All</label>
              </div>
              {/* duplicate filetr category */}
              <div className="mt-3">
                <input type="radio" name='filter' id='filter' />
                <label className='ms-3' htmlFor="filter">Category</label>
              </div>
            </div>
          </div>
          {/* books card */}
          <div className="col-span-3">
            <div className='md:grid grid-cols-4 w-full mt-5 md:mt-0'>
          {/* duplicate according to book */}
          <div className='shadow rounded p-3 m-4 md:mb-2'>
            <img width={'100%'} height={'300px'} src="https://static-cse.canva.com/blob/1427857/BlueOrangeandYellowCoolMemoir_InspirationalBookCover.jpg" alt="book" />
            <div className='flex flex-col justify-center items-center mt-4'>
              <h2 className='text-blue-700 font-bold text-xl'>author</h2>
              <h3 className='text-lg'>title</h3>
              <Link to={`/books/id`} className='bg-blue-800 p-2 text-white mt-2'>View Book</Link>
            </div>

          </div>
        </div>

          </div>
        </div>
      </>
      <Footer />
    </>
  )
}

export default Books
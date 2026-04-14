import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import { FaChartSimple, FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit py-10'>
      {/* image */}
      <div className='flex justify-center'>
        <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} className='z-52' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user" />

      </div>
      {/* name */}
      <h3 className='text-xl font-bold my-5 text-center'>Name</h3>
      {/* links */}
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className='mt-3'>
          <Link to={'/admin'} className='flex items-center'><FaChartSimple className='me-2' />Dashboard</Link>
        </div>
        <div className='mt-3'>
          <Link to={'/admin/resources'} className='flex items-center'><FaDatabase className='me-2' />Collections</Link>
        </div>
        <div className='mt-3'>
          <Link to={'/admin/settings'} className='flex items-center'><FaGear className='me-2' />Settings</Link>
        </div>

      </div>
    </div>
  )
}

export default AdminSidebar
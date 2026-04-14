import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'

function AdminResource() {
  const [currentTab, setCurrentTab] = useState(1)

  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <AdminSidebar />
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-3xl font-bold text-center mb-10'>All Resources</h1>
          {/* tabs */}
          <div className="flex justify-center items-center my-8 font-medium text-lg">
            <p onClick={() => setCurrentTab(1)} className={currentTab == 1 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' : 'p-4 border-gray-200 border-b rounded cursor-pointer'}>Books</p>
            <p onClick={() => setCurrentTab(2)} className={currentTab == 2 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' : 'p-4 border-gray-200 border-b rounded cursor-pointer'}>Users</p>
          </div>
          {/* tab contents */}
          {currentTab == 1 &&
            <div className='md:grid grid-cols-4 w-full my-5'>
              {/* duplicate according to book */}
              <div className='shadow rounded p-3 m-4 md:my-0'>
                <img width={'100%'} height={'300px'} src="https://static-cse.canva.com/blob/1427857/BlueOrangeandYellowCoolMemoir_InspirationalBookCover.jpg" alt="book" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h2 className='text-blue-700 font-bold text-xl'>author</h2>
                  <h3 className='text-lg'>title</h3>
                  <p className='font-bold text-red-500'>price</p>
                  {/* approve button */}
                  <button className='bg-green-600 text-white p-2 mt-2 w-full'>APPROVE</button>
                </div>

              </div>
            </div>
          }
          {currentTab == 2 &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicate according to users */}
              <div className='rounded bg-gray-200 p-2 m-2'>
                <p className='text-red-500 font-bold text-md'>ID: </p>
                <div className='flex mt-3 items-center'>
                  <img width={'80px'} height={'80px'} style={{ borderRadius: '50%' }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user" />
                  <div className='flex flex-col ml-3 w-full'>
                    <h4 className='text-blue-400 font-bold text-md'>Username</h4>
                    <p className='text-xs'>mail</p>

                  </div>
                </div>
              </div>
            </div>}
        </div>

      </div>
      <Footer />
    </>
  )
}

export default AdminResource
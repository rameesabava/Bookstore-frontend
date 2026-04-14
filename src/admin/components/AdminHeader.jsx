import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
      {/* header top */}
      <div className="flex justify-between items-center p-3 md:px-20">
        {/* logo */}
        <div className="flex items-center">
          <img width={'50px'} height={'50px'} src="https://th.bing.com/th/id/R.1a4fe3d63677e9e2cb786afb3a577382?rik=G%2bulQEM8kWPj1g&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fstack-of-books-transparent-background%2fstack-of-books-transparent-background-3.png&ehk=CxlBssyYOAkx6tBaf7DaCuNDqxxWH4mhFXlMs7cAhu0%3d&risl=&pid=ImgRaw&r=0" alt="logo" />
          <h1 className='text-2xl font-bold ms-2'>BOOKSTORE</h1>
        </div>
        {/* logout */}
        <button className='flex items-center px-3 py-2 bg-black text-white rounded border border-black hover:bg-white hover:text-black'>Logout <FaPowerOff className='ms-2'/></button>

      </div>
      {/* header marquee */}
      <div className="w-full p-3 bg-black text-white">
        <marquee>Welcome Admin, Your all set to manage and monitor the system. Let's get into work!!!</marquee>
      </div>
    </>
  )
}

export default AdminHeader
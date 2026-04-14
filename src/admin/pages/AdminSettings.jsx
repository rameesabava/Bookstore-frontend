import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FaPen } from 'react-icons/fa'

function AdminSettings() {
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <AdminSidebar />
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-3xl font-bold text-center mb-10'>Settings</h1>
          <div className='md:grid grid-cols-2 items-center'>
            {/* text part */}
            <div>
              <h2 className='text-xl mb-5 font-black'>Welcome, Admin 👋</h2>

              <p className='text-justify'>This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p>

              <h4 className='text-lg my-5 font-medium'>🔧 What You Can Manage in This Section:</h4>

              <ul>
                <li>✏️ Update personal details (name, email, role, profile picture)</li>
                <li>🔐 Change or reset your password</li>
                <li>📢 Configure notification and alert preferences</li>
                <li>👥 Manage permissions based on assigned access level</li>
                <li>🧩 Customize dashboard visibility and layout</li>
              </ul>
              <p className='my-5 text-justify'>
                Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚
              </p>
            </div>
            {/* edit part */}
            <div className='flex justify-center items-center flex-col m-10 bg-blue-100 p-5 rounded'>
              {/* edit picture */}
              <label htmlFor="userProfile">
                <input type="file" id='userProfile' hidden />
                <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} className='z-52' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user" />
                <button className='bg-black text-white px-3 py-2 rounded z-53' style={{ marginLeft: '50px', marginTop: '-15px' }}><FaPen /></button>
              </label>
              {/* username */}
              <div className='mt-10 mb-3 w-full px-5'>
                <input type="text" placeholder='Username' className='w-full border border-gray-300 rounded p-2' />

              </div>
              {/* new password */}
              <div className='mb-3 w-full px-5'>
                <input type="text" placeholder='New Password' className='w-full border border-gray-300 rounded p-2' />

              </div>
              {/* confirm password */}
              <div className='mb-3 w-full px-5'>
                <input type="text" placeholder='Confirm Password' className='w-full border border-gray-300 rounded p-2' />

              </div>
              
              {/* reset & update button */}
              <div className="flex justify-end w-full px-5 mt-5">
                <button className='bg-yellow-600 text-white py-2 px-3 rounded'>RESET</button>
                <button className='bg-green-600 text-white py-2 px-3 rounded ms-5'>UPDATE</button>
              </div>

            </div>

          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default AdminSettings
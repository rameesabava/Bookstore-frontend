import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
    const [offCanvas, setCanvas] = useState(false)
    return (
        <div>
            {/* button */}
            <button onClick={() => setCanvas(true)} className='bg-black text-white p-2 flex items-center rounded border hover:bg-white hover:text-black'><FaPen className='me-2' />Edit</button>
            {/* offcanvas */}
            {offCanvas &&
                <div>
                    <div className='fixed inset-0 bg-gray-500/75 w-full h-full'>
                        <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
                            {/* head */}
                            <div className="bg-black text-white px-3 py-4 flex justify-between text-2xl">
                                <h1>Update User Profile</h1>
                                <FaX onClick={() => setCanvas(false)} />

                            </div>
                            {/* body */}
                            <div className='flex justify-center items-center flex-col my-5'>
                                <label htmlFor="userProfile">
                                    <input type="file" id='userProfile' hidden />
                                    <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} className='z-52' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user" />
                                    <button className='bg-black text-white px-3 py-2 rounded z-53 fixed' style={{ marginLeft: '70px', marginTop: '-15px' }}><FaPen /></button>
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
                                {/* bio */}
                                <div className='mb-3 w-full px-5'>
                                    <input type="text" placeholder='Bio' className='w-full border border-gray-300 rounded p-2' />

                                </div>
                                {/* reset & update button */}
                                <div className="flex justify-end w-full px-5 mt-5">
                                    <button className='bg-yellow-600 text-white py-2 px-3 rounded'>RESET</button>
                                    <button className='bg-green-600 text-white py-2 px-3 rounded ms-5'>UPDATE</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>}

        </div>
    )
}

export default Edit
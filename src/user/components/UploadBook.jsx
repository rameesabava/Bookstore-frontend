import React from 'react'
import { FaPlus } from 'react-icons/fa'

function UploadBook() {
    return (
        <div className='p-10 my-20 mx-5 bg-gray-200'>
            <h1 className='text-center text-3xl font-medium'>Upload Book Details</h1>
            <div className='md:grid grid-cols-2 mt-10 w-full'>
                <div className='px-3'>
                    <div className='mb-3'>
                        <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Author' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Book Cover Page URL' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Total pages' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Original Price' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Discount Price' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <textarea type='text' placeholder='Abstract' rows={'5'} className='w-full p-2 rounded bg-white'></textarea>
                    </div>

                </div>
                <div className='px-3'>
                    <div className='mb-3'>
                        <input type="text" placeholder='Publisher' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Language' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='ISBN' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Category' className='w-full p-2 rounded bg-white' />
                    </div>
                    {/* upload book images */}
                    <div className="mb-3 flex justify-center items-center mt-10">
                        <label htmlFor="bookImages">
                            <input type="file" id='bookImages' hidden />
                            <img width={'200px'} height={'200px'} src="https://th.bing.com/th/id/R.712037bab8634a63b94c4cd1d22dc141?rik=3lotRj1zGK%2b0ag&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2%2fUpload-Transparent.png&ehk=1NW1RvOIMnDL%2bneLkwtLBWcJFFxE3uETUzRpfFe7RyA%3d&risl=&pid=ImgRaw&r=0" alt="Book file not found" />
                        </label>

                    </div>
                    {/* preview uploaded images */}
                    <div className="flex justify-center items-center mt-10">
                        <img width={'70px'} height={'70px'} src="https://static-cse.canva.com/blob/1427857/BlueOrangeandYellowCoolMemoir_InspirationalBookCover.jpg" alt="Book file not found" />
                        <label htmlFor="bookUpload">
                            <input type="file" id='bookUpload' hidden />
                            <FaPlus className='text-3xl ms-2' />
                        </label>

                    </div>
                </div>

            </div>
            {/* reset & add button */}
                                <div className="flex md:justify-end justify-center w-full px-5 mt-10">
                                    <button className='bg-gray-600 text-white py-2 px-3 rounded hover:text-gray-600 hover:bg-white'>RESET</button>
                                    <button className='bg-blue-600 text-white py-2 px-3 rounded ms-5 hover:text-blue-600 hover:bg-white'>ADD BOOK DETAILS</button>
                                </div>
        </div>
    )
}

export default UploadBook
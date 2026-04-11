import React from 'react'

function BookStatus() {
    return (
        <div className='p-10 my-15 shadow rounded'>
            {/* duplicate uploaded books */}
            <div className="p-5 rounded mt-4 bg-gray-100">
                <div className='md:grid grid-cols-[3fr_1fr]'>
                    <div className="px-4">
                        <h1 className='text-2xl'>title</h1>
                        <h1 className='text-xl'>author</h1>
                        <h3 className='text-lg text-blue-500'>$ discountPrice</h3>
                        <p className='text-justify'>abstract</p>
                        {/* status images */}
                        <div className='flex mt-3'>
                            <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-clipart/20230802/original/pngtree-pending-stamp-illustration-symbol-stamp-vector-picture-image_9294534.png" alt="pending" />
                            <img width={'120px'} height={'120px'} src="https://pngimg.com/uploads/approved/approved_PNG13.png" alt="approved" />
                            <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-clipart/20230813/original/pngtree-sold-a-grungy-seal-or-stamp-impression-with-scuffs-vector-picture-image_10531086.png" alt="sold" />
                        </div>

                    </div>
                    <div className='px-4 mt-4 md:mt-0'>
                        <img className='w-full' src="https://static-cse.canva.com/blob/1427857/BlueOrangeandYellowCoolMemoir_InspirationalBookCover.jpg" alt="No Image" />
                        <div className='mt-4 flex justify-end'>
                            <button className='bg-red-600 text-white p-2 rounded'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookStatus
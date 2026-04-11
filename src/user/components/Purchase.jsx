import React from 'react'

function Purchase() {
  return (
   <div className='p-10 my-15 shadow rounded'>
            {/* duplicate purchase books */}
            <div className="p-5 rounded mt-4 bg-gray-100">
                <div className='md:grid grid-cols-[3fr_1fr]'>
                    <div className="px-4">
                        <h1 className='text-2xl'>title</h1>
                        <h1 className='text-xl'>author</h1>
                        <h3 className='text-lg text-blue-500'>$ discountPrice</h3>
                        <p className='text-justify'>abstract</p>
                        {/* status images */}
                        <div className='flex mt-3'>
                            <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/023/629/698/non_2x/web-button-icon-purchase-button-free-png.png" alt="purchase" />
                        </div>

                    </div>
                    <div className='px-4 mt-4 md:mt-0'>
                        <img className='w-full' src="https://static-cse.canva.com/blob/1427857/BlueOrangeandYellowCoolMemoir_InspirationalBookCover.jpg" alt="No Image" />
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Purchase
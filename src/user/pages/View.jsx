import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { getSingleBookAPI } from '../../services/allAPI'
import axiosInstance from '../../api/axiosInstance'


function View() {
  const [modal, setModal] = useState(false)
  const [bookDetails, setBookDetails] = useState({})
  const { id } = useParams()

  console.log(bookDetails);
  

  useEffect(() => {
    getSingleBook()
  }, [])

  const getSingleBook = async () => {
    const result = await getSingleBookAPI(id)
    if (result.status == 200) {
      setBookDetails(result.data)

    }
  }

  return (
    <>
      <Header />
      <div className='md:m-10 m-5'>
        <div className='border p-5 shadow border-gray-200'>
          <div className='md:grid grid-cols-4 gap-x-10'>
            {/* image */}
            <div className='col-span-1'>
              <img className='w-full' src={bookDetails?.imageURL} alt="book" />
            </div>
            {/* book details */}
            <div className='col-span-3'>
              <div className='flex justify-between mt-5 md:mt-0'>
                <h3 className='text-2xl font-bold'>{bookDetails?.title}</h3>
                <button onClick={() => setModal(true)} className='text-gray-400'><FaEye /></button>
              </div>
              <h4 className='text-xl text-blue-700 my-5'>{bookDetails?.author}</h4>
              <div className='md:grid grid-cols-3 gap-5 my-5'>
                <p className='font-bold'>Publisher: {bookDetails?.publisher}</p>
                <p className='font-bold'>Language: {bookDetails?.language}</p>
                <p className='font-bold'>No. of Pages: {bookDetails?.pages}</p>
                <p className='font-bold'>Category: {bookDetails?.category}</p>
                <p className='font-bold'>ISBN: {bookDetails?.isbn}</p>
                <p className='font-bold'>Original Price: {bookDetails?.price}</p>
                <p className='font-bold'>Seller: {bookDetails?.sellerMail}</p>

              </div>

              <div className='md:my-10 my-4'>
                <p className='text-lg font-bold'>Abstract: {bookDetails?.abstract}</p>

              </div>
              <div className='flex justify-end'>
                <Link to={'/books'} className='bg-blue-900 text-white p-2 font-black flex items-center'><FaBackward className='me-2' />Back</Link>
                <button className='bg-green-900 text-white p-2 font-black ms-5'>Buy $ {bookDetails?.discountPrice}</button>

              </div>

            </div>

          </div>

        </div>
        {/* modal */}
        {modal &&
          <div className='relative z-10 overflow-y-auto' onClick={() => setModal(false)}>
            <div className="bg-gray-500/75 fixed inset-0">
              <div className='flex justify-center items-center min-h-screen'>
                <div className="bg-white rounded-2xl md:w-250 w-100">
                  {/* modal title */}
                  <div className='bg-black text-white p-3'>
                    <h3>Book Images</h3>
                  </div>
                  {/* modal body */}
                  <div className="relative p-5">
                    <p className="text-blue-500 flex items-center"><FaCamera className='me-2' />Camera clicks of the book </p>
                    <div className='md:flex flex-wrap my-4'>
                      {/* duplicate image */}
                      {
                        bookDetails?.uploadImages?.length>0?

                        bookDetails?.uploadImages?.map(filename=>(
                          <img className='md:w-75 w-25 md:me-2 mb-3 md:mt-0' src={`${axiosInstance.defaults.baseURL}/uploads/${filename}`} alt="book" />
                        ))
                        :
<div className='my-5 font-semibold'>Images are not available</div>
                      }

                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>}
      </div>
      <Footer />

    </>
  )
}

export default View
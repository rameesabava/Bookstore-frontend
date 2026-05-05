import React, { useState, useEffect } from 'react'
import { deleteUserUploadBookAPI, getAllUserBooksAPI } from '../../services/allAPI'

function BookStatus() {
    const [userBooks, setUserBooks] = useState([])

    useEffect(() => {
        getUserBooks()
    }, [])

    const getUserBooks = async () => {
        const result = await getAllUserBooksAPI()
        if (result.status === 200) {
            setUserBooks(result.data)
        }
    }

    const removeBook = async (id)=>{
        const result = deleteUserUploadBookAPI(id)
        getUserBooks()
    }

    return (
        <div className='p-10 my-15 shadow rounded'>
            {/* duplicate uploaded books */}
            {userBooks?.length > 0 ? (
                userBooks.map(book => (
                    <div key={book?._id} className="p-5 rounded mt-4 bg-gray-100">
                        <div className='md:grid grid-cols-[3fr_1fr]'>
                            <div className="px-4">
                                <h1 className='text-2xl'>{book?.title}</h1>
                                <h1 className='text-xl'>{book?.author}</h1>
                                <h3 className='text-lg text-blue-500'>$ {book?.discountPrice}</h3>
                                <p className='text-justify'>{book?.abstract}</p>

                                {/* status images */}
                                <div className='flex mt-3'>
                                    {
                                        book?.status == "pending" ?
                                            <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-clipart/20230802/original/pngtree-pending-stamp-illustration-symbol-stamp-vector-picture-image_9294534.png" alt="pending" />
                                            :
                                            book?.status == "approved" ?
                                                <img width={'120px'} height={'120px'} src="https://pngimg.com/uploads/approved/approved_PNG13.png" alt="approved" />
                                                :
                                                <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-clipart/20230813/original/pngtree-sold-a-grungy-seal-or-stamp-impression-with-scuffs-vector-picture-image_10531086.png" alt="sold" />

                                    }



                                </div>

                            </div>

                            <div className='px-4 mt-4 md:mt-0'>
                                <img className='w-full' src={book?.imageURL} alt="No Image" />
                                <div className='mt-4 flex justify-end'>
                                    <button onClick={()=>removeBook(book?._id)} className='bg-red-600 text-white p-2 rounded'>Delete</button>
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            ) : (
                <div>Books not uploaded yet</div>
            )}
        </div>
    )
}

export default BookStatus
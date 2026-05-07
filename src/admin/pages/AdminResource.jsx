import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { bookListAPI, editBookStatusAPI, userListAPI } from '../../services/allAPI'
import axiosInstance from '../../api/axiosInstance'
import { ToastContainer, toast } from 'react-toastify';


function AdminResource() {
  const [currentTab, setCurrentTab] = useState(1)
  const [allUsers, setAllUsers] = useState([])
  const [allBooks, setAllBooks] = useState([])

  console.log(allUsers);
    console.log(allBooks);

  
useEffect(()=>{
  if(currentTab==2){
    getAllUsers()
  }else{
    getAllBooks()
  }
},[currentTab])

  const getAllUsers = async ()=>{
    const result = await userListAPI()
    if(result.status==200){
      setAllUsers(result.data)
    }
  }

  const getAllBooks = async ()=>{
    const result = await bookListAPI()
    if(result.status==200){
      setAllBooks(result.data)
    }
  }

  const updateBookStatus = async (id)=>{
    const result = await editBookStatusAPI(id)
    if(result.status==200){
      toast.success("Book approved successfully")
      getAllBooks()
    }
  }
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
              {
                allBooks.length>0?
                allBooks?.map(book=>(
                  <div key={book?._id} className='shadow rounded p-3 m-4 md:my-0'>
                <img width={'100%'} height={'300px'} src={book?.imageURL} alt="book" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h2 className='text-blue-700 font-bold text-xl'>{book?.author}</h2>
                  <h3 className='text-lg'>{book?.title}</h3>
                  <p className='font-bold text-red-500'>$ {book?.discountPrice}</p>
                  {/* approve button */}
                  {
                    book?.status!="approved"?
                    <button onClick={()=>{updateBookStatus(book?._id)}} className='bg-green-600 text-white p-2 mt-2 w-full'>APPROVE</button>
                    :
// check mark
                  <img width={'40%'} src="https://static.vecteezy.com/system/resources/previews/016/774/415/large_2x/green-check-mark-icon-on-transparent-background-free-png.png" alt="check mark icon" />}
                </div>

              </div>
                ))
              
              :
                <div className='text-xl font-bold'>No books added yet...</div>
              }
            </div>
}
          {currentTab == 2 &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicate according to users */}
              {
                allUsers.length>0?
                allUsers.map(user=>(
                  <div key={user?._id} className='rounded bg-gray-200 p-2 m-2'>
                <p className='text-red-500 font-bold text-md'>ID: {user?._id}</p>
                <div className='flex mt-3 items-center'>
                  <img width={'80px'} height={'80px'} style={{ borderRadius: '50%' }} src={user?.picture == "" ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" : user?.picture.startsWith("https://lh3.googleusercontent.com/")?user?.picture:`${axiosInstance.defaults.baseURL}/uploads/${user?.picture}`} alt="user" />
                  <div className='flex flex-col ml-3 w-full'>
                    <h4 className='text-blue-400 font-bold text-md'>{user?.username}</h4>
                    <p className='text-xs'>{user?.email}</p>

                  </div>
                </div>
              </div>

                ))
                :
                <div className='text-xl font-bold'>Sorry!! Currently no users are registered</div>
              }
            </div>}
        </div>
      <ToastContainer position='top-center' theme='colored' autoClose={1000}/>

      </div>
      <Footer />
    </>
  )
}

export default AdminResource
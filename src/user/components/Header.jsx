import React, { useEffect, useState } from 'react'
import { FaBars, FaFacebookSquare, FaInstagram, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {
  const [toggle, setToggle] = useState(false)
  const [token,setToken] = useState("")
  const [dp,setDp] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
const userToken = sessionStorage.getItem("token")
    const user = JSON.parse(sessionStorage.getItem("user"))
    setToken(userToken)
    setDp(user.picture)
    }
      
  },[token])

  return (
    <>
      {/* Header top part */}
      <div className='grid grid-cols-3 p-3'>
        {/* logo */}
        <div className="flex items-center">
          <img width={'50px'} height={'50px'} src="https://th.bing.com/th/id/R.1a4fe3d63677e9e2cb786afb3a577382?rik=G%2bulQEM8kWPj1g&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fstack-of-books-transparent-background%2fstack-of-books-transparent-background-3.png&ehk=CxlBssyYOAkx6tBaf7DaCuNDqxxWH4mhFXlMs7cAhu0%3d&risl=&pid=ImgRaw&r=0" alt="logo" />
          <h1 className='text-2xl font-bold ms-2 md:hidden'>BOOKSTORE</h1>
        </div>
        {/* title */}
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='text-3xl font-bold'>BOOK STORE</h1>
        </div>

        {/* icons */}
        <div className='md:flex items-center justify-end hidden'>
          <FaInstagram />
          <FaXTwitter className='mx-1' />
          <FaFacebookSquare />
          {/* login link */}
         {
          !token ?
           <Link to={'/login'} className='border border-black rounded px-3 py-2 ms-3 flex items-center hover:bg-black hover:text-white'> <FaUser className='me-1' />Login</Link>
         :
         <div>
         {/* profile icon */}
          <button className='shadow-sm rounded ms-5 p-1 hover:bg-gray-100'>
            <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}} src={dp==""?"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png":dp} alt="profile icon" />
          </button>
{/* dropdown menu */}
         </div>
        
        }
        </div>
      </div>

      {/* Navigation part */}
      <nav className='bg-black w-full p-3 text-white md:flex justify-center items-center'>
        {/* menu & login @ small screen */}
        <div className='flex justify-between items-center text-2xl md:hidden'>
          <button onClick={() => setToggle(!toggle)}><FaBars /></button>
          <Link to={'/login'} className='border border-black rounded px-3 py-2 ms-3 flex items-center hover:bg-black hover:text-white'> <FaUser className='me-1' />Login</Link>

        </div>
        <ul className={toggle?'flex flex-col':'md:flex hidden'}>
          <li><Link to={'/'} className='md:mx-4 mt-2 md:mt-0'>HOME</Link></li>
          <li><Link to={'/books'} className='md:mx-4 mt-2 md:mt-0'>BOOKS</Link></li>
          <li><Link to={'/contact'} className='md:mx-4 mt-2 md:mt-0'>CONTACT</Link></li>

        </ul>
      </nav>
    </>
  )
}

export default Header
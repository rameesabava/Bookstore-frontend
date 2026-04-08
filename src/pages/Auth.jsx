import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Auth({ insideRegister }) {
const [togglePasswordType, setTogglePasswordType] = useState(false)

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(/landing.png)] bg-cover bg-center text-white'>
      <div className='p-10'>
        <h1 className='text-center font-bold text-3xl'>BOOK STORE</h1>
        <div style={{ width: '400px' }} className='bg-black text-white p-5 flex justify-center items-center flex-col my-5'>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%' }} className='border mb-5 flex justify-center items-center'>
            <FaUser className='text-3xl' />

          </div>
          <h1 className='text-2xl'>{insideRegister ? "Register" : "Login"}</h1>
          <form className='my-5 w-full'>
            {/* username */}
            {
              insideRegister &&
              <input type="text" className='bg-white p-2 w-full rounded my-5 text-black' placeholder='Username' />

            }
            {/* email */}
            <input type="text" className='bg-white p-2 w-full rounded mb-5 text-black' placeholder='E Mail' />
{/* password */}
            <div className='flex items-center'>
              <input type={togglePasswordType?"text":"password"} className='bg-white p-2 w-full rounded mb-5 text-black' placeholder='Password' />
{ togglePasswordType?
 <FaEyeSlash onClick={()=>setTogglePasswordType(!togglePasswordType)} className='text-gray-500 cursor-pointer' style={{marginTop:'-20px', marginLeft:'-30px'}}/>

:
 <FaEye onClick={()=>setTogglePasswordType(!togglePasswordType)} className='text-gray-500 cursor-pointer' style={{marginTop:'-20px', marginLeft:'-30px'}}/>
}            </div>
{/* forgot password */}
<div className='flex justify-between mb-5'>
  <p className='text-xs text-orange-300'>*Never share your passsword with others.</p>
  {!insideRegister &&
  <button className='text-xs underline'>Forgot Password</button> 
  }
  
</div>
{/* login/register button */}
<div className='text-center'>
  {
    insideRegister ?
    <button className='bg-green-700 p-2 w-full rounded'>Register</button>
    :
        <button className='bg-green-700 p-2 w-full rounded'>Login</button>

  }

</div>
{/* google authentication */}
{!insideRegister &&
  <div className='my-5 text-center'>
<p>--------------or------------</p>
<div className='mt-2 flex justify-center items-center w-full'>
  google authentication
</div>
</div>
}
{/* new/already exist user */}
<div className='my-5 text-center'>
  {
    insideRegister?
    <p className='text-blue-500'>Existing user? <Link to={'/login'} className='underline ms-5'>Login</Link></p>
    :
        <p className='text-blue-500'>New user? <Link to={'/register'} className='underline ms-5'>Register</Link></p>

  }

</div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Auth